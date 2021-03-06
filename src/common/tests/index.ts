import { MockRepository } from './types';

export const createMockRepository = <T = any>(): MockRepository<T> => {
  return {
    findOne: jest.fn(),
    find: jest.fn(),
    create: jest.fn(),
  };
};
