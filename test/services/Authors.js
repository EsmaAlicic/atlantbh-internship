import httpClient from '../api/httpClient.js';
import {
  getAuthors,
  createAuthor,
  getAuthorById,
  getAuthorsByBookId,
  updateAuthor,
  deleteAuthor
} from '../api/endpoints.js';

export async function getAuthorsData() {
  try {
    const response = await httpClient.get(getAuthors.url);
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}

export async function createAuthorData(authorData) {
  try {
    const response = await httpClient.post(createAuthor.url, authorData);
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}

export async function getAuthorByIdData(id) {
  try {
    const endpointConfig = getAuthorById(id);
    const response = await httpClient({
      method: endpointConfig.method,
      url: endpointConfig.url,
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}

export async function getAuthorsByBookIdData(id) {
  try {
    const endpointConfig = getAuthorsByBookId(id);
    const response = await httpClient({
      method: endpointConfig.method,
      url: endpointConfig.url,
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}

export async function updateAuthorData(id, authorData) {
  try {
    const endpointConfig = updateAuthor(id);
    const response = await httpClient({
      method: endpointConfig.method,
      url: endpointConfig.url,
      data: JSON.stringify(authorData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}

export async function deleteAuthorData(id) {
  try {
    const endpointConfig = deleteAuthor(id);
    const response = await httpClient({
      method: endpointConfig.method,
      url: endpointConfig.url,
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}
