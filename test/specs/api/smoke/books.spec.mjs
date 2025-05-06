import {
  createBookData
} from '../../../services/Books.js';
  
import {
  newBook
} from '../../../api/bookTestData.js';
  
describe('Smoke Tests - Books API', () => {
  it('Should return 200 and the created book', async () => {
    const response = await createBookData(newBook);
    expect(response.status).toBe(200);
    expect(response.data.hasOwnProperty('id')).toBe(true);
    expect(response.data.title).toBe(newBook.title);
    expect(response.data.description).toBe(newBook.description);
    console.log('Created book:', response.data);
  });
});
