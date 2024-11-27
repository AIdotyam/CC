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
        "month": "january",
        "date": 15,
        "year": 2022,
        "media_url": "https://media-url-1.ai.yam"
      },
      {
        "id": 2,
        "month": "february",
        "date": 28,
        "year": 2023,
        "media_url": "https://media-url-2.ai.yam"
      },
      {
        "id": 3,
        "month": "march",
        "date": 12,
        "year": 2024,
        "media_url": "https://media-url-3.ai.yam"
      },
      {
        "id": 6,
        "month": "june",
        "date": 21,
        "year": 2023,
        "media_url": "https://media-url-6.ai.yam"
      },
      {
        "id": 7,
        "month": "july",
        "date": 7,
        "year": 2024,
        "media_url": "https://media-url-7.ai.yam"
      },
      {
        "id": 9,
        "month": "september",
        "date": 5,
        "year": 2022,
        "media_url": "https://media-url-9.ai.yam"
      },
      {
        "id": 11,
        "month": "november",
        "date": 25,
        "year": 2023,
        "media_url": "https://media-url-11.ai.yam"
      },
      {
        "id": 12,
        "month": "december",
        "date": 30,
        "year": 2024,
        "media_url": "https://media-url-12.ai.yam"
      },
      {
        "id": 13,
        "month": "january",
        "date": 1,
        "year": 2025,
        "media_url": "https://media-url-13.ai.yam"
      },
      {
        "id": 14,
        "month": "february",
        "date": 14,
        "year": 2022,
        "media_url": "https://media-url-14.ai.yam"
      },
      {
        "id": 16,
        "month": "april",
        "date": 16,
        "year": 2024,
        "media_url": "https://media-url-16.ai.yam"
      },
      {
        "id": 18,
        "month": "june",
        "date": 4,
        "year": 2022,
        "media_url": "https://media-url-18.ai.yam"
      },
      {
        "id": 19,
        "month": "july",
        "date": 19,
        "year": 2023,
        "media_url": "https://media-url-19.ai.yam"
      },
      {
        "id": 20,
        "month": "august",
        "date": 6,
        "year": 2024,
        "media_url": "https://media-url-20.ai.yam"
      },
      {
        "id": 22,
        "month": "october",
        "date": 2,
        "year": 2022,
        "media_url": "https://media-url-22.ai.yam"
      },
      {
        "id": 24,
        "month": "december",
        "date": 22,
        "year": 2023,
        "media_url": "https://media-url-24.ai.yam"
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
