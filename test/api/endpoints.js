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

export {
  // Activities
  getActivities,
  createActivity,
  getActivityById,
  updateActivity,
  deleteActivity,

  //Authors
  getAuthors,
  createAuthor,
  getAuthorsByBookId,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
};
