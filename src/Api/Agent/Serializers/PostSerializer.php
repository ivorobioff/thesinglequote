<?php
namespace ImmediateSolutions\Api\Agent\Serializers;
use ImmediateSolutions\Api\Support\Serializer;
use ImmediateSolutions\Core\Agent\Entities\Post;
use ImmediateSolutions\Core\Agent\Enums\Status;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class PostSerializer extends Serializer
{
    /**
     * @param Post $post
     * @return array
     */
    public function __invoke(Post $post)
    {
        $data = [
            'id' => $post->getId(),
            'title' => $post->getTitle(),
            'publicMessage' => $post->getPublicMessage(),
            'createdAt' => $this->datetime($post->getCreatedAt()),
            'status' => $this->enum($post->getStatus())
        ];

        if ($this->session->getUser()->getId() == $post->getOwner()->getId() || $post->getStatus()->is(Status::DONE)){
            $data = array_merge($data, [
                'privateMessage' => $post->getPrivateMessage(),
                'clientName' => $post->getClientName(),
                'clientPhone' => $post->getClientPhone(),
                'noPersonalInfoInPublic' => $post->getNoPersonalInfoInPublic()
            ]);
        }

        return $data;
    }
}