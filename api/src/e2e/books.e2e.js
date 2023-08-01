const request = require('supertest');
const { MongoClient } = require('mongodb');

const createApp = require('../app');
const { config } = require('../config');

const DB_NAME = config.dbName;
const MONGO_URL = config.dbUrl;

describe('Test for books', () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3002);
    const client = new MongoClient(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
  });

  describe('Test for [get] /api/v1/books', () => {
    test('Should return a list books', async () => {
      // Arrange
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book 1',
          year: 1990,
          author: 'Sergio',
        },
        {
          name: 'Book 2',
          year: 1940,
          author: 'Alejandro',
        },
      ]);

      // console.log(seedData);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
