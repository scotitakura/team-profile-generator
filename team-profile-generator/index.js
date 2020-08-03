const fs = require('fs');
const generatePage = require('./utils/generateHTML.js');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')

function requiredField(input) {
  if (input) {
    return true;
  } else {
    return "This field is required!";
  }
}

const promptManager = () => {
  return inquirer.prompt([
    // Name
    {
      type: 'input',
      name: 'name',
      message: "What is the team manager's name?",
      validate: requiredField
    },
    // ID
    {
      type: 'input',
      name: 'id',
      message: "What is the team manager's employee ID?",
      validate: requiredField
    },
    // Email
    {
      type: 'input',
      name: 'email',
      message: "What is the team manager's email?",
      validate: requiredField
    },
    // Office number
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the team manager's office number?",
      validate: requiredField
    }
  ]).then(answers => {
    return { manager: new Manager(answers.name, answers.id, answers.email, answers.officeNumber) };
  });
};
const engineerQuestions = [
  // Name
  {
    type: 'input',
    name: 'name',
    message: "What is the engineer's name?",
    validate: requiredField
  },
  // ID
  {
    type: 'input',
    name: 'id',
    message: "What is the engineer's employee ID?",
    validate: requiredField
  },
  // Email
  {
    type: 'input',
    name: 'email',
    message: "What is the engineer's email?",
    validate: requiredField
  },
  // Github
  {
    type: 'input',
    name: 'github',
    message: "What is the engineer's GitHub username?",
    validate: requiredField
  }
];
const internQuestions = [
  // Name
  {
    type: 'input',
    name: 'name',
    message: "What is the intern's name?",
    validate: requiredField
  },
  // ID
  {
    type: 'input',
    name: 'id',
    message: "What is the intern's employee ID?",
    validate: requiredField
  },
  // Email
  {
    type: 'input',
    name: 'email',
    message: "What is the intern's email?",
    validate: requiredField
  },
  // School
  {
    type: 'input',
    name: 'school',
    message: "What is the intern's school?",
    validate: requiredField
  }
];

const buildTeam = (data) => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'newMember',
      message: 'Would you like to continue building your team?',
      choices: [
        {
          name:'Yes, add an Engineer',
          value: 1,
          short: 'Add Engineer'
        },
        {
          name:'Yes, add an Intern',
          value: 2,
          short: 'Add Intern'
        },
        {
          name:'No',
          value: -1,
          short: 'Done'
        }
      ]
    }
  ]).then(response => {
    if (response.newMember == 1) {
      // Engineer
      return inquirer.prompt(engineerQuestions)
        .then(e => {
          data.engineers.push(new Engineer(e.name, e.id, e.email, e.github));
          return data;
        })
        .then(buildTeam);
    } else if (response.newMember == 2) {
      // Intern
      return inquirer.prompt(internQuestions)
        .then(i => {
          data.interns.push(new Intern(i.name, i.id, i.email, i.school));
          return data;
        })
        .then(buildTeam);
    } else {
      // Done
      return data;
    }
  });
}

promptManager()
  .then(answers => {
    answers.engineers = []
    answers.interns = []
    return buildTeam(answers)
  })
  .then(portfolioData => {
    const pageHTML = generatePage(portfolioData);

    fs.writeFile(`./YourTeam.HTML`, pageHTML, err => {
      if (err) throw new Error(err);

      console.log('Page created! Check out YourTeam.html in this directory to see it!');
    });
  });