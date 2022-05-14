const getManager = (manager) => {
  return `
  <div class="col-3 justify-content-center mx-4 px-5">

    <div class="flip-card ">
                        <div class="flip-card-inner">
                          <div class="flip-card-front back ">
                            <img src = "./assets/465-4651857_hiring-manager-icon-png-transparent-png.png"/>
                          </div>
                          <div class="flip-card-back back text-left">
                            <p><strong>Name: </strong>${manager.name}</p>
                            <p><strong>Title: </strong>Manager</p>
                            <p><strong>EE ID: </strong>${manager.id}</p>
                            <p><strong>Office Number: </strong>${manager.officeNumber}</p>
                            <p><strong>Email: </strong><a href= "mailto:${manager.email}">${manager.email} </a></p>
                          </div>
                        </div>
                      </div>
                      </div>
    `;
};

const getIntern = (intern) => {
  return `
    <div class="col-3 justify-content-center mx-4 px-5">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front back ">
          <img src = "./assets/intern.png"/>
        </div>
        <div class="flip-card-back back text-left">
        <p><strong>Name: </strong>${intern.name}</p>
        <p><strong>Title: </strong> Intern</p>
        <p><strong>EE ID: </strong>${intern.id}</p>
        <p><strong>School Attended: </strong>${intern.school}</p>
        <p><strong>Email: </strong><a href= "mailto:${intern.email}">${intern.email} </a></p>
        </div>
      </div>
    </div>
  </div>
    `;
};

const getEngineer = (engineer) => {
  return `
    <div class="col-3 justify-content-center mx-4 px-5">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front back ">
          <img src = "./assets/engineer.jpeg"/>
        </div>
        <div class="flip-card-back back text-left">
        <p><strong>Name: </strong>${engineer.name}</p>
        <p><strong>Title: </strong> Engineer</p>
        <p><strong>EE ID: </strong>${engineer.id}</p>
        <p><strong>GitHub Link: </strong><a href= "https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></p>
        <p><strong>Email: </strong><a href= "mailto:${engineer.email}">${engineer.email} </a></p>
        </div>
      </div>
    </div>
  </div>
    `;
};

const generateSection = (employees) => {
  const pageSection = [];
  for (let i = 0; i < employees.length; i++) {
    const staff = employees[i];
    const role = staff.getRole();

    if (role === "Intern") {
      const internSection = getIntern(staff);
      pageSection.push(internSection);
    } else if (role === "Manager") {
      const managerSection = getManager(staff);
      pageSection.push(managerSection);
    } else {
      const engineerSection = getEngineer(staff);
      pageSection.push(engineerSection);
    }
  }
  const employeeData = pageSection.join("");

  const generateInfo = generateHTML(employeeData);
  return generateInfo;
};

const generateHTML = (employeeData) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Directory</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
    
    
    
</head>
<body>
    <div class="jumbotron title">
        <h1 class="display-4 text-center text-light ">Employee Directory</h1>
    </div>
    <main>
        <div class="container">
            <div class="row">
               
                    <!-- team data -->
                    ${employeeData}
                </div>
            </div>
        </div>
    </main>

</body>
</html>`;
};

module.exports = generateSection;
