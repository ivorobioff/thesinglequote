<?php
namespace ImmediateSolutions\Core\Agent\Services;
use ImmediateSolutions\Core\Agent\Entities\Quote;
use ImmediateSolutions\Core\Agent\Payloads\QuotePayload;
use ImmediateSolutions\Core\Support\Service;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class QuoteService extends Service
{
    /**
     * @param int $requestId
     * @param int $ownerId
     * @return Quote
     */
    public function getByRequestAndOwnerId($requestId, $ownerId)
    {

    }

    /**
     * @param int $requestId
     * @param int $ownerId
     * @param QuotePayload $payload
     * @return Quote
     */
    public function create($requestId, $ownerId, QuotePayload $payload)
    {
        $quote = new Quote();

        return $quote;
    }

    /**
     * @param int $requestId
     * @param int $ownerId
     * @param QuotePayload $payload
     */
    public function updateByRequestAndOwnerId($requestId, $ownerId, QuotePayload $payload)
    {

    }

    /**
     * @param int $requestId
     * @param int $ownerId
     */
    public function deleteByRequestAndOwnerId($requestId, $ownerId)
    {

    }

}