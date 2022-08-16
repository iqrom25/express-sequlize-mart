## Market API

### Database Spec
- PostgreSQL

### API Spec

#### Create Customer
- Request: POST
- Endpoint : `/customer`
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
      "status": {
          "code": "Number",
          "message": "String"
      },
      "data": {
          "id": "String",
          "name": "String",
          "address": "String",
          "phone": "Date",
          "email": "String",
          "balance": "Number",
          "updatedAt": "Timestamp",
          "createdAt": "Timestamp",
          "deletedAt": "Timestamp"
      },
       "paging": {
        "page": "Number",
        "totalPages": "Number",
        "totalRows": "Number",
        "rowsPerPage": "Number"
    }
  }
  ```

#### List Customer
- Request: GET
- Endpoint : `/customer`
- Header :
    - Content-Type: application/json
    
Response:
```json
  {
      "status": {
          "code": "Number",
          "message": "String"
      },
      "data": [ 
      {
          "id": "String",
          "name": "String",
          "address": "String",
          "phone": "Date",
          "email": "String",
          "balance": "Number",
          "updatedAt": "Timestamp",
          "createdAt": "Timestamp",
          "deletedAt": "Timestamp"
       }
      ]
  }
  ```
