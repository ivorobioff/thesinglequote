## Agent

##### Creates an agent

##### `POST /agents`

+ Request

            {
                ... Agent Payload
            }

+ Response

            {
                ... Agent Object
            }

##### Gets a agent

##### `GET /agents/{agentId}`

+ Response

            {
                ... Agent Object
            }

##### Updates an agent

##### `PATCH /agents/{agentId}`

+ Request

            {
                ... Agent Payload
            }

##### Deletes an agent

##### `DELETE /agents/{agentId}`


### Post

##### Creates an agent post

##### `POST /agents/{agentId}/posts`

+ Request
            
            {
                ... Agent Post Payload
            }
            
+ Response

            {
                ... Agent Post Object
            }
            
            
##### Updates an agent post

##### `PATCH /agents/{agentId}/posts/{postId}`

+ Request
            
            {
                ... Agent Post Payload
            }
            

##### Gets all posts of a specific agent

##### `GET /agents/{agentId}/posts`
            
+ Parameters
    + page: int
    + perPage: int

+ Response
            
            {
                "data": [
                    {
                        ... Agent Post Object
                    }
                ],
                "meta": {
                    "pagination": {
                        ... Pagination Object
                    }
                }
            }


##### Deletes an agent post

##### `DELETE /agents/{agentId}/posts/{postId}`


##### Gets all quote requests

##### `GET /agents/{agentId}/requests`

+ Parameters
    + page: int
    + perPage: int

+ Response
            
            {
                "data": [
                    {
                        ... Agent Post Object
                    }
                ],
                "meta": {
                    "pagination": {
                        ... Pagination Object
                    }
                }
            }


##### Creates a quote

##### `POST /agents/{agentId}/requests/{requestId}/quote`

+ Request

            {
                ... Agent Quote Payload
            }

+ Response

            {
                ... Agent Quote Object
            }

##### Updates a quote

##### `PATCH /agents/{agentId}/requests/{requestId}/quote`

+ Request

            {
                ... Agent Quote Payload
            }

##### Gets a quote

##### `GET /agents/{agentId}/requests/{requestId}/quote`

+ Response

            {
                ... Agent Quote Object
            }
            
##### Deletes a quote

##### `DELETE /agents/{agentId}/requests/{requestId}/quote`


## Session

##### Gets a session

##### `GET /sessions/{sessionId}`

+ Response

            {
                ... Session Object
            }

##### Creates a session

##### `POST /sessions`

+ Request 

            {
                "username": string,
                "password": string
            }

+ Response

            {
                ... Session Object
            }

##### Refresh a session

##### `POST /session/{sessionId}/refresh`

+ Response

            {
                ... Session Object
            }

##### Deletes a session

##### `DELETE /sessions/{sessionId}`


## Document

##### Creates a document

##### `POST /documents`

+ Request

            {
                ... Document Payload
            }

+ Response

            {
                ... Document Object
            }



