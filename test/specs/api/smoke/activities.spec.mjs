import { 
  getActivitiesData
} from '../../../services/Activities.js';

describe('Smoke Tests - Activities API', () => {
  it('Should return 200 and a list of activities', async () => {
    const response = await getActivitiesData();

    expect(response.status).toBe(200);

    expect(Array.isArray(response.data)).toBe(true);
  });
});
