<?php
namespace ImmediateSolutions\Core\Agent\Services;
use Doctrine\ORM\QueryBuilder;
use ImmediateSolutions\Core\Agent\Entities\Agent;
use ImmediateSolutions\Core\Agent\Entities\Post;
use ImmediateSolutions\Core\Agent\Options\FetchPostsOptions;
use ImmediateSolutions\Core\Agent\Payloads\PostPayload;
use ImmediateSolutions\Core\Agent\Validation\PostValidator;
use ImmediateSolutions\Core\Support\Service;
use ImmediateSolutions\Support\Core\Criteria\Paginator;
use DateTime;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class PostService extends Service
{
    /**
     * @param $agentId
     * @param PostPayload $payload
     * @return Post
     */
    public function create($agentId, PostPayload $payload)
    {
        $post = new Post();

        (new PostValidator())->validate($payload);

        $this->exchange($payload, $post);

        /**
         * @var Agent $agent
         */
        $agent = $this->entityManager->getReference(Agent::class, $agentId);

        $post->setAgent($agent);

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
    }

    /**
     * @param int $agentId
     * @param FetchPostsOptions|null $options
     * @return array
     */
    public function getAll($agentId, FetchPostsOptions $options = null)
    {
        if ($options === null){
            $options = new FetchPostsOptions();
        }

        $builder = $this->startQuery($agentId, $options);

        return (new Paginator())->apply($builder, $options->getPagination());
    }

    /**
     * @param $agentId
     * @param FetchPostsOptions $options
     * @return int
     */
    public function getTotal($agentId, FetchPostsOptions $options = null)
    {
        if ($options === null){
            $options = new FetchPostsOptions();
        }

        $builder = $this->startQuery($agentId, $options, true);

        return (int) $builder->getQuery()->getSingleScalarResult();
    }

    /**
     * @param int $agentId
     * @param FetchPostsOptions $options
     * @param bool $isCount
     * @return QueryBuilder
     */
    private function startQuery($agentId, FetchPostsOptions $options, $isCount = false)
    {
        $builder = $this->entityManager->createQueryBuilder();

        $builder
            ->select($isCount ? $builder->expr()->countDistinct('p') : 'p')
            ->from(Post::class, 'p');

        if ($options->isInverted()){
            $builder->andWhere($builder->expr()->neq('p.agent', ':agent'));
        } else {
            $builder->andWhere($builder->expr()->eq('p.agent', ':agent'));
        }

        $builder->setParameter('agent', $agentId);

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