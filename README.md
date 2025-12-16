# Cypress Automation Framework

A reusable, pre-configured Cypress automation framework designed for **rapid**, **scalable**, and **maintainable** end-to-end testing.

---

## 🚀 Installation & Setup Guide

### 1. One-Step Installation

Create a new Cypress project using a single command:

```bash
npx @rajibdhl/cypress-template <folder-name>

What this command does:
•	Downloads the framework from NPM
•	Copies all required framework files:
o	cypress/
o	cypress.config.js
o	supporting configuration files
•	Automatically runs npm install to install dependencies
________________________________________
2. Dependency Management
If you need to reinstall or update dependencies later, run:

```bash
npm install

🔐 Environment Configuration (Required)
This framework uses dotenv for secure environment configuration.
Steps:
1.	Update the values inside .env:

BASE_URL=https://your-application-url.com
USERNAME=your_username
PASSWORD=your_password

These environment variables are automatically loaded into Cypress and can be accessed using Cypress.env().

▶️ Available Test Commands
Use the following NPM scripts to execute tests:
Script	Command	Description
Open Test Runner	npm run cy:open	Launches Cypress Test Runner (GUI)
Run Tests (Headless)	npm run cy:run	Runs all tests headlessly
Run in Chrome	npm run cy:run:chrome	Runs tests headlessly in Chrome
________________________________________
🏗️ Framework Structure & Utilities
This template follows the Page Object Model (POM) to ensure:
•	Clean test structure
•	Reusability
•	Easy maintenance
cypress/
├── e2e/
├── fixtures/
├── support/
│   ├── commands.js
│   └── utils/
│       └── utils.js
________________________________________
🧰 Core Utility Classes
Location:
cypress/support/utils/utils.js
This file provides reusable utility classes to simplify test writing.
________________________________________
1. Utils Class (UI Actions & Assertions)
Provides chainable helper methods for UI interactions and API validations.
Method	Purpose	Example
clickElement(selector)	Clicks an element	new Utils().clickElement('#submit-btn')
typeText(selector, text)	Clears and types into input	new Utils().typeText('#username', 'testuser')
assertApiStatus(alias, status)	Validates API response status	new Utils().assertApiStatus('@login', 200)
waitForLoader(selector)	Waits for loader to disappear	new Utils().waitForLoader()
________________________________________
2. FakerUtils Class (Random Test Data)
Uses @faker-js/faker to generate realistic test data.
Method	Purpose	Example
getFirstName()	Random first name	const name = new FakerUtils().getFirstName()
getEmail()	Random email address	new Utils().typeText('#email', new FakerUtils().getEmail())
________________________________________
📊 Reporting (Mochawesome)
This framework is configured with Mochawesome for detailed HTML reporting.
Report Details:
•	Generated Automatically on npm run cy:run
•	Location:
•	cypress/reports
•	History Preserved:
Reports do not overwrite previous runs, enabling test result tracking over time



