import {
  getUsersData,
  getUserByIdData,
  updateUserData,
  deleteUserData
} from '../../../services/Users.js';

import {
  getUserId,
  updatedUserData
} from '../../../apiData/userTestData.js';
  
describe('Regression Tests - Users API', () => {
  it('Should return 200 and a list of users', async () => {
    const response = await getUsersData();
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    console.log('Get users:', response.data);
  });

  it('Should return 200 and the user data for a valid ID', async () => {
    const validId = getUserId();
    const response = await getUserByIdData(validId);
    expect(response.status).toBe(200);
    expect(response.data.hasOwnProperty('id')).toBe(true);
    expect(response.data.id).toBe(validId);
    expect(response.data.hasOwnProperty('userName')).toBe(true);
    expect(response.data.hasOwnProperty('password')).toBe(true);
    console.log('GetById user:', response.data);
  });

  it('Should return 200 and update the user', async () => {
    const userIdToUpdate = getUserId();
    const updateResponse = await updateUserData(userIdToUpdate, updatedUserData);
    expect(updateResponse.status).toBe(200);
    expect(updateResponse.data.id).toBe(userIdToUpdate);
    expect(updateResponse.data.userName).toBe(updatedUserData.userName);
    expect(updateResponse.data.password).toBe(updatedUserData.password);
  });

  it('Should return 200 after deleting a user', async () => {
    const userIdToDelete = getUserId();

    const checkResponse = await getUserByIdData(userIdToDelete);
    expect(checkResponse.status).toBe(200);

    const deleteResponse = await deleteUserData(userIdToDelete);
    expect(deleteResponse.status).toBe(200);

    const getResponse = await getUserByIdData(userIdToDelete);
    expect(getResponse.status).toBe(200);

    console.log('Delete Response:', deleteResponse);
  });
});
