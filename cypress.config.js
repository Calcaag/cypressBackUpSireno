const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 30000,
    viewportHeight: 720,
    viewportWidth: 1400,
    waitForAnimations: true,
    watchForFileChanges: false,
    chromeWebSecurity: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
