const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateSection = require("./src/generateHTML");

const employees = [];

function addEmployee() {
  console.log(
    `
       ********************************************************************
        Welcome! Please answer the following prompts to add a new employee.
       ********************************************************************
       `
  );

  return inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the employees name.",
        name: "name",
      },
      {
        type: "list",
        message: "Please choose the employees role.",
        choices: ["Engineer", "Intern", "Manager"],
        name: "role",
      },
      {
        type: "input",
        message: "Please enter the employee identifcation number.",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter the employees email address",
        name: "email",
      },
    ])
    .then(function ({ name, role, id, email }) {
      let roleDetail = "";
      if (role === "Engineer") {
        roleDetail = "GitHub username";
      } else if (role === "Intern") {
        roleDetail = "school graduated from or currently attending";
      } else {
        roleDetail = "office or desk number";
      }
      return inquirer
        .prompt([
          {
            message: `Enter the following role specific detail: ${roleDetail}.`,
            name: "roleDetail",
          },
          {
            type: "confirm",
            message: "Would you like to add additional employees?",
            name: "confirmAdd",
            default: false,
          },
        ])
        .then(function ({ roleDetail, confirmAdd }) {
          let EE;
          if (role === "Engineer") {
            EE = new Engineer(name, id, email, roleDetail);
          } else if (role === "Intern") {
            EE = new Intern(name, id, email, roleDetail);
          } else {
            EE = new Manager(name, id, email, roleDetail);
          }
          employees.push(EE);

          if (confirmAdd) {
            generateSection(employees);
            return addEmployee();
          } else {
            return generateSection(employees);
          }
        });
    });
}

const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your file has been successfuly generated");
    }
  });
};

addEmployee()
  .then((data) => {
    writeFile(data);
  })

  .catch((err) => {
    console.log(err);
  });
