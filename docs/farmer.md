# Farmer API Spec

## Create Farmer API

Endpoint : POST /api/farmers

Headers :

- Authorization : token

Request Body :

```json
{
  "uid": "generated-by-firebase",
  "name": "Farmer's Name",
  "email": "example@gmail.com"
}
```

Response Body Success :

```json
{
  "data": {
    "name": "Farmer's Name",
    "email": "example@gmail.com"
  }
}
```

Response Body Error :

```json
{
  "errors": "Farmer already exists"
}
```

## Update Farmer API

Endpoint : PUT /api/farmers

Headers :

- Authorization : token

Request Body :

```json
{
  "name": "New Farmer's Name"
}
```

Response Body Success :

```json
{
  "data": {
    "name": "Farmer's Name",
    "email": "example@gmail.com"
  }
}
```

Response Body Error :

```json
{
  "errors": "Farmer not found"
}
```
