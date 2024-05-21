import { test, expect } from "@playwright/test";

test("page is rendered", async ({ page }) => {
  await page.goto("http://localhost:5174/");
  await expect(page.getByLabel("Start at")).toBeVisible();
  await expect(page.getByLabel("Step")).toBeVisible();
  await expect(page.getByRole("button", { name: "0" })).toBeVisible();
});

test("counter with default controls", async ({ page }) => {
  await page.goto("http://localhost:5174/");
  await page.getByRole("button", { name: "0" }).click();
  await expect(page.locator("span")).toContainText("1");
});

test("counter with start at 5 and step 10", async ({ page }) => {
  await page.goto("http://localhost:5174/");
  await page.getByLabel("Start at").fill("5");
  await page.getByLabel("Step").fill("10");
  await page.getByRole("button", { name: "0" }).click();
  await page.getByRole("button", { name: "15" }).click();
  await expect(page.locator("span")).toContainText("25");
});
