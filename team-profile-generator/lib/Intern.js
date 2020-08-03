const Employee = require('./Employee.js')

function Intern(name, id, email, school) {
    Employee.apply(this, [name, id, email])
    this.school = school

    this.getSchool = function() {
        return this.school
    }

    this.getRole = function() {
        return 'Intern'
    }
}

module.exports = Intern