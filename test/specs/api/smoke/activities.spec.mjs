import { 
  getActivitiesData, 
  createActivityData, 
  getActivityByIdData, 
  updateActivityData, 
  deleteActivityData
} from '../../../services/Activities.js';

import { 
  newActivity, 
  getId, 
  updatedActivityData 
} from '../../../api/activityTestData.js';

describe('Activities API', () => {
  it('Should return 200 and a list of activities', async () => {
    const response = await getActivitiesData();

    expect(response.status).toBe(200);

    expect(Array.isArray(response.data)).toBe(true);
  });

  it('Should return 200 and the created activity', async () => {
    const response = await createActivityData(newActivity);
    expect(response.status).toBe(200);
    expect(response.data.hasOwnProperty('id')).toBe(true);
    expect(response.data.title).toBe(newActivity.title);
    expect(response.data.dueDate).toBe(newActivity.dueDate);
    expect(response.data.completed).toBe(newActivity.completed);
    console.log('Created activity:', response.data);
  });

  it('Should return 200 and the activity data for a valid ID', async () => {
    const validId = getId();
    const response = await getActivityByIdData(validId);
    expect(response.status).toBe(200);
    expect(response.data.hasOwnProperty('id')).toBe(true);
    expect(response.data.id).toBe(validId);
    expect(response.data.hasOwnProperty('title')).toBe(true);
    expect(response.data.hasOwnProperty('dueDate')).toBe(true);
    expect(response.data.hasOwnProperty('completed')).toBe(true);
    console.log('GetById activity:', response.data);
  });

  it('Should return 200 and update the activity', async () => {
    const activityIdToUpdate = getId(); 
    const updateResponse = await updateActivityData(activityIdToUpdate, updatedActivityData);
    expect(updateResponse.status).toBe(200);
    expect(updateResponse.data.id).toBe(activityIdToUpdate);
    expect(updateResponse.data.title).toBe(updatedActivityData.title);
    expect(updateResponse.data.dueDate.startsWith(updatedActivityData.dueDate.slice(0, 19))).toBe(true);
    expect(updateResponse.data.dueDate.endsWith('Z')).toBe(true);
    expect(updateResponse.data.completed).toBe(updatedActivityData.completed);
  });

  it('Should return 200 after deleting an activity', async () => {
    const activityIdToDelete = getId(); 

    const checkResponse = await getActivityByIdData(activityIdToDelete);
    expect(checkResponse.status).toBe(200);

    const deleteResponse = await deleteActivityData(activityIdToDelete);
    expect(deleteResponse.status).toBe(200); 

    const getResponse = await getActivityByIdData(activityIdToDelete);
    expect(getResponse.status).toBe(200); 

    console.log('Delete Response:', deleteResponse);

  });
});
