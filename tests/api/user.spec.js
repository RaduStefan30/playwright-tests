import { test, expect } from '@playwright/test';

test.describe('User API Tests', () => {
  const uniqueIdentifier = Date.now();
  const userData = {
    id: uniqueIdentifier,
    username: `testuser${uniqueIdentifier}`,
    firstName: 'Test',
    lastName: 'User',
    email: `testuser${uniqueIdentifier}@example.com`,
    password: 'password123',
    phone: '123-456-7890',
    userStatus: 1
  };

  test('Create a user', async ({ request }) => {

    // allowing more users with the same username -> GET only returns the first one created
    const response = await request.post('user', { data: userData });
    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(responseBody).toHaveProperty('code', 200);
    expect(responseBody).toHaveProperty('type', 'unknown');
    expect(responseBody).toHaveProperty('message', userData.id.toString());
  });

  test('Log in the user', async ({ request }) => {
    //this doesn't feel secure + POST more secure?
    const response = await request.get(`user/login`, {
      params: {
        username: userData.username,
        password: userData.password,
      }
    });
    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(responseBody).toHaveProperty('code', 200);
    expect(responseBody).toHaveProperty('type', 'unknown');
    expect(responseBody.message).toMatch(/logged in user session:\d+/);
  });

  test('Delete the user', async ({ request }) => {
    const response = await request.delete(`user/${userData.username}`);
    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(responseBody).toHaveProperty('code', 200);
    expect(responseBody).toHaveProperty('type', 'unknown');
    expect(responseBody).toHaveProperty('message', userData.username);

    // Verify the user has actually been deleted
    const fetchResponse = await request.get(`/user/${userData.username}`);
    expect(fetchResponse.status()).toBe(404);
  });
});
