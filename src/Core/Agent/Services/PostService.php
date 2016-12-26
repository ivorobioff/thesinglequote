<?php
namespace ImmediateSolutions\Core\Agent\Services;
use Doctrine\ORM\QueryBuilder;
use ImmediateSolutions\Core\Agent\Criteria\PostSorterResolver;
use ImmediateSolutions\Core\Agent\Entities\Agent;
use ImmediateSolutions\Core\Agent\Entities\Post;
use ImmediateSolutions\Core\Agent\Enums\Status;
use ImmediateSolutions\Core\Agent\Options\FetchPostsOptions;
use ImmediateSolutions\Core\Agent\Payloads\PostPayload;
use ImmediateSolutions\Core\Agent\Validation\PostValidator;
use ImmediateSolutions\Core\Support\Service;
use ImmediateSolutions\Support\Core\Criteria\Paginator;
use DateTime;
use ImmediateSolutions\Support\Core\Criteria\Sorting\Sorter;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class PostService extends Service
{
    /**
     * @param $ownerId
     * @param PostPayload $payload
     * @return Post
     */
    public function create($ownerId, PostPayload $payload)
    {
        $post = new Post();

        (new PostValidator())->validate($payload);

        $this->exchange($payload, $post);

        /**
         * @var Agent $agent
         */
        $agent = $this->entityManager->getReference(Agent::class, $ownerId);

        $post->setOwner($agent);

        $this->entityManager->persist($post);
        $this->entityManager->flush();

        return $post;
    }

    /**
     * @param int $id
     * @param PostPayload $payload
     */
    public function update($id, PostPayload $payload)
    {
        (new PostValidator())->validate($payload, true);

        /**
         * @var Post $post
         */
        $post = $this->entityManager->find(Post::class, $id);

        $this->exchange($payload, $post);

        $post->setUpdatedAt(new DateTime());

        $this->entityManager->flush();
    }

    /**
     * @param PostPayload $payload
     * @param Post $post
     */
    private function exchange(PostPayload $payload, Post $post)
    {
        $this->transfer($payload, $post, 'title');
        $this->transfer($payload, $post, 'privateMessage');
        $this->transfer($payload, $post, 'publicMessage');
        $this->transfer($payload, $post, 'clientName');
        $this->transfer($payload, $post, 'clientPhone');
        $this->transfer($payload, $post, 'noPersonalInfoInPublic');
    }

    /**
     * @param int $agentId
     * @param FetchPostsOptions|null $options
     * @return Post[]
     */
    public function getAll($agentId, FetchPostsOptions $options = null)
    {
        if ($options === null){
            $options = new FetchPostsOptions();
        }

        $builder = $this->startQuery($agentId);

        (new Sorter())->apply($builder, $options->getSortables(), new PostSorterResolver());

        return (new Paginator())->apply($builder, $options->getPagination());
    }

    /**
     * @param $agentId
     * @return int
     */
    public function getTotal($agentId)
    {
        $builder = $this->startQuery($agentId, true);

        return (int) $builder->getQuery()->getSingleScalarResult();
    }

    /**
     * @param $forAgentId
     * @param FetchPostsOptions $options
     * @return Post[]
     */
    public function getAllRequests($forAgentId, FetchPostsOptions $options = null)
    {
        if ($options === null){
            $options = new FetchPostsOptions();
        }

        $builder = $this->startQuery($forAgentId, false, true);

        (new Sorter())->apply($builder, $options->getSortables(), new PostSorterResolver());

        return (new Paginator())->apply($builder, $options->getPagination());
    }

    /**
     * @param int $forAgentId
     * @return int
     */
    public function getTotalRequests($forAgentId)
    {
        $builder = $this->startQuery($forAgentId, true, true);

        return (int) $builder->getQuery()->getSingleScalarResult();
    }

    /**
     * @param int $agentId
     * @param bool $isCount
     * @param bool $asRequests
     * @return QueryBuilder
     */
    private function startQuery($agentId, $isCount = false, $asRequests = false)
    {
        $builder = $this->entityManager->createQueryBuilder();

        $builder
            ->select($isCount ? $builder->expr()->countDistinct('p') : 'p')
            ->from(Post::class, 'p');

        if ($asRequests){
            $builder->andWhere($builder->expr()->neq('p.owner', ':owner'));
            $builder->andWhere($builder->expr()->neq('p.status', ':unwantedStatus'))
                ->setParameter('unwantedStatus', Status::DONE);
        } else {
            $builder->andWhere($builder->expr()->eq('p.owner', ':owner'));
        }

        $builder->setParameter('owner', $agentId);

        return $builder;
    }


    /**
     * @param int $id
     */
    public function delete($id)
    {
        $this->entityManager->getRepository(Post::class)->delete(['id' => $id]);
    }
}