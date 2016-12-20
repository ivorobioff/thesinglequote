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