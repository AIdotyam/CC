# Alert API Spec

## List Alerts API

Endpoint : GET /api/alerts

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": [
    {
      "id": "1",
      "media_url": "https://storage.googleapis.com/aidotyam/media-1732956938086.jpeg",
      "created_at": "2024-11-30T08:55:23.430Z",
      "is_read": false
    },
    {
      "id": "2",
      "media_url": "https://storage.googleapis.com/aidotyam/media-1732956938087.jpeg",
      "created_at": "2024-11-30T08:56:23.430Z",
      "is_read": false
    },
    {
      "id": "3",
      "media_url": "https://storage.googleapis.com/aidotyam/media-1732956938088.jpeg",
      "created_at": "2024-11-30T08:57:23.430Z",
      "is_read": false
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

## Update Alert Read Status API

Endpoint : PATCH /api/alerts/{id}

Headers :

- Authorization : token

Request Body :

```json
{
  "is_read": true
}
```

Response Body Success :

```json
{
  "data": {
    "id": "1",
    "media_url": "https://storage.googleapis.com/bucket-aidotyam/media-1732956922172.jpg",
    "created_at": "2024-11-30T08:55:23.410Z",
    "is_read": true
  }
}
```

Response Body Error :

```json
{
  "errors": "Farmer not found"
}
```
