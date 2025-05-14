import { faker } from '@faker-js/faker';

const newActivity = {
  id: faker.number.int({ min: 1, max: 20 }),    
  title: faker.lorem.words(2),
  dueDate: faker.date.future().toISOString(),
  completed: faker.datatype.boolean()              
};

const getId = () => 7; 

const updatedActivityData = {
  id: getId(),
  title: faker.lorem.words(3),
  dueDate: faker.date.future().toISOString(),
  completed: true
};

export { newActivity, getId, updatedActivityData };
