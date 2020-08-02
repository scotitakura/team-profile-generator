const Employee = require('./Employee.js')

function Manager(name, id, email, officeNumber) {
  Employee.apply(this, [name, id, email])
  this.officeNumber = officeNumber
  this.getRole = function() {
    return 'Manager'
  }
}

module.exports = Manager