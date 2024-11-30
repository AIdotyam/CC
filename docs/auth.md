# Auth API Spec

## Google Auth API

Endpoint : POST /api/auth/googles

Response Body Success :

```json
{
  "token": "generated-by-firebase"
}
```

Response Body Error :

```json
{
  "errors": "Invalid token"
}
```
