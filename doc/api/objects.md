##### User Object

            {
                "id": int,
                "username": string,
                "type": User Type Enum
            }
            
            
##### Agent Object

            {
                ... User Object
           
                "email": string,
                "fullName": string,
                "insuranceLicenseNumber": string
            }


##### Agent Payload

            {                
                "email": string,
                "password": string,
                "fullName": string,
                "insuranceLicenseNumber": string
            }


##### Agent Post Object

            {
                "id": int,
                "status": Agent Post Status Enum,
                "title": string,
                "publicMessage": string,
                "privateMessage": string,
                "clientName": string,
                "clientPhone": string,
                "createdAt": string,
                "noPersonalInfoInPublic": bool
            }
            
##### Agent Post Payload

            {
                "title": string,
                "publicMessage": string,
                "privateMessage": string,
                "clientName": string,
                "clientPhone": string,
                "noPersonalInfoInPublic": bool
            }


##### Agent Quote Payload

            {
                "price": float,
                "plan": Quote Plan Enum,
                "note": string,
                "commission": int,
                "document": {
                    ... Document Identifier Payload
                }
            }
            
##### Agent Quote Object

            {
                "id": int
                "price": float,
                "plan": Quote Plan Enum,
                "note": string,
                "commission": int,
                "document": {
                    ... Document Identifier Payload
                },
                "proposer": {
                    ... Agent Object
                }
            }


##### Session Object

            {
                "id": int,
                "token": string,
                
                "user": {
                    ... Agent Object
                },
                
                "createdAt": datetime,
                "expireAt": datetime
            }

##### Document Object

            {
                "id": int,
                "name": string,
                "url": string
                "size": int,
                "format": string,
                "uploadedAt": datetime
            }

##### Document Payload

            {
                document: file
            }

##### Document Identifier Payload

            {
                "id": int,
                "token": string
            }
            
##### Pagination Object

            {
                "total": int,
                "perPage": int,
                "page": int,
                "totalPages": int,
            }