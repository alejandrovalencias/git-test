const { generateManyBooks } = require('../fakes/book.fake');
const BooksService = require('./books.service');

// const fakeBooks = [{ _id: 1, name: 'Harry Potter mock' }];
const mockGetAll = jest.fn();
// const MongoLibStub = {
//   getAll: spyGetAll,
//   create: () => { },
// };

// jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => { },
})));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
  });

  describe('test for getBooks', () => {
    test('Should return a list book', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(20);
      // console.log(fakeBooks);
      mockGetAll.mockResolvedValue(fakeBooks);

      // Act
      const books = await service.getBooks({});
      // console.log(books);
      // Assert
      expect(books.length).toEqual(1);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('Should return specific book', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(4);
      mockGetAll.mockResolvedValue(fakeBooks);

      // Act
      const books = await service.getBooks({});
      // console.log(books);
      // Assert
      expect(books[0].name).toEqual('Harry Potter mock 2');
    });
  });
});
