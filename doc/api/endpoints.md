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



