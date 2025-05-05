import httpClient from '../api/httpClient.js';
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser
} from '../api/endpoints.js';

export async function getUsersData() {
  try {
    const response = await httpClient.get(getUsers.url);
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}

export async function createUserData(userData) {
  try {
    const response = await httpClient.post(createUser.url, userData);
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}

export async function getUserByIdData(id) {
  try {
    const endpointConfig = getUserById(id);
    const response = await httpClient({
      method: endpointConfig.method,
      url: endpointConfig.url,
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}

export async function updateUserData(id, userData) {
  try {
    const endpointConfig = updateUser(id);
    const response = await httpClient({
      method: endpointConfig.method,
      url: endpointConfig.url,
      data: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}

export async function deleteUserData(id) {
  try {
    const endpointConfig = deleteUser(id);
    const response = await httpClient({
      method: endpointConfig.method,
      url: endpointConfig.url,
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}