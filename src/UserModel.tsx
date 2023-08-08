import { faker } from '@faker-js/faker';

export type User = {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  city: string,
  registeredDate: string,
  fullName: string,
  dsr: string
}

export function createRandomUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const registeredDate = faker.date.past();
  const daysSinceRegistered = Math.round(Math.abs((+registeredDate) - (+new Date()))/8.64e7);

  return {
    id: faker.finance.accountNumber(),
    firstName,
    lastName,
    email: faker.internet.email(),
    city: faker.location.city(),
    registeredDate: registeredDate.toLocaleDateString(),
    fullName: `${firstName} ${lastName}`,
    dsr: daysSinceRegistered.toString()
  };
}

export const USERS: User[] = faker.helpers.multiple(createRandomUser, {
  count: 500,
});