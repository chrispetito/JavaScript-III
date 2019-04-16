/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The value of 'this' will be the window or console Object when 'this' is in the global scope.
* 2. Implicit binding means that whenever a function is called by the preceding dot, the object before the dot is 'this'.
* 3. New binding refers to the object that is created using a constructor function.
* 4. Explicit binding refers to 'this' being explicitly defined when JavaScript's call or apply methods are used.
*
* write out a code example of each explanation above
*/

// Principle 1

function exampleFunction(name) {
    console.log(this);
    return (name);
};
exampleFunction('Chris');

// Principle 2

const exampleObj = {
    'greeting': 'Hello',
    speak: function(name, age, favAnimal) {
      return (`${this.greeting}, my name is ${name}. I am ${age} years old, and my favorite animal is the ${favAnimal}.`);
    }
}
console.log(exampleObj.speak('Chris', 25, 'Eagle'));

// Principle 3

function NewObj(attributes) {
    this.newName = attributes.name;
    this.newGreeting = attributes.greeting;
    this.speak = function() {
        console.log(`${this.newName} says ${this.newGreeting}`)
    }
}
const chris = new NewObj({
    'name': 'Chris',
    'greeting': 'Hello!',
});
const mike = new NewObj({
    'name': 'Mike',
    'greeting': 'Hi!',
});
chris.speak();
mike.speak();


// Principle 4
// using the above constructor function and objects

chris.speak.call(mike);
chris.speak.apply(mike);

//or

mike.speak.call(chris);
mike.speak.apply(chris);