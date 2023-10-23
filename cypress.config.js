const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3mjcao',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
