# Process API Spec

## Create process API

Endpoint : POST /api/processes

Headers :

- Authorization : token
- Content-Type : multipart/form-data

Request Body :

file: chickens.png (example)

Response Body Success :

```json
{
  "data": {
    "media_url": "https://storage.googleapis.com/aidotyam/media-20241120143501",
    "dead_chicken": true,
    "created_at": "2024-11-20T14:35:01Z",
    "is_alert": true
  }
}
```

Response Body Error :

```json
{
  "errors": "Farmer not found"
}
```
