  
const Employee = require('./Employee.js')

function Engineer(name, id, email, github) {
    Employee.apply(this, [name, id, email])
    this.github = github

    this.getGithub = function() {
        return this.github
    }

    this.getRole = function() {
        return 'Engineer'
    }
}

module.exports = Engineer
