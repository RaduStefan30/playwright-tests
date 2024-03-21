// @ts-check
import { test, expect } from '@playwright/test';

test('API test example', async ({ request }) => {
  const response = await request.get(`/`);
  console.log(response);
});