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
    // return false;
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
          value: false,
          short: 'Done'
        }
      ]
    }
  ]).then(response => {
    if (response.newMember === 1) {
      // Engineer
    }
  })
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

      console.log('Page created! Check out index.html in this directory to see it!');
    });
  });

// const promptUser = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your team members name?',
//       validate: nameInput => {
//         if (nameInput) {
//           return true;
//         } else {
//           console.log('Please enter your team members name!');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your team members name?',
//       validate: nameInput => {
//         if (nameInput) {
//           return true;
//         } else {
//           console.log('Please enter your team members name!');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your team members name?',
//       validate: nameInput => {
//         if (nameInput) {
//           return true;
//         } else {
//           console.log('Please enter your team members name!');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your team members name?',
//       validate: nameInput => {
//         if (nameInput) {
//           return true;
//         } else {
//           console.log('Please enter your team members name!');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'confirm',
//       name: 'confirmAbout',
//       message: 'Would you like to enter some information about yourself for an "About" section?',
//       default: true
//     },
//     {
//       type: 'input',
//       name: 'about',
//       message: 'Provide some information about yourself:',
//       when: ({ confirmAbout }) => confirmAbout
//     },
//   ]);
// };

// const promptProject = portfolioData => {
//   portfolioData.projects = [];
//   if (!portfolioData.projects) {
//     portfolioData.projects = [];
//   }
//   console.log(`
// =================
// Add a New Project
// =================
// `);
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is the name of your project?'
//     },
//     {
//       type: 'input',
//       name: 'description',
//       message: 'Provide a description of the project (Required)'
//     },
//     {
//       type: 'checkbox',
//       name: 'languages',
//       message: 'What did you this project with? (Check all that apply)',
//       choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
//     },
//     {
//       type: 'input',
//       name: 'link',
//       message: 'Enter the GitHub link to your project. (Required)'
//     },
//     {
//       type: 'confirm',
//       name: 'feature',
//       message: 'Would you like to feature this project?',
//       default: false
//     },
//     {
//       type: 'confirm',
//       name: 'confirmAddProject',
//       message: 'Would you like to enter another project?',
//       default: false
//     }
//   ]).then(projectData => {
//     portfolioData.projects.push(projectData);
//     if (projectData.confirmAddProject) {
//       return promptProject(portfolioData);
//     } else {
//       return portfolioData;
//     }
//   });
// };

// promptUser()
//   .then(promptProject)
//   .then(portfolioData => {
//     const pageHTML = generatePage(portfolioData);

//     fs.writeFile(`./YourTeam.HTML`, pageHTML, err => {
//       if (err) throw new Error(err);

//       console.log('Page created! Check out index.html in this directory to see it!');
//     });
//   });