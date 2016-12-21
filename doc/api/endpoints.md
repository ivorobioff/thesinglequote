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
            
##### Gets all agent posts

##### `GET /agents/posts`

+ Response
            
            {
                "data": [
                    {
                        ... Agent Post Object
                    }
                ]
            }

##### Gets all posts of a specific agent

##### `GET /agents/{agentId}/posts`
            
+ Response

            {
                ... Agent Post Object
            }


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



