import { describe, it } from "mocha";

import { Ensure, equals } from "@serenity-js/assertions";
import { actorCalled, Wait } from "@serenity-js/core";
import { By, Navigate, PageElement, Text } from "@serenity-js/web";

import { GitHubStatus } from "../serenity/github-api/GitHubStatus.js";
import { TodoList } from "../serenity/todo-list-app/TodoList.js";

import LoginPage from "../../pageobjects/Login.js";
import DashBoard from "../../pageobjects/DashBoard.js";

const Data = await import("../../Data/Validation.json", {
  assert: { type: "json" },
}).then((module) => module.default);

//import Data from "../../Data/Validation.json";

/**
 * Serenity/JS Screenplay Pattern test scenarios use one or more actors to represent people and external systems
 * interacting with the system under test.
 *
 * To design a test scenario, give each actor a series of tasks and interactions to perform
 * and instruct them to answer questions about the state of the system under test
 * to ensure that the answers meet the expected results.
 *
 * This example test file demonstrates several ways of writing test scenarios using the Screenplay Pattern.
 *
 * Learn more:
 * - Serenity/JS Screenplay Pattern - https://serenity-js.org/handbook/design/screenplay-pattern/
 * - Web Testing with Serenity/JS - https://serenity-js.org/handbook/web-testing/
 * - API Testing with Serenity/JS - https://serenity-js.org/handbook/api-testing/
 * - Serenity/JS web module - https://serenity-js.org/api/web/
 * - Serenity/JS REST module - https://serenity-js.org/api/rest/
 * - Serenity/JS assertions module - https://serenity-js.org/api/assertions/
 */
describe("Scenario : single object selection ", () => {
  it("Verify Login Functionality", async () => {
    // await browser.url("https://www.saucedemo.com");
    await LoginPage.openURL("https://www.saucedemo.com");
    await browser.maximizeWindow();
    await LoginPage.login("standard_user", "secret_sauce");
    await browser.pause(10000);
  });

  it(`E2E Case flow for checkout single item`, async () => {
    await DashBoard.AddToCartBtn("Sauce Labs Bike Light");
    await browser.pause(10000);
    await DashBoard.CartDetails.click();
    browser.pause(20000);
    await DashBoard.checkOutBtn.click();
    browser.pause(50000);
    await DashBoard.filCheckOutDetails("AA", "NNN", "101010");
    await DashBoard.finishBtn.click();
  });
  it(`Validation`, async () => {
    await DashBoard.validateCinfirmationMessage(Data.Message1);
    await DashBoard.validateCinfirmationMessage(Data.Message2);
  });
});
