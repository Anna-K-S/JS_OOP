//Built-in JavaScript Constructors
new String()    // A new String object
new Number()    // A new Number object
new Boolean()   // A new Boolean object
new Object()    // A new Object object
new Array()     // A new Array object
new RegExp()    // A new RegExp object
new Function()  // A new Function object
new Date()      // A new Date object

function Product(brand, price, discount) {
  this.brand = brand;
  this.price = price;
  this.discount = discount;
  this.getPriceWithDiscount = function() {
    return (this.price * (100 -this.discount)) / 100;
  };
}

const apple = new Product('apple', 100, 14);
const samsung = new Product('Samsung', 200, 34);
console.log(apple, samsung);

console.log(apple.getPriceWithDiscount());


function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

console.log(user.name); 
console.log(user.isAdmin); 

function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); 


/*In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object. */
