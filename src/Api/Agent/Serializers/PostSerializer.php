<?php
namespace ImmediateSolutions\Api\Agent\Serializers;
use ImmediateSolutions\Api\Support\Serializer;
use ImmediateSolutions\Core\Agent\Entities\Post;

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
        return [
            'id' => $post->getId(),
            'title' => $post->getTitle(),
            'publicMessage' => $post->getPublicMessage(),
            'privateMessage' => $post->getPrivateMessage(),
            'clientName' => $post->getClientName(),
            'clientPhone' => $post->getClientPhone(),
            'createdAt' => $this->datetime($post->getCreatedAt())
        ];
    }
}