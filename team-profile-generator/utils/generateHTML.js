module.exports = templateData => {
  const manager = templateData.manager;
  const engineers = templateData.engineers;
  const interns = templateData.interns;
  
  var html = `
    <div class="col s3">
      <div class="card grey darken-2">
        <div class="left-align card-panel orange accent-4 manager">
          <h5 class="white-text name">${manager.name}</h5>
          <h6 class="white-text title">Manager</h6>
        </div>
        <div class="left-align card-content engineer">
          <div class="white-text id">ID: ${manager.id}</div>
          <div class="white-text email">
          Email:
          <a class="blue-text" href="mailto:${manager.email}">${manager.email}</a>
          </div>
          <div class="white-text officeNumber">Office number: ${manager.officeNumber}</div>
        </div>
      </div>
    </div>`;

  engineers.forEach((engineer, index, arr) => {
    html += `
    <div class="col s3">
      <div class="card grey darken-2">
        <div class="left-align card-panel orange accent-4 engineer">
          <h5 class="white-text name">${engineer.name}</h5>
          <h6 class="white-text title">Engineer</h6>
        </div>
        <div class="left-align card-content engineer">
          <div class="white-text id">ID: ${engineer.id}</div>
          <div class="white-text email">
            Email:
            <a class="blue-text activator" href="mailto:${engineer.email}">${engineer.email}</a>
          </div>
          <div class="white-text github">
            GitHub:
            <a class="blue-text" href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a>
          </div>
        </div>
      </div>
    </div>`;
  });

  interns.forEach((intern, index, arr) => {
    html += `
      <div class="col s3">
        <div class="card grey darken-2">
          <div class="left-align card-panel orange accent-4 engineer">
            <h5 class="white-text name">${intern.name}</h5>
            <h6 class="white-text title">Intern</h6>
          </div>
          <div class="left-align card-content">
            <div class="white-text id">ID: ${intern.id}</div>
            <div class="white-text email">
              Email:
              <a class="blue-text" href="mailto:${intern.email}">${intern.email}</a>
            </div>
            <div class="white-text school">School: ${intern.school}</div>
          </div>
        </div>
      </div>`;
  });

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Your Team Project</title>
  </head>
  <body>
    <nav>
      <div class="orange darken-4 nav-wrapper">
        <a class="center-align brand-logo center">Team Profile</a>
      </div>
    </nav>
    <h1 class="center-align">My Team</h1>
    <div class="center-align container">  
      <div class="center-align row">
        ${html}
      </div>
    </div>
      <script type="text/javascript" src="js/materialize.min.js"></script>
  </body>
  </html>`;
};