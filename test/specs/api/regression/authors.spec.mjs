import {
  createAuthorData,
  getAuthorByIdData,
  getAuthorsByBookIdData,
  updateAuthorData,
  deleteAuthorData
} from '../../../services/Authors.js';
  
import {
  newAuthor,
  getAuthorId,
  updatedAuthorData
} from '../../../apiData/authorTestData.js';
  
describe('Regression Tests - Authors API', () => {
  it('Should return 200 and the created author', async () => {
    const response = await createAuthorData(newAuthor);
    expect(response.status).toBe(200);
    expect(response.data.hasOwnProperty('id')).toBe(true);
    expect(response.data.firstName).toBe(newAuthor.firstName);
    expect(response.data.lastName).toBe(newAuthor.lastName);
    expect(response.data.idBook).toBe(newAuthor.idBook);
    console.log('Created author:', response.data);
  });

  it('Should return 200 and the author data for a valid ID', async () => {
    const validId = getAuthorId();
    const response = await getAuthorByIdData(validId);
    expect(response.status).toBe(200);
    expect(response.data.hasOwnProperty('id')).toBe(true);
    expect(response.data.id).toBe(validId);
    expect(response.data.hasOwnProperty('firstName')).toBe(true);
    expect(response.data.hasOwnProperty('lastName')).toBe(true);
    expect(response.data.hasOwnProperty('idBook')).toBe(true);
    console.log('GetById author:', response.data);
  });

  it('Should return 200 and list of authors for a valid book ID', async () => {
    const bookId = newAuthor.idBook;
    const response = await getAuthorsByBookIdData(bookId);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    console.log(`Authors for book ${bookId}:`, response.data);
  });

  it('Should return 200 and update the author', async () => {
    const authorIdToUpdate = getAuthorId();
    const updateResponse = await updateAuthorData(authorIdToUpdate, updatedAuthorData);
    expect(updateResponse.status).toBe(200);
    expect(updateResponse.data.id).toBe(authorIdToUpdate);
    expect(updateResponse.data.firstName).toBe(updatedAuthorData.firstName);
    expect(updateResponse.data.lastName).toBe(updatedAuthorData.lastName);
    expect(updateResponse.data.idBook).toBe(updatedAuthorData.idBook);
  });

  it('Should return 200 after deleting an author', async () => {
    const authorIdToDelete = getAuthorId();

    const checkResponse = await getAuthorByIdData(authorIdToDelete);
    expect(checkResponse.status).toBe(200);

    const deleteResponse = await deleteAuthorData(authorIdToDelete);
    expect(deleteResponse.status).toBe(200);

    const getResponse = await getAuthorByIdData(authorIdToDelete);
    expect(getResponse.status).toBe(200);

    console.log('Delete Response:', deleteResponse);
  });
});
  