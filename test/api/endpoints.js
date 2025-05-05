const baseUrl = 'https://fakerestapi.azurewebsites.net/api/v1';

// ===== Activities Endpoints =====
const getActivities = {
  method: 'GET',
  url: `${baseUrl}/Activities`,
};

const createActivity = {
  method: 'POST',
  url: `${baseUrl}/Activities`,
};

const getActivityById = (id) => ({
  method: 'GET',
  url: `${baseUrl}/Activities/${id}`,
});

const updateActivity = (id) => ({
  method: 'PUT',
  url: `${baseUrl}/Activities/${id}`,
});

const deleteActivity = (id) => ({
  method: 'DELETE',
  url: `${baseUrl}/Activities/${id}`,
});

// ===== Authors Endpoints =====
const getAuthors = {
  method: 'GET',
  url: `${baseUrl}/Authors`,
};

const createAuthor = {
  method: 'POST',
  url: `${baseUrl}/Authors`,
};

const getAuthorsByBookId = (idBook) => ({
  method: 'GET',
  url: `${baseUrl}/Authors/authors/books/${idBook}`,
});

const getAuthorById = (id) => ({
  method: 'GET',
  url: `${baseUrl}/Authors/${id}`,
});

const updateAuthor = (id) => ({
  method: 'PUT',
  url: `${baseUrl}/Authors/${id}`,
});

const deleteAuthor = (id) => ({
  method: 'DELETE',
  url: `${baseUrl}/Authors/${id}`,
});

// ===== Books Endpoints =====
const getBooks = {
  method: 'GET',
  url: `${baseUrl}/Books`,
};

const createBook = {
  method: 'POST',
  url: `${baseUrl}/Books`,
};

const getBookById = (id) => ({
  method: 'GET',
  url: `${baseUrl}/Books/${id}`,
});

const updateBook = (id) => ({
  method: 'PUT',
  url: `${baseUrl}/Books/${id}`,
});

const deleteBook = (id) => ({
  method: 'DELETE',
  url: `${baseUrl}/Books/${id}`,
});

// ===== CoverPhotos Endpoints =====
const getCoverPhotos = {
  method: 'GET',
  url: `${baseUrl}/CoverPhotos`,
};

const createCoverPhoto = {
  method: 'POST',
  url: `${baseUrl}/CoverPhotos`,
};

const getCoverPhotoById = (id) => ({
  method: 'GET',
  url: `${baseUrl}/CoverPhotos/${id}`,
});

const getCoverPhotosByBookId = (idBook) => ({
  method: 'GET',
  url: `${baseUrl}/CoverPhotos/books/covers/${idBook}`,
});

const updateCoverPhoto = (id) => ({
  method: 'PUT',
  url: `${baseUrl}/CoverPhotos/${id}`,
});

const deleteCoverPhoto = (id) => ({
  method: 'DELETE',
  url: `${baseUrl}/CoverPhotos/${id}`,
});

// ===== Users Endpoints =====
const getUsers = {
  method: 'GET',
  url: `${baseUrl}/Users`,
};

const createUser = {
  method: 'POST',
  url: `${baseUrl}/Users`,
};

const getUserById = (id) => ({
  method: 'GET',
  url: `${baseUrl}/Users/${id}`,
});

const updateUser = (id) => ({
  method: 'PUT',
  url: `${baseUrl}/Users/${id}`,
});

const deleteUser = (id) => ({
  method: 'DELETE',
  url: `${baseUrl}/Users/${id}`,
});

export {
  // Activities
  getActivities,
  createActivity,
  getActivityById,
  updateActivity,
  deleteActivity,

  // Authors
  getAuthors,
  createAuthor,
  getAuthorsByBookId,
  getAuthorById,
  updateAuthor,
  deleteAuthor,

  // Books
  getBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,

  // Cover Photos
  getCoverPhotos,
  createCoverPhoto,
  getCoverPhotoById,
  getCoverPhotosByBookId,
  updateCoverPhoto,
  deleteCoverPhoto,

  // Users
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
