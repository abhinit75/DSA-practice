// object constructor
function Wallet() {
  this.value;
  this.currency;

  this.get = () => {
    return console.log("Your wallet has " + this.value + " " + this.currency);
  };

  this.setValue = (value) => {
    this.value = value;
  };

  this.setCurrency = (currency) => {
    this.currency = currency;
  };
}

let myWallet = new Wallet();

myWallet.setValue(20);
myWallet.setCurrency("CAD");
myWallet.get();

// trying to add variables to constructors (NEED TO USE PROTOTYPE)
Wallet.prototype.ownedBy = "customer";
console.log(myWallet.ownedBy);

function Student(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

// Getters and Setters
const mainStudent = {
  firstName: "Aabha",
  lastName: "Patil",
  age: 10,
  gender: "F",

  get getFullName() {
    return "The student's name is " + this.firstName + " " + this.lastName;
  },

  get getAge() {
    return "The student's age is " + this.age;
  },

  get getGender() {
    return "This is the student's gender " + this.gender;
  },

  set setName(firstName) {
    this.firstName = firstName;
  },

  set setLastName(lastName) {
    this.lastName = lastName;
  },

  set setAge(age) {
    this.age = age;
  },

  set setGender(gender) {
    this.gender = gender;
  },
};

console.log(mainStudent.getFullName);

// Prototypes

// constructor function
function Person() {
  (this.name = "John"), (this.age = 23);
}

// creating objects
const person1 = new Person();
const person2 = new Person();

// checking for the prototype object
console.log(Person.prototype); // currently empty because nothing is in it

// In JS, the prototype is used to add methods and properties to the constructor function
// adding property to constructor function
Person.prototype.gender = "male";

// prototype value of Person
console.log(Person.prototype);

// inheriting the property from prototype
console.log(person1.gender);
console.log(person2.gender);

// methods
Person.prototype.greet = () => {
  console.log("hello" + " " + this.name);
};
