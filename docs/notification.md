# Notification API Spec

## Update Notification API

Endpoint : GET /api/notifications

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

## Update Notification API

Endpoint : PATCH /api/notifications

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
