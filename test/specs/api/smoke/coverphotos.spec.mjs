import {
  getCoverPhotosData
} from '../../../services/CoverPhotos.js';

describe('Smoke Tests - CoverPhotos API', () => {
  it('Should return 200 and a list of cover photos', async () => {
      const response = await getCoverPhotosData();
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
  });
});
