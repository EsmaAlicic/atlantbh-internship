import { faker } from '@faker-js/faker';

const newAuthor = {
  id: faker.number.int({ min: 1, max: 10 }),
  idBook: faker.number.int({ min: 1, max: 10 }),
  firstName: faker.person.firstName(), 
  lastName: faker.person.lastName() 
};

const getAuthorId = () => 4;

const updatedAuthorData = {
  id: getAuthorId(),
  idBook: faker.number.int({ min: 1, max: 10 }),
  firstName: faker.person.firstName(), 
  lastName: faker.person.lastName()
};

export { newAuthor, getAuthorId, updatedAuthorData };
