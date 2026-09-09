const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'tests/test-scripts',
  timeout: 60000,
  workers: 1, // trang SUT bên ngoài, chạy tuần tự cho lịch sự
  use: { headless: true },
  reporter: 'list',
});
