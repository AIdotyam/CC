# Summary API Spec

## Get Chicken Summary by Year Total API

Endpoint : GET /api/summaries?year={year}

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": [
    { "month": "january", "dead_count": 10 },
    { "month": "february", "dead_count": 12 },
    { "month": "march", "dead_count": 15 },
    { "month": "april", "dead_count": 11 },
    { "month": "may", "dead_count": 14 },
    { "month": "june", "dead_count": 13 },
    { "month": "july", "dead_count": 17 },
    { "month": "august", "dead_count": 16 },
    { "month": "september", "dead_count": 18 },
    { "month": "october", "dead_count": 20 },
    { "month": "november", "dead_count": 19 },
    { "month": "december", "dead_count": 22 }
  ]
}
```

Response Body Error :

```json
{
  "errors": "Farmer not found"
}
```

## Get Chicken Summary by Week Total API

Endpoint : GET /api/summaries?year={year}&month={1-12}&week={1-4}

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": [
    {
      "day": "monday",
      "dead_count": 7,
      "crowd_density": "low",
      "chicken_count": 101,
      "is_alert": true
    },
    {
      "day": "tuesday",
      "dead_count": 6,
      "crowd_density": "high",
      "chicken_count": 105,
      "is_alert": true
    },
    {
      "day": "wednesday",
      "dead_count": 8,
      "crowd_density": "medium",
      "chicken_count": 98,
      "is_alert": true
    },
    {
      "day": "thursday",
      "dead_count": 5,
      "crowd_density": "low",
      "chicken_count": 102,
      "is_alert": true
    },
    {
      "day": "friday",
      "dead_count": 6,
      "crowd_density": "high",
      "chicken_count": 100,
      "is_alert": true
    },
    {
      "day": "saturday",
      "dead_count": 7,
      "crowd_density": "medium",
      "chicken_count": 97,
      "is_alert": true
    },
    {
      "day": "sunday",
      "dead_count": 9,
      "crowd_density": "medium",
      "chicken_count": 99,
      "is_alert": true
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
