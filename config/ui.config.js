import { defineConfig } from '@playwright/test';
import { baseConfig } from './base.config';

export default defineConfig({
    ...baseConfig,
    testDir: '../tests/ui',
    use: {
        ...baseConfig.use,
        baseURL: 'https://ecommerce-playground.lambdatest.io/',
    },
});
