import {
  getBooksData,
  getBookByIdData,
  updateBookData,
  deleteBookData
} from '../../../services/Books.js';
  
import {
  updatedBookData,
  getBookId
} from '../../../apiData/bookTestData.js';
  
describe('Regression Tests - Books API', () => {
  it('Should return 200 and a list of books', async () => {
    const response = await getBooksData();
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  it('Should return 200 and the book data for a valid ID', async () => {
    const validId = getBookId();
    const response = await getBookByIdData(validId);
    expect(response.status).toBe(200);
    expect(response.data.hasOwnProperty('id')).toBe(true);
    expect(response.data.id).toBe(validId);
    expect(response.data.hasOwnProperty('title')).toBe(true);
    expect(response.data.hasOwnProperty('description')).toBe(true);
    console.log('GetById book:', response.data);
  });

  it('Should return 200 and update the book', async () => {
    const bookIdToUpdate = getBookId();
    const updateResponse = await updateBookData(bookIdToUpdate, updatedBookData);
    expect(updateResponse.status).toBe(200);
    expect(updateResponse.data.id).toBe(bookIdToUpdate);
    expect(updateResponse.data.title).toBe(updatedBookData.title);
    expect(updateResponse.data.description).toBe(updatedBookData.description);
  });

  it('Should return 200 after deleting a book', async () => {
    const bookIdToDelete = getBookId();

    const checkResponse = await getBookByIdData(bookIdToDelete);
    expect(checkResponse.status).toBe(200);

    const deleteResponse = await deleteBookData(bookIdToDelete);
    expect(deleteResponse.status).toBe(200);

    const getResponse = await getBookByIdData(bookIdToDelete);
    expect(getResponse.status).toBe(200);

    console.log('Delete Response:', deleteResponse);
  });
});
