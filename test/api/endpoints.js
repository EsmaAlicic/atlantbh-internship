const baseUrl = 'https://fakerestapi.azurewebsites.net/api/v1';

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

export {
  getActivities,
  createActivity,
  getActivityById,
  updateActivity,
  deleteActivity
};