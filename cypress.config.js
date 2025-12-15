const cypress = require("cypress");
const dotenv = require("dotenv");

const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {

    username:process.env.USERNAME,
    password:process.env.PASSWORD,
    baseUrl:process.env.BASE_URL,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  mochaawesome:{
    reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    timestamp: 'mmddyyyy_HHMMss'
  }
  },
});
