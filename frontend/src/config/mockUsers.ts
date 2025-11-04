export type MockUserRecord = {
  id: string;
  username: string;
  email: string;
  password: string;
};

export const mockUsers: MockUserRecord[] = [
  {
    id: '1',
    username: 'testuser',
    email: 'test@example.com',
    password: 'password',
  },
];
