import { test, expect } from '@playwright/test';

/*
Feature: Registration
2.     As a user
3.     I want to register
4.     So that I can login
5. 
6.     Scenario: Successful Registration
7.        Given I am on the registration page
8.        When I fill the registration form correctly
9.        And I submit the registration form
10.        Then I see a confirmation that the registration was successful
*/

test.beforeEach(async ({ page }) => {
  await page.goto('https://codenboxautomationlab.com/registration-form/');
  await expect(page).toHaveTitle(/CodenBox AutomationLab/);
  //load test data
});

    test('Register a new user', async ({ page }) => {   
    const userFirstName = 'John';
    const userLastName = 'Matsson';
    const userEmail = 'john.matsson6454523@gmail.com'
    const userPhone = '1234567890';
    //assert Training Registration Form text
    await expect(page.getByText('Training Registration Form')).toBeVisible();
    //fill out all required fields
    await page.getByRole('textbox', { name: 'First Name *' }).fill(userFirstName);
    await page.getByRole('textbox', { name: 'Last Name *' }).fill(userLastName);
    await page.getByRole('textbox', { name: 'Email' }).fill(userEmail);
    await page.getByRole('textbox', { name: 'Phone' }).fill(userPhone);
    // make course selection
    await page.getByLabel('Select the Course you would').selectOption('cypress-automation');
    //select month
    await page.getByLabel('Select the Month of the Batch').selectOption('november');
    //how did you hear about us?
    await page.getByText('Friends/Family').click();
    //register button
    await page.getByRole('button', { name: 'Register' }).click();    
    // assert and verify sucess message
    await 
    expect(page.getByText('Your registration is completed. We will contact with you soon.'))
    .toBeVisible();
    });

    //add more tests here
    //create page object model for pages
    //encapsulate it around test.describe here when adding more tests
    //check if user is registered from API/DB
    //create test data dynamically and clean up after tests run
    //create test constants for test data



