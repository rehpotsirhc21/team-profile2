const Engineer = require("../lib/Engineer");
const engineer = new Engineer(
  "Christopher",
  "8675309",
  "langnerc@icloud.com",
  "rehpotsirhc21"
);

test("check value for github", () => {
  expect(engineer.gitHub).toBe("rehpotsirhc21");
});

test("check to see if the getRole method is working", () => {
  expect(engineer.getRole()).toBe("Engineer");
});

test("check to see if the github method is working", () => {
  expect(engineer.getGithub()).toBe("rehpotsirhc21");
});
