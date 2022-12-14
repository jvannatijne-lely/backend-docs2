export const specMock = `
{
  "asyncapi": "2.0.0",
  "info": {
      "title": "Shlink",
      "version": "2.0.0",
      "description": "Shlink, the self-hosted URL shortener",
      "license": {
          "name": "MIT",
          "url": "https://github.com/shlinkio/shlink/blob/develop/LICENSE"
      }
  },
  "defaultContentType": "application/json",
  "channels": {
      "http://shlink.io/new-visit": {
          "subscribe": {
              "summary": "Receive information about any new visit occurring on any short URL.",
              "operationId": "newVisit",
              "message": {
                  "payload": {
                      "type": "object",
                      "additionalProperties": false,
                      "properties": {
                          "shortUrl": {
                              "$ref": "#/components/schemas/ShortUrl"
                          },
                          "visit": {
                              "$ref": "#/components/schemas/Visit"
                          }
                      }
                  }
              }
          }
      },
      "http://shlink.io/new-visit/{shortCode}": {
          "parameters": {
              "shortCode": {
                  "description": "The short code of the short URL",
                  "schema": {
                      "type": "string"
                  }
              }
          },
          "subscribe": {
              "summary": "Receive information about any new visit occurring on a specific short URL.",
              "operationId": "newShortUrlVisit",
              "message": {
                  "payload": {
                      "type": "object",
                      "additionalProperties": false,
                      "properties": {
                          "shortUrl": {
                              "$ref": "#/components/schemas/ShortUrl"
                          },
                          "visit": {
                              "$ref": "#/components/schemas/Visit"
                          }
                      }
                  }
              }
          }
      }
  },
  "components": {
      "schemas": {
          "ShortUrl": {
              "type": "object",
              "properties": {
                  "shortCode": {
                      "type": "string",
                      "description": "The short code for this short URL."
                  },
                  "shortUrl": {
                      "type": "string",
                      "description": "The short URL."
                  },
                  "longUrl": {
                      "type": "string",
                      "description": "The original long URL."
                  },
                  "dateCreated": {
                      "type": "string",
                      "format": "date-time",
                      "description": "The date in which the short URL was created in ISO format."
                  },
                  "visitsCount": {
                      "type": "integer",
                      "description": "The number of visits that this short URL has recieved."
                  },
                  "tags": {
                      "type": "array",
                      "items": {
                          "type": "string"
                      },
                      "description": "A list of tags applied to this short URL"
                  },
                  "meta": {
                      "$ref": "#/components/schemas/ShortUrlMeta"
                  },
                  "domain": {
                      "type": "string",
                      "description": "The domain in which the short URL was created. Null if it belongs to default domain."
                  }
              },
              "example": {
                  "shortCode": "12C18",
                  "shortUrl": "https://doma.in/12C18",
                  "longUrl": "https://store.steampowered.com",
                  "dateCreated": "2016-08-21T20:34:16+02:00",
                  "visitsCount": 328,
                  "tags": [
                      "games",
                      "tech"
                  ],
                  "meta": {
                      "validSince": "2017-01-21T00:00:00+02:00",
                      "validUntil": null,
                      "maxVisits": 100
                  },
                  "domain": "example.com"
              }
          },
          "ShortUrlMeta": {
              "type": "object",
              "required": [
                  "validSince",
                  "validUntil",
                  "maxVisits"
              ],
              "properties": {
                  "validSince": {
                      "description": "The date (in ISO-8601 format) from which this short code will be valid",
                      "type": "string",
                      "nullable": true
                  },
                  "validUntil": {
                      "description": "The date (in ISO-8601 format) until which this short code will be valid",
                      "type": "string",
                      "nullable": true
                  },
                  "maxVisits": {
                      "description": "The maximum number of allowed visits for this short code",
                      "type": "number",
                      "nullable": true
                  }
              }
          },
          "Visit": {
              "type": "object",
              "properties": {
                  "referer": {
                      "type": "string",
                      "description": "The origin from which the visit was performed"
                  },
                  "date": {
                      "type": "string",
                      "format": "date-time",
                      "description": "The date in which the visit was performed"
                  },
                  "userAgent": {
                      "type": "string",
                      "description": "The user agent from which the visit was performed"
                  },
                  "visitLocation": {
                      "$ref": "#/components/schemas/VisitLocation"
                  }
              },
              "example": {
                  "referer": "https://t.co",
                  "date": "2015-08-20T05:05:03+04:00",
                  "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
                  "visitLocation": {
                      "cityName": "Cupertino",
                      "countryCode": "US",
                      "countryName": "United States",
                      "latitude": 37.3042,
                      "longitude": -122.0946,
                      "regionName": "California",
                      "timezone": "America/Los_Angeles"
                  }
              }
          },
          "VisitLocation": {
              "type": "object",
              "properties": {
                  "cityName": {
                      "type": "string"
                  },
                  "countryCode": {
                      "type": "string"
                  },
                  "countryName": {
                      "type": "string"
                  },
                  "latitude": {
                      "type": "number"
                  },
                  "longitude": {
                      "type": "number"
                  },
                  "regionName": {
                      "type": "string"
                  },
                  "timezone": {
                      "type": "string"
                  }
              }
          }
      }
  }
}
`;
