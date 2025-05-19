const username = process.env.TEST_USERNAME;
const password = process.env.TEST_PASSWORD;

const newUser = {
  id: parseInt(process.env.TEST_USER_ID),
  userName: username,
  password: password
};

const getUserId = () => 1;

const updatedUserData = {
  id: getUserId(),
  userName: `updated_${username}`,
  password: `new_${password}`
};

export { newUser, getUserId, updatedUserData };
