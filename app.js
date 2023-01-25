function Product (brandName, price, discount) {
  this.brandName = brandName;
  this.price = price;
  this.discount = discount;
}

Product.prototype.getPriceWithDiscount = function() {
  return (this.price * (100 -this.discount)) / 100;
}

Product.prototype.setPrice = function (newPrice) {
  this.price = newPrice;
};

const apple = new Product('Apple', 100, 15);
const samsung = new Product('Samsung', 150, 10);
// console.log(apple.hasOwnProperty('brandName'));
console.log(apple);
console.log(samsung);

console.log(apple.getPriceWithDiscount());
console.log(samsung.getPriceWithDiscount());
apple.setPrice(540);
console.log(apple.getPriceWithDiscount());

/* 
Object.create(proto[, descriptors]) – создаёт пустой объект со свойством [[Prototype]], указанным как proto (может быть null), и необязательными дескрипторами свойств.
Object.getPrototypeOf(obj) – возвращает свойство [[Prototype]] объекта obj (то же самое, что и геттер __proto__).
Object.setPrototypeOf(obj, proto) – устанавливает свойство [[Prototype]] объекта obj как proto (то же самое, что и сеттер __proto__).*/

const protoForObj = {
  sayHello() {
    return 'Hello'
  },
};

const obj = Object.create(protoForObj, {
  firstName : {
    value: 'Sonya',
  },
});

console.log(obj);
console.log(obj.sayHello());

/*Object.keys(obj) / Object.values(obj) / Object.entries(obj) – возвращают массив всех перечисляемых собственных строковых ключей/значений/пар ключ-значение.
Object.getOwnPropertySymbols(obj) – возвращает массив всех собственных символьных ключей.
Object.getOwnPropertyNames(obj) – возвращает массив всех собственных строковых ключей.
Reflect.ownKeys(obj) – возвращает массив всех собственных ключей.
obj.hasOwnProperty(key): возвращает true, если у obj есть собственное (не унаследованное) свойство с именем key. */

//inheritance

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

User.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

User.prototype.sayHello = function () {
  return `Hello ${this.firstName} ${this.lastName}`;
};

//Customer

const user = new User('Sonya', 'Chmonigan');

function Customer(firstName, lastName, membership) {
  User.call(this, firstName, lastName);
  this.membership = membership;
}
//функциональное наследование 

/*function Customer(firstName, lastName, membership) {
  User.apply(this, arguments);
}
*/

Customer.prototype = Object.create(User.prototype);
//прототипное наследование 
Customer.prototype.cunstructor = Customer;

Customer.prototype.getMembership = function() {
  return this.membership.toUpperCase();
};

const customer = new Customer('Chmonya', 'Vonigan', 'basic');

console.log(customer.getMembership());

