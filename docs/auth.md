# Auth API Spec

## Google Auth API

Endpoint : POST /api/auth/googles

Request Body :

```json
{
  "token": "generated-by-firebase"
}
```

Response Body Success :

```json
{
  "name": "Farmer's Name",
  "email": "example@gmail.com"
}
```

Response Body Error :

```json
{
  "errors": "Invalid token"
}
```
