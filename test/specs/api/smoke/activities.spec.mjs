import { getActivitiesData, createActivityData } from '../../../services/Activities.js';
import { newActivity } from '../../../api/activityTestData.js';

describe('Activities API', () => {

describe('GET /api/v1/Activities', () => {
  it('Should return 200 and a list of activities', async () => {
    const response = await getActivitiesData();

    expect(response.status).toBe(200);

    expect(Array.isArray(response.data)).toBe(true);
  });
});

describe('POST /api/v1/Activities', () => {
  it('Should return 200 and the created activity', async () => {

    const response = await createActivityData(newActivity);

    expect(response.status).toBe(200);
    expect(response.data.hasOwnProperty('id')).toBe(true);
    expect(response.data.title).toBe(newActivity.title);
    expect(response.data.dueDate).toBe(newActivity.dueDate);
    expect(response.data.completed).toBe(newActivity.completed);

    console.log('Created activity:', response.data);

  });
});

});