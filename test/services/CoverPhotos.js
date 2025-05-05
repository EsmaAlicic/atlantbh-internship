import httpClient from '../api/httpClient.js';
import {
  getCoverPhotos,
  createCoverPhoto,
  getCoverPhotoById,
  getCoverPhotosByBookId,
  updateCoverPhoto,
  deleteCoverPhoto
} from '../api/endpoints.js';

export async function getCoverPhotosData() {
  try {
    const response = await httpClient.get(getCoverPhotos.url);
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}

export async function createCoverPhotoData(coverPhotoData) {
  try {
    const response = await httpClient.post(createCoverPhoto.url, coverPhotoData);
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}

export async function getCoverPhotoByIdData(id) {
  try {
    const endpointConfig = getCoverPhotoById(id);
    const response = await httpClient({
      method: endpointConfig.method,
      url: endpointConfig.url,
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}

export async function getCoverPhotosByBookIdData(idBook) {
  try {
    const endpointConfig = getCoverPhotosByBookId(idBook);
    const response = await httpClient({
      method: endpointConfig.method,
      url: endpointConfig.url,
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}

export async function updateCoverPhotoData(id, coverPhotoData) {
  try {
    const endpointConfig = updateCoverPhoto(id);
    const response = await httpClient({
      method: endpointConfig.method,
      url: endpointConfig.url,
      data: JSON.stringify(coverPhotoData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}

export async function deleteCoverPhotoData(id) {
  try {
    const endpointConfig = deleteCoverPhoto(id);
    const response = await httpClient({
      method: endpointConfig.method,
      url: endpointConfig.url,
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}
