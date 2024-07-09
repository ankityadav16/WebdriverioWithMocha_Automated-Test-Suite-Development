import { describe, it } from "mocha";
import { Ensure, equals } from "@serenity-js/assertions";
import { actorCalled, Wait } from "@serenity-js/core";
import { By, Navigate, PageElement, Text } from "@serenity-js/web";

import LoginPage from "../../pageobjects/Login.js";
import DashBoard from "../../pageobjects/DashBoard.js";

const Data = await import("../../Data/Validation.json", {
  assert: { type: "json" },
}).then((module) => module.default);

describe("Filter A-Z sorting Scenario", () => {
  it("Verify Login Functionality", async () => {
    await LoginPage.openURL("https://www.saucedemo.com");
    await browser.maximizeWindow();
    await LoginPage.login("standard_user", "secret_sauce");
    await browser.pause(10000);
  });

  it("Select A-Z filter Option", async () => {
    await DashBoard.selectFilterDropDown("value", "az");
    const arrUI = await DashBoard.getNamesOfAllProducts();
    const arrNonUI = [...arrUI].sort();
    await DashBoard.VerifyEqualArray(arrNonUI, arrUI);
  });

  it("Select Z-A Filter", async () => {
    await DashBoard.selectFilterDropDown("value", "za");
    const arrUI = await DashBoard.getNamesOfAllProducts();
    const arrNonUI = [...arrUI].sort().reverse();
    await DashBoard.VerifyEqualArray(arrNonUI, arrUI);
  });
});
