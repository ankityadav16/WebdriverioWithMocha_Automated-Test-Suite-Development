# WebdriverioWithMocha_Automated-Test-Suite-Development

# MochaFramework

## Overview
MochaFramework is a test automation framework using Mocha, WebdriverIO, and Serenity/JS for end-to-end testing. This project aims to validate the functionality of web applications through automated test cases.

## Prerequisites
- **Node.js**: Ensure Node.js (version 14 or higher) is installed. You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: Ensure npm (version 6 or higher) is installed. It comes bundled with Node.js.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:ankityadav16/WebdriverioWithMocha_Automated-Test-Suite-Development.git 
   cd WebdriverioWithMocha_Automated-Test-Suite-Development

## Open the project with any IDE 
- Here I am using VScode.
- Do a right click in that folder and select "Open with Code"
- Inside VSCode Click on new Terminal and install dependencies.
## Project Setup

2. **Install Dependencies**:
   ```bash
     npm install

     ### Some times the Allure-reports are not getting installed.

     npm install @wdio/allure-reporter allure-commandline --save-dev

## Configuration
  Ensure the `wdio.conf.js` file is correctly configured. This file contains the WebdriverIO configuration settings.

## Running Tests

1. **Execute the test suite:**:
   ```bash
     npm run wdio
  
# Notes

When setting up the project, you may encounter the following questions and prompts:

1. **Question:** Could not execute "run" due to missing configuration, file "wdio[.js/.ts]" not found! Would you like to create one?
   - **Answer:** Yes

2. **Question:** A project named "MochaFramework" was detected at "D:\png2jpg\WebdriverioWithMocha_Automated-Test-Suite-Development", correct?
   - **Answer:** Yes

3. **Question:** What type of testing would you like to do?
   - **Answer:** E2E Testing - of Web or Mobile Applications

4. **Question:** Where is your automation backend located?
   - **Answer:** On my local machine

5. **Question:** Which environment would you like to automate?
   - **Answer:** Web - web applications in the browser

6. **Question:** With which browser should we start?
   - **Answer:** Chrome

7. **Question:** Which framework do you want to use?
   - **Answer:** Mocha with Serenity/JS (https://serenity-js.org/)

8. **Question:** Do you want to use a compiler?
   - **Answer:** Babel (https://babeljs.io/)

9. **Question:** Do you want WebdriverIO to autogenerate some test files?
   - **Answer:** Yes

10. **Question:** What should be the location of your spec files?
    - **Answer:** [provide your path or press enter]

11. **Question:** What should be the location of your Serenity/JS Screenplay Pattern library?
    - **Answer:** [provide your path or press enter]

12. **Question:** Which reporter do you want to use?
    - **Answer:** Allure

13. **Question:** Would you like to include Visual Testing to your setup?
    - **Answer:** Yes, and select Visual

14. **Question:** Do you want me to run `npm install`?
    - **Answer:** Yes


2. **Generate Allure Reports:**:
   ```bash
     npm run allure:generate
3. **Open Allure Reports:**:
   ```bash
     npm run allure:open 

## If you have completed the steps successfully, you should see the results ***appear in a new Chrome window.***


# Test Cases Covered

## E2E Case Flow for Checkout Single Item

- **Test Case ID:** #1
- **Description:** End-to-end test for checking out a single item.
- **Step Description:** Steps include navigating to the product page, adding the item to the cart, proceeding through the checkout process, and confirming the order details.
- **Execution Time:** 10s 645ms

## Verify Login Functionality

- **Test Case ID:** #2
- **Description:** Ensures that the login functionality works as expected.
- **Step Description:** Ensures that the login functionality works as expected by validating user authentication with correct credentials and verifying access to user-specific content.
- **Execution Time:** 10s 854ms
## E2E Case Flow for Adding Multiple Items and Checkout

- **Test Case ID:** #3
- **Description:** End-to-end test for adding multiple items to the cart and completing the checkout process.
- **Step Description:** End-to-end test for adding multiple items to the cart and completing checkout. Steps involve selecting multiple products, Filter A-Z sorting Scenario and Select A-Z filter Option adjusting quantities, verifying the cart contents, proceeding through the checkout flow, and confirming the order.
- **Execution Time:** 45s 730ms

## Validation

- **Test Case ID:** #4
- **Description:** General validation test case.
- **Step Description:** Steps include navigating to the product page, adding the item to the cart, proceeding through the checkout process, and confirming the order details.
- **Execution Time:** 72ms


# Additional Resources and Dependencies

## Global npm Packages

None required.

## Browser Drivers

Ensure that the necessary browser drivers (e.g., ChromeDriver) are installed and available in the system PATH. WebdriverIO will manage browser drivers automatically through @wdio/cli.

# Package.json Content

```json
{
  "name": "MochaFramework",
  "type": "module",
  "devDependencies": {
    "@babel/core": "^7.24.7",
    "@babel/preset-env": "^7.24.7",
    "@babel/register": "^7.24.6",
    "@serenity-js/assertions": "^3.25.0",
    "@serenity-js/console-reporter": "^3.25.0",
    "@serenity-js/core": "^3.25.0",
    "@serenity-js/mocha": "^3.25.0",
    "@serenity-js/rest": "^3.25.0",
    "@serenity-js/serenity-bdd": "^3.25.0",
    "@serenity-js/web": "^3.25.0",
    "@serenity-js/webdriverio": "^3.25.0",
    "@wdio/cli": "^8.39.1",
    "@wdio/local-runner": "^8.39.1",
    "@wdio/spec-reporter": "^8.39.0",
    "@wdio/visual-service": "^5.1.0",
    "mocha": "^10.6.0",
    "npm-failsafe": "^1.2.1",
    "rimraf": "^5.0.8"
  },
  "scripts": {
    "serenity": "failsafe serenity:update serenity:clean wdio serenity:report",
    "serenity:update": "serenity-bdd update",
    "serenity:clean": "rimraf target",
    "wdio": "wdio run ./wdio.conf.js",
    "serenity:report": "serenity-bdd run",
    "allure:generate": "allure generate allure-results --clean -o allure-report",
    "allure:open": "allure open allure-report"
  }
}


# Notes

- Ensure that all necessary browser drivers are available and correctly configured in your PATH.
