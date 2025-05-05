import {
    getCoverPhotosData,
    createCoverPhotoData,
    getCoverPhotoByIdData,
    getCoverPhotosByBookIdData,
    updateCoverPhotoData,
    deleteCoverPhotoData
  } from '../../../services/CoverPhotos.js';
  
  import {
    newCoverPhoto,
    getCoverPhotoId,
    updatedCoverPhotoData
  } from '../../../api/coverphotoTestData.js';
  
  describe('CoverPhotos API', () => {
  
    describe('GET /api/v1/CoverPhotos', () => {
      it('Should return 200 and a list of cover photos', async () => {
        const response = await getCoverPhotosData();
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
      });
    });
  
    describe('POST /api/v1/CoverPhotos', () => {
      it('Should return 200 and the created cover photo', async () => {
        const response = await createCoverPhotoData(newCoverPhoto);
        expect(response.status).toBe(200);
        expect(response.data.hasOwnProperty('id')).toBe(true);
        expect(response.data.idBook).toBe(newCoverPhoto.idBook);
        expect(response.data.url).toBe(newCoverPhoto.url);
        console.log('Created cover photo:', response.data);
      });
    });
  
    describe('GET /api/v1/CoverPhotos/{id}', () => {
      it('Should return 200 and the cover photo data for a valid ID', async () => {
        const validId = getCoverPhotoId();
        const response = await getCoverPhotoByIdData(validId);
        expect(response.status).toBe(200);
        expect(response.data.hasOwnProperty('id')).toBe(true);
        expect(response.data.id).toBe(validId);
        expect(response.data.hasOwnProperty('url')).toBe(true);
        expect(response.data.hasOwnProperty('idBook')).toBe(true);
        console.log('GetById cover photo:', response.data);
      });
    });
  
    describe('GET /api/v1/CoverPhotos/books/covers/{idBook}', () => {
      it('Should return 200 and list of cover photos for a valid book ID', async () => {
        const bookId = newCoverPhoto.idBook;
        const response = await getCoverPhotosByBookIdData(bookId);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        console.log(`Cover photos for book ${bookId}:`, response.data);
      });
    });
  
    describe('PUT /api/v1/CoverPhotos/{id}', () => {
      it('Should return 200 and update the cover photo', async () => {
        const coverPhotoIdToUpdate = getCoverPhotoId();
        const updateResponse = await updateCoverPhotoData(coverPhotoIdToUpdate, updatedCoverPhotoData);
        expect(updateResponse.status).toBe(200);
        expect(updateResponse.data.id).toBe(coverPhotoIdToUpdate);
        expect(updateResponse.data.url).toBe(updatedCoverPhotoData.url);
        expect(updateResponse.data.idBook).toBe(updatedCoverPhotoData.idBook);
      });
    });
  
    describe('DELETE /api/v1/CoverPhotos/{id}', () => {
      it('Should return 200 after deleting a cover photo', async () => {
        const coverPhotoIdToDelete = getCoverPhotoId();
  
        const checkResponse = await getCoverPhotoByIdData(coverPhotoIdToDelete);
        expect(checkResponse.status).toBe(200);
  
        const deleteResponse = await deleteCoverPhotoData(coverPhotoIdToDelete);
        expect(deleteResponse.status).toBe(200);
  
        const getResponse = await getCoverPhotoByIdData(coverPhotoIdToDelete);
        expect(getResponse.status).toBe(200);
        console.log('Delete Response:', deleteResponse);
      });
    });
  
  });
  