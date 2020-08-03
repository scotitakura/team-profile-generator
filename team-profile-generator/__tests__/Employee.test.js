const Employee = require('../lib/Employee.js');
const emp = new Employee("name", "id", "email");

test('creating employee instance', function(){
  const empType = new Employee('sample');
  expect(typeof(emp)).toBe('object');
});

test('test the employee contructor sets correct value for name set', function() {
  expect(emp.name).toBe('name');
});

test('test the employee contructor sets correct value for id set', function() {
  expect(emp.id).toBe('id');
});

test('test the employee contructor sets correct value for email set', function() {
  expect(emp.email).toBe('email');
});