import { faker } from '@faker-js/faker';

const newCoverPhoto = {
  id: faker.number.int({ min: 1, max: 100 }),
  idBook: faker.number.int({ min: 1, max: 10 }),
  url: faker.image.url() 
};

const getCoverPhotoId = () => 3;

const updatedCoverPhotoData = {
  id: getCoverPhotoId(),
  idBook: faker.number.int({ min: 1, max: 10 }),
  url: faker.image.url() 
};

export { newCoverPhoto, getCoverPhotoId, updatedCoverPhotoData };
