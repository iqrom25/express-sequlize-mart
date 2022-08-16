## Market API

### Database Spec
- PostgreSQL

### API Spec

#### Create Customer
- Request: POST
- Endpoint : `/customers`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body : 
```json
{
    "name": "String",
    "address": "String",
    "phone": "Date",
    "email": "String",
    "balance": "Number"
}
```

Response:
```json
  {
     "code": "Number",
     "message": "String",
     "data": {
          "id": "UUID",
          "name": "String",
          "address": "String",
          "phone": "Date",
          "email": "String",
          "balance": "Number",
          "updatedAt": "Timestamp",
          "createdAt": "Timestamp",
          "deletedAt": "Timestamp"
      }
  }
  ```

#### List Customer
- Request: GET
- Endpoint : `/customers`
- Header :
    - Content-Type: application/json
    
Response:
```json
{
    "code": "Number",
    "message": "String",
    "keyword": "String",
    "data": [ 
      {
          "id": "UUID",
          "name": "String",
          "address": "String",
          "phone": "Date",
          "email": "String",
          "balance": "Number",
          "updatedAt": "Timestamp",
          "createdAt": "Timestamp",
          "deletedAt": "Timestamp"
       }
      ],
      "paging": {
        "page": "Number",
        "totalPages": "Number",
        "totalRows": "Number",
        "rowsPerPage": "Number"
    },
    "order": {
        "sortBy": "String",
        "sortType": "String"
    }
}
  ```

#### Get Customer By ID
- Request: GET
- Endpoint : `/customers/{id}`
- Header :
    - Content-Type: application/json
    - Accept: application/json

Response:
```json
  {
     "code": "Number",
     "message": "String",
     "data": {
          "id": "UUID",
          "name": "String",
          "address": "String",
          "phone": "Date",
          "email": "String",
          "balance": "Number",
          "updatedAt": "Timestamp",
          "createdAt": "Timestamp",
          "deletedAt": "Timestamp"
      }
  }
  ```

#### Update Customer
- Request: PUT
- Endpoint : `/customers`
- Header :
    - Content-Type: application/json
    - Accept: application/json

- Body : 
```json
{
    "id":  "UUID",
    "name": "String",
    "address": "String",
    "phone": "Date",
    "email": "String",
    "balance": "Number"
}
```

Response:
```json
  {
     "code": "Number",
     "message": "String",
     "data": {
          "id": "UUID",
          "name": "String",
          "address": "String",
          "phone": "Date",
          "email": "String",
          "balance": "Number",
          "updatedAt": "Timestamp",
          "createdAt": "Timestamp",
          "deletedAt": "Timestamp"
      }
  }
  ```

  #### Delete Customer
- Request: DELETE
- Endpoint : `/customers/{id}`