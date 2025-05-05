import httpClient from '../api/httpClient.js';
import {
  getBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook
} from '../api/endpoints.js';

export async function getBooksData() {
  try {
    const response = await httpClient.get(getBooks.url);
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}

export async function createBookData(bookData) {
  try {
    const response = await httpClient.post(createBook.url, bookData);
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}

export async function getBookByIdData(id) {
  try {
    const endpointConfig = getBookById(id);
    const response = await httpClient({
      method: endpointConfig.method,
      url: endpointConfig.url,
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}

export async function updateBookData(id, bookData) {
  try {
    const endpointConfig = updateBook(id);
    const response = await httpClient({
      method: endpointConfig.method,
      url: endpointConfig.url,
      data: JSON.stringify(bookData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}

export async function deleteBookData(id) {
  try {
    const endpointConfig = deleteBook(id);
    const response = await httpClient({
      method: endpointConfig.method,
      url: endpointConfig.url,
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    return error.response;
  }
}
