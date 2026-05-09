import { defineConfig } from "cypress";
import * as dotenv from 'dotenv';

dotenv.config();


export default defineConfig({
  env: {
    email: process.env.GITHUB_EMAIL,
    password: process.env.GITHUB_PASSWORD,
    username: process.env.GITHUB_USERNAME,
    fullName: process.env.GITHUB_FULL_NAME,
  },
  e2e: {
    baseUrl: 'https://github.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,

    allowCypressEnv: false,

    setupNodeEvents(on, config) {
      on('task', {
        getSecrets() {
          return {
            email: process.env.GITHUB_EMAIL,
            password: process.env.GITHUB_PASSWORD,
            username: process.env.GITHUB_USERNAME,
            fullName: process.env.GITHUB_FULL_NAME,
          };
        },
      });
      return config;
    },
  },
});