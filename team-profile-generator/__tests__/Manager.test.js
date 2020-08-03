const Manager = require('../lib/Manager.js');
const emp = new Manager("name", "id", "email", "officeNumber");

test('creating Manager instance', function(){
  const empType = new Manager('sample');
  expect(typeof(emp)).toBe('object');
});

test('test the Manager contructor sets correct value for name set', function() {
  expect(emp.name).toBe('name');
});

test('test the Manager contructor sets correct value for id set', function() {
  expect(emp.id).toBe('id');
});

test('test the Manager contructor sets correct value for email set', function() {
  expect(emp.email).toBe('email');
});

test('test the Manager contructor sets correct value for office number set', function() {
  expect(emp.officeNumber).toBe('officeNumber');
});