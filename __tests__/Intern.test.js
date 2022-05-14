const Intern = require("../lib/Intern");

const intern = new Intern(
  "Christopher",
  "8675309",
  "langnerc@icloud.com",
  "university of minnesota"
);

test("check value for office number", () => {
  expect(intern.school).toBe("university of minnesota");
});

test("check to see if the getRole method is working", () => {
  expect(intern.getRole()).toBe("Intern");
});

test("check to see if the officeNumber method is working", () => {
  expect(intern.getSchool()).toBe("university of minnesota");
});
