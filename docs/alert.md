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
      "media_url": "/capture-20241120143501",
      "created_at": "2024-11-20T14:35:01Z",
      "category": "dead",
      "is-read": false
    },
    {
      "id": "2",
      "media_url": "/capture-20241120143502",
      "created-at": "2024-11-20T14:35:02Z",
      "category": "dead",
      "is_read": false
    },
    {
      "id": "3",
      "media_url": "/capture-20241120143503",
      "created_at": "2024-11-20T14:35:03Z",
      "category": "dead",
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
    "media_url": "/media-20241120143501",
    "created_at": "2024-11-20T14:35:01Z",
    "category": "dead",
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
