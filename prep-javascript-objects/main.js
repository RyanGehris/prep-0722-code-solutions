const person = {
  firstName: 'Ryan',
  lastName: 'Gehris',
  hobby: 'hiking'
};

const fullName = `${person.firstName} ${person.lastName}`;
console.log("The person's name is: " + fullName);
person.job = 'Unemplyed';
console.log("The person's Job is: " + person.job);
person.previousJob = 'Medical Assistant';
console.log("The person's previous job is: " + person.previousJob);
console.log(person);
