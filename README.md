# E-commerce API

Routes
---
Access : http://localhost:3000/api

### product

- base routes PRODUCT : http://localhost:3000/api/product

    - GET : /
        - description: Get all product
        - body : none
        - Headers : none
        - Response :
            - Success :
                Status Code : 200
                ``` 
                [{
                "userId":"5d590f86177f4e9993faf440",
                "_id":"5d590f86177f4e9993faf440",
                "name":"adidas shoes",
                "price":"100000",
                "stock":"100",
                "image":"fox.png",
                "description":"description of product",
                "created_at":"2019-08-18T08:42:46.543Z","
                updatedAt":"2019-08-18T08:42:51.334Z",
                "__v":0
                }]
                ```
            - Error :
                Status Code : 500
                ```
                {"message" : "Internal Server Error"}
                ```

    - GET : /:id
        - description : Get product by id
        - body : none
        - Headers : JWT Token
        - Response :
            - Success :
                Status Code : 200
                ``` 
                [{
                "userId":"5d590f86177f4e9993faf440",
                "_id":"5d590f86177f4e9993faf440",
                "name":"adidas shoes",
                "price":"100000",
                "stock":"100",
                "image":"fox.png",
                "description":"description of product",
                "created_at":"2019-08-18T08:42:46.543Z","
                updatedAt":"2019-08-18T08:42:51.334Z",
                "__v":0
                }]
                ```
            - Error :
                Status Code : 500
                ```
                {"message" : "Internal Server Error"}
                ```

    - POST : /
        - description : Create product
        - body : yes
        - Headers : JWT Token
        - Response :
            - Success :
                Status Code : 200
                ``` 
                [{
                "userId":"5d590f86177f4e9993faf440",
                "_id":"5d590f86177f4e9993faf440",
                "name":"adidas shoes",
                "price":"100000",
                "stock":"100",
                "image":"fox.png",
                "description":"description of product",
                "created_at":"2019-08-18T08:42:46.543Z","
                updatedAt":"2019-08-18T08:42:51.334Z",
                "__v":0
                }]
                ```
            - Error :
                Status Code : 500
                ```
                {"message" : "Internal Server Error"}
                ```

                Status Code : 401
                ```
                {
                    "message": "Unauthorized user"
                }
                ```
    - PATCH : /:id
        - description : Update product
        - body : yes
        - params : id
        - Headers : JWT Token
        - Response :
            - Success :
                Status Code : 200
                ``` 
                [{
                "userId":"5d590f86177f4e9993faf440",
                "_id":"5d590f86177f4e9993faf440",
                "name":"adidas shoes",
                "price":"100000",
                "stock":"100",
                "image":"fox.png",
                "description":"description of product",
                "created_at":"2019-08-18T08:42:46.543Z","
                updatedAt":"2019-08-18T08:42:51.334Z",
                "__v":0
                }]
                ```
            - Error :
                Status Code : 500
                ```
                {"message" : "Internal Server Error"}
                ```

                Status Code : 401
                ```
                {
                    "message": "Unauthorized user"
                }
                ```
    
    - DELETE : /:id
        - description : Delete produc
        - body : none
        - Headers : JWT Token
        - Response :
            - Success :
                Status Code : 201
                ``` 
                {
                    "_id":"5d590f86177f4e9993faf440",
                    "title":"cerita baru",
                    "content":"pada hari minggu ku mengerjakan portofolio",
                    "user":"5d58cc2a1481db8dd602dbe9",
                    "created_at":"2019-08-18T08:42:46.543Z","
                    updatedAt":"2019-08-18T08:42:51.334Z",
                    "__v":0
                }
                ```
            - Error :
                Status Code : 500
                ```
                {"message" : "Internal Server Error"}
                ```

                Status Code : 401
                ```
                {
                    "message": "Unauthorized user"
                }
                ```
                
    - PATCH : /:id
        - description : update data of an article
        - body : data that may want to be updated
            ```
            {
                title : String required,
                content : String,
                image : String,
            }
            ```
        - params : article ObjectId
        - Headers : JWT Token
        - Response :
            - Success :
                Status Code : 200
                ``` 
                {
                    "message" : "data is updated"
                }
                ```
            - Error :
                Status Code : 500
                ```
                {"message" : "Internal Server Error"}
                ```

                Status Code : 401
                ```
                {
                    "message": "Unauthorized user"
                }
                ```
                
    - DELETE /:id
        - description : delete an article
        - body : none
        - params : article id
        - Headers : JWT Token
        - Response :
            - Success :
                Status Code : 200
                ``` 
                {
                    "message" : "data is deleted"
                }
                ```
            - Error :
                Status Code : 500
                ```
                {"message" : "Internal Server Error"}
                ```

                Status Code : 401
                ```
                {
                    "message": "Unauthorized user"
                }
                ```
        
###Product

- base routes USER url : http://localhost:3000/api/user

    - POST : /register
        - description : create a new user
        - body : 
            ```
                { 
                    name : String,
                    email : String,
                    password : String,
                }
            ```
        - Headers : none
        - Response :
            - Success :
                Status Code : 201
                ``` 
                {   "_id":"5d4fcfcfe892dd5c17e365c6",
                    "name":"budi",
                    "email":budio@gmail.com",
                    "password":"$2a$10$KElSSENK14IoN4zsyY",
                    "__v":0
                }
                ```
            - Error :
                Status Code : 500
                ```
                {"message" : "Internal Server Error"}
                ```
    - POST : /login
        - description : login to the system
        - body : 
            ```
                { 
                    email : String,
                    password : String
                }
            ```
        - Headers : none
        - Response :
            - Success :
                Status Code : 200
                ``` 
                {   
                    "token" : "hcsuacnsdhidzuSDHBGASVGAwdu"
                }
                ```
            - Error :
                Status Code : 500
                ```
                {"message" : "Internal Server Error"}
                ```
                Status Code : 404
                ```
                {"message" : "username/password wrong"}
                ```

Usage
----

Make sure you have node js has been installed in your computer, then run the folder <b>server</b> the commands bellow in your terminal.

```
    $ npm init -y
    $ npm install
    $ nodemon app.js
```