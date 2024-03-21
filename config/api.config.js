import { defineConfig } from '@playwright/test';
import { baseConfig } from './base.config';

export default defineConfig({
    ...baseConfig,
    testDir: '../tests/api',
    use: {
        ...baseConfig.use,
        baseURL: 'https://petstore.swagger.io/v2/',
    },
});
