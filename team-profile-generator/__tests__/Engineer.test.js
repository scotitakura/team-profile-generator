const Engineer = require('../lib/Engineer.js');
const emp = new Engineer("name", "id", "email", "github");

test('creating Engineer instance', function(){
  const empType = new Engineer('sample');
  expect(typeof(emp)).toBe('object');
});

test('test the Engineer contructor sets correct value for name set', function() {
  expect(emp.name).toBe('name');
});

test('test the Engineer contructor sets correct value for id set', function() {
  expect(emp.id).toBe('id');
});

test('test the Engineer contructor sets correct value for email set', function() {
  expect(emp.email).toBe('email');
});

test('test the Engineer contructor sets correct value for office number set', function() {
  expect(emp.github).toBe('github');
});