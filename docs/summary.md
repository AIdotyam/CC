# Summary API Spec

## Get Chicken Summary API

Endpoint : GET /api/summaries

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "alerts_summary": [
      {
        "id": 1,
        "month": "november",
        "date": 30,
        "year": 2024,
        "media_url": "https://storage.googleapis.com/bucket-aidotyam/media-1732956938086.jpeg"
      },
      {
        "id": 2,
        "month": "april",
        "date": 15,
        "year": 2023,
        "media_url": "https://storage.googleapis.com/bucket-aidotyam/media-1732956938087.jpeg"
      },
      {
        "id": 3,
        "month": "january",
        "date": 1,
        "year": 2022,
        "media_url": "https://storage.googleapis.com/bucket-aidotyam/media-1732956938088.jpeg"
      },
      {
        "id": 4,
        "month": "march",
        "date": 12,
        "year": 2024,
        "media_url": "https://storage.googleapis.com/bucket-aidotyam/media-1732956938089.jpeg"
      },
      {
        "id": 5,
        "month": "august",
        "date": 6,
        "year": 2023,
        "media_url": "https://storage.googleapis.com/bucket-aidotyam/media-1732956938090.jpeg"
      },
      {
        "id": 6,
        "month": "february",
        "date": 28,
        "year": 2022,
        "media_url": "https://storage.googleapis.com/bucket-aidotyam/media-1732956938091.jpeg"
      },
      {
        "id": 7,
        "month": "june",
        "date": 21,
        "year": 2024,
        "media_url": "https://storage.googleapis.com/bucket-aidotyam/media-1732956938092.jpeg"
      },
      {
        "id": 8,
        "month": "october",
        "date": 2,
        "year": 2023,
        "media_url": "https://storage.googleapis.com/bucket-aidotyam/media-1732956938093.jpeg"
      },
      {
        "id": 9,
        "month": "may",
        "date": 19,
        "year": 2022,
        "media_url": "https://storage.googleapis.com/bucket-aidotyam/media-1732956938094.jpeg"
      },
      {
        "id": 10,
        "month": "july",
        "date": 7,
        "year": 2024,
        "media_url": "https://storage.googleapis.com/bucket-aidotyam/media-1732956938095.jpeg"
      },
      {
        "id": 11,
        "month": "september",
        "date": 5,
        "year": 2023,
        "media_url": "https://storage.googleapis.com/bucket-aidotyam/media-1732956938096.jpeg"
      },
      {
        "id": 12,
        "month": "december",
        "date": 22,
        "year": 2022,
        "media_url": "https://storage.googleapis.com/bucket-aidotyam/media-1732956938097.jpeg"
      },
      {
        "id": 13,
        "month": "april",
        "date": 16,
        "year": 2024,
        "media_url": "https://storage.googleapis.com/bucket-aidotyam/media-1732956938098.jpeg"
      },
      {
        "id": 14,
        "month": "june",
        "date": 4,
        "year": 2023,
        "media_url": "https://storage.googleapis.com/bucket-aidotyam/media-1732956938099.jpeg"
      },
      {
        "id": 15,
        "month": "march",
        "date": 8,
        "year": 2022,
        "media_url": "https://storage.googleapis.com/bucket-aidotyam/media-1732956938100.jpeg"
      },
      {
        "id": 16,
        "month": "january",
        "date": 25,
        "year": 2023,
        "media_url": "https://storage.googleapis.com/bucket-aidotyam/media-1732956938101.jpeg"
      }
    ]
  }
}
```

Response Body Error :

```json
{
  "errors": "Farmer not found"
}
```
