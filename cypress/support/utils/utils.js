import { Faker } from "@faker-js/faker"
const faker = new Faker()

// ====================================================================
// CYPRESS UTILITIES (ACTIONS, ASSERTIONS, WAITS) - CHAINING ENABLED
// ====================================================================
export class Utils {

    // --- Actions ---

    // Click an element
    clickElement(selector) {
        cy.get(selector).click();
        return this; 
    }

    // Type text into an input field (clears first)
    typeText(selector, text) {
        cy.get(selector).clear().type(text);
        return this;
    }

    // Click element with force if needed
    safeClick(selector) {
        cy.get(selector).click({ force: true });
        return this;
    }

    // Type with clearing old text (alias for typeText)
    safeType(selector, text) {
        cy.get(selector).clear().type(text);
        return this;
    }

    // Selects an option from a dropdown by its value
    selectOption(selector, value) {
        cy.get(selector).select(value);
        return this;
    }

    // Check a checkbox or radio button
    checkCheckbox(selector) {
        cy.get(selector).check();
        return this;
    }

    // Uncheck a checkbox or radio button
    uncheckCheckbox(selector) {
        cy.get(selector).uncheck();
        return this;
    }

    // --- Assertions ---

    // Assert the current URL
    assertUrl(text) {
        cy.url().should('equal', text);
        return this;
    }

    // Assert text is visible anywhere
    assertTextVisible(text) {
        cy.contains(text).should('be.visible');
        return this;
    }

    // Assert element is not visible
    assertNotVisible(selector) {
        cy.get(selector).should('not.be.visible');
        return this;
    }

    // Assert exact value inside input field
    assertInputValue(selector, value) {
        cy.get(selector).should('have.value', value);
        return this;
    }

    // Assert error message
    assertErrorMessage(selector, expectedMessage) {
        cy.get(selector)
            .should('be.visible')
            .and('contain.text', expectedMessage);
        return this;
    }

    // Confirm toast/snackbar messages
    assertToastMessage(text) {
        cy.contains(text, { timeout: 8000 }).should('be.visible');
        return this;
    }

    // Assert element is disabled
    assertElementDisabled(selector) {
        cy.get(selector).should('be.disabled');
        return this;
    }

    // Assert element is enabled
    assertElementEnabled(selector) {
        cy.get(selector).should('not.be.disabled');
        return this;
    }

    // Assert element count
    assertElementCount(selector, count) {
        cy.get(selector).should('have.length', count);
        return this;
    }

    // --- API & Wait Helpers ---

    // Wait for loader to disappear
    waitForLoader(selector = '.loading-spinner') {
        cy.get(selector, { timeout: 10000 }).should('not.exist');
        return this;
    }

    // Validate API response (reusable for all APIs)
    assertApiStatus(apiAlias, statusCode = 200) {
        cy.wait(apiAlias).its('response.statusCode').should('eq', statusCode);
        return this;
    }
    
    // Set up API intercept
    interceptApi(method, url, alias) {
        cy.intercept(method, url).as(alias);
        return this;
    }

    // --- Data Helpers ---

    // Generate random string (This one doesn't return 'this' as it returns a string)
    randomString(length = 6) {
        return Math.random().toString(36).substring(2, 2 + length);
    }
}


// ====================================================================
// FAKER DATA GENERATION UTILITIES
// ====================================================================
export class FakerUtils {

    // --- Name / Personal ---

    getFirstName() {
        return faker.person.firstName();
    }

    getLastName() {
        return faker.person.lastName();
    }

    getFullName() {
        return faker.person.fullName();
    }

    getJobTitle() {
        return faker.person.jobTitle();
    }

    // --- Contact / Internet ---

    getEmail() {
        return faker.internet.email();
    }

    getUsername() {
        return faker.internet.userName();
    }

    getPassword() {
        return faker.internet.password();
    }

    getPhoneNumber() {
        // Updated to use current Faker method
        return faker.phone.number('###-###-####');
    }

    getWebsite() {
        return faker.internet.url();
    }

    // --- Address / Location ---

    getCity() {
        return faker.location.city();
    }

    getCountry() {
        return faker.location.country();
    }

    getFullAddress() {
        return faker.location.streetAddress() + ', ' + faker.location.city() + ', ' + faker.location.country();
    }

    // --- Business / Finance ---

    getCompanyName() {
        return faker.company.name();
    }

    // --- Numbers / Misc ---

    getRandomNumber(min = 0, max = 1000) {
        return faker.number.int({ min, max });
    }
}