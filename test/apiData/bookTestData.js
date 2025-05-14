import { faker } from '@faker-js/faker';

const newBook = {
  title: faker.lorem.words(3),
  description: faker.lorem.sentence(),
  pageCount: faker.number.int({ min: 100, max: 1000 }),
  excerpt: faker.lorem.sentence(),
  publishDate: faker.date.future().toISOString()
};

const getBookId = () => 6;

const updatedBookData = {
  id: getBookId(),
  title: faker.lorem.words(3),
  description: faker.lorem.sentence(),
  pageCount: faker.number.int({ min: 100, max: 1000 }),
  excerpt: faker.lorem.sentence(),
  publishDate: faker.date.future().toISOString()
};

export { newBook, getBookId, updatedBookData };
