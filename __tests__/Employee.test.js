const Employee = require("../lib/Employee");
const employee = new Employee("Christopher", "8675309", "langnerc@icloud.com");

test("check value for name, id and email can be retrieved", () => {
  expect(employee.name).toBe("Christopher");
  expect(employee.id).toBe("8675309");
  expect(employee.email).toBe("langnerc@icloud.com");
});

test("check to see if the getName method is working", () => {
  expect(employee.getName()).toBe("Christopher");
});

test("check to see if the getID method is working", () => {
  expect(employee.getId()).toBe("8675309");
});

test("check to see if the getEmail method is working", () => {
  expect(employee.getEmail()).toBe("langnerc@icloud.com");
});

test("check to see if the getRole method is working", () => {
  expect(employee.getRole()).toBe("Employee");
});
