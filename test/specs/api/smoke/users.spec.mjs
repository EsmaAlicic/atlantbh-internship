import {
  createUserData
} from '../../../services/Users.js';

import {
  newUser
} from '../../../apiData/userTestData.js';
  
describe('Smoke Tests - Users API', () => {
  it('Should return 200 and the created user', async () => {
    const response = await createUserData(newUser);
    expect(response.status).toBe(200);
    expect(response.data.hasOwnProperty('id')).toBe(true);
    expect(response.data.userName).toBe(newUser.userName);
    expect(response.data.password).toBe(newUser.password);
    console.log('Created user:', response.data);
  });
});
