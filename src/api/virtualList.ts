import { faker } from '@faker-js/faker'

export interface ListData {
  id: string
  username: string
}

export function createListData(): ListData {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
  }
}

export const virtualListData = faker.helpers.multiple(createListData, {
  count: 10000,
})
