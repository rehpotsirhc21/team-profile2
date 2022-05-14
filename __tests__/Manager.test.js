const Manager = require("../lib/Manager");

const manager = new Manager(
  "Christopher",
  "8675309",
  "langnerc@icloud.com",
  "6"
);

test("check value for office number", () => {
  expect(manager.officeNumber).toBe("6");
});

test("check to see if the getRole method is working", () => {
  expect(manager.getRole()).toBe("Manager");
});

test("check to see if the officeNumber method is working", () => {
  expect(manager.getOfficeNumber()).toBe("6");
});
