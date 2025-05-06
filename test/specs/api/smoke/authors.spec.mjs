import {
  getAuthorsData
} from '../../../services/Authors.js';

  
describe('Smoke Tests - Authors API', () => {
  it('Should return 200 and a list of authors', async () => {
    const response = await getAuthorsData();
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });
});
  