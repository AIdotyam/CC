# Process API Spec

## Create process API

Endpoint : POST /api/processes

Headers :

- Authorization : token
- Content-Type : multipart/form-data

Request Body :

media: chickens.png (example)

Response Body Success :

```json
{
  "data": {
    "media_url": "/media-20241120143501",
    "dead_count": 5,
    "created_at": "2024-11-20T14:35:01Z",
    "is_alert": true
  }
}
```

Response Body Error :

```json
{
  "errors": "Invalid file type"
}
```
