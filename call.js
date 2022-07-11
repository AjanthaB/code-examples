/**
 * usage of call
 * */

const person = {firstName: 'Ajantha', lastName: 'Bandara'};
function fullName(prefix, status) {
    return prefix + ' ' + this.firstName + ' ' + this.lastName + ' is a ' + status + ' Person';
}

const callResult = fullName.call(person, ['Mr', 'Married']);
console.log(callResult);
// result: Mr Ajantha Bandara is a Married Person
