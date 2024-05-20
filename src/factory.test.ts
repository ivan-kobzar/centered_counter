import { expect, test } from "vitest";
import { factory } from "./factory";

test("creates a count function", function () {
  const count = factory(1, 1);
  expect(count()).toBe(2);
  expect(count()).toBe(3);
});

test("creates a count starting from 10 with a step of 5", function () {
  const count = factory(10, 5);
  expect(count()).toBe(15);
  expect(count()).toBe(20);
});

test("create a count function with a negative step", function () {
  const count = factory(10, -1);
  expect(count()).toBe(9);
  expect(count()).toBe(8);
});

test("defaults to start 0, step 1 when no arguments passed", function () {
  const count = factory();
  expect(count()).toBe(1);
  expect(count()).toBe(2);
});

test("redefine a count function with different arguments", function () {
  let count = factory(1, 1);
  expect(count()).toBe(2);
  expect(count()).toBe(3);
  count = factory(10, 5);
  expect(count()).toBe(15);
  expect(count()).toBe(20);
});