# Capture Result API Spec

## List Capture Results by Farmer Results API

Endpoint : GET /api/capture-results

Headers :

- Authorization : token

Request Body :

Response Body Success :

```json
{
  "data": [
    {
      "id": "3",
      "media_url": "https://storage.googleapis.com/aidotyam/media-20241205120000",
      "created_at": "2024-12-05T12:00:00Z",
      "dead_chicken": false
    },
    {
      "id": "2",
      "media_url": "https://storage.googleapis.com/aidotyam/media-20241201080000",
      "created_at": "2024-12-01T08:00:00Z",
      "dead_chicken": true
    },
    {
      "id": "1",
      "media_url": "https://storage.googleapis.com/aidotyam/media-20241120143501",
      "created_at": "2024-11-20T14:35:01Z",
      "dead_chicken": true
    }
  ]
}
```

Response Body Error :

```json
{
  "errors": "Farmer not found"
}
```
