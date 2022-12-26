import { test, expect } from "vitest";
import { CalculateWinner } from "../App.vue"

function sum(...nums) {
  return nums.reduce((a, b) => a+b, 0);
}

test('1 + 1', () => {
  expect(sum(1, 1)).toEqual(2)
})
