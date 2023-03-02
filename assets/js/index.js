const inquirer = require('inquirer');
const fs = require('fs');

questions = [
  {
    type: 'input',
    message: 'What is your name?',
    name: 'username'
  },
  {
    type: 'input',
    message: 'What is your location?',
    name: 'location'
  },
  {
    type: 'input',
    message: 'What is your LinkedIn Url?',
    name: 'linkedin'
  },
  {
    type: 'input',
    message: 'What is your GitHub Url?',
    name: 'github'
  },
  {
    type: 'checkbox',
    message: 'Pick from the below of your favorite?',
    name: 'faves',
    choices: ["blue", "carnivals", "a ham sandwich", "Madonna"]
  },
]

inquirer
  .prompt(questions)
  .then((answers) => {makePortfolio(answers)});

const makePortfolio = ({username, location, linkedin, github }) => {
  // console.log(answers);
  fs.writeFile("../../index.html", 
      `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${username}'s Brand Spanking New Portfolio</title>
      </head>
      <body>
        <header>
          <h1>THIS IS ${username}'S PORTFOLIO, READ PLEASE</h1>
        </header>
        <main>
          <section>
            <h2>THIS IS MY LOCATION</h2>
              <ul>
                <li>${location}</li>
              </ul>
          </section>
          <section>
            <h2>THESE ARE MY LINKS</h2>
              <ul>
                <li><a href="${linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="${github}" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </section>
          <section>
          <h2>HERE ARE SOME FAVORITE THINGS</h2>
            <ul>
            </ul>
        </main>
      </body>
      </html>`, "utf8", (err) => {
        err ? console.log(err) : console.log("SITE MADE!")})};


// generateLIs would be a function that happens in the UL to genreate LIs per length of faves.