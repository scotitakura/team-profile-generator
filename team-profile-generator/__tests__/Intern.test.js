const Intern = require('../lib/Intern.js');
const emp = new Intern("name", "id", "email", "school");

test('creating Intern instance', function(){
  const empType = new Intern('sample');
  expect(typeof(emp)).toBe('object');
});

test('test the Intern contructor sets correct value for name set', function() {
  expect(emp.name).toBe('name');
});

test('test the Intern contructor sets correct value for id set', function() {
  expect(emp.id).toBe('id');
});

test('test the Intern contructor sets correct value for email set', function() {
  expect(emp.email).toBe('email');
});

test('test the Intern contructor sets correct value for office number set', function() {
  expect(emp.school).toBe('school');
});