# Target Alert API Spec

## Get Target Alert API

Endpoint : GET /api/target-alerts

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "phone_number": "089999999999",
    "email": "example@gmail.com"
  }
}
```

Response Body Error :

```json
{
  "errors": "Farmer not found"
}
```

## Update Target Alert API

Endpoint : PATCH /api/target-alerts

Headers :

- Authorization : token

Request Body :

```json
{
  "phone_number": "089999999999", // optional
  "email": "example@gmail.com" // optional
}
```

Response Body Success :

```json
{
  "data": {
    "phone_number": "085555555555",
    "email": "example123@gmail.com"
  }
}
```

Response Body Error :

```json
{
  "errors": "Farmer not found"
}
```
