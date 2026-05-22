import { faker } from "@faker-js/faker";

const generateData = (count = 10000) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    department: faker.commerce.department(),
    salary: faker.number.int({ min: 30000, max: 200000 }),
    age: faker.number.int({ min: 20, max: 60 }),
    phone: faker.phone.number(),
  }));
};

export default generateData;