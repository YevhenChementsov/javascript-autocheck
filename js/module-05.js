// ==========  Задача №1  ==========

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// console.log(
//   'parent.hasOwnProperty("surname"):',
//   parent.hasOwnProperty('surname'),
// );
// console.log(
//   'parent.hasOwnProperty("heritage"):',
//   parent.hasOwnProperty('heritage'),
// );
// console.log('child.hasOwnProperty("name"):', child.hasOwnProperty('name'));
// console.log('child.name:', child.name);
// console.log('child.hasOwnProperty("age"):', child.hasOwnProperty('age'));
// console.log('child.age:', child.age);
// console.log(
//   'child.hasOwnProperty("surname"):',
//   child.hasOwnProperty('surname'),
// );
// console.log('child.surname:', child.surname);
// console.log(
//   'child.hasOwnProperty("heritage"):',
//   child.hasOwnProperty('heritage'),
// );
// console.log('child.heritage:', child.heritage);
// console.log('parent.isPrototypeOf(child):', parent.isPrototypeOf(child));

// ==========  Задача №2  ==========

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish',
// };

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// console.log('parent.isPrototypeOf(child):', parent.isPrototypeOf(child));
// console.log('parent.surname:', parent.surname);
// console.log('parent.heritage:', parent.heritage);
// console.log(
//   'parent.hasOwnProperty("surname"):',
//   parent.hasOwnProperty('surname'),
// );
// console.log(
//   'parent.hasOwnProperty("heritage"):',
//   parent.hasOwnProperty('heritage'),
// );
// console.log('ancestor.isPrototypeOf(parent):', ancestor.isPrototypeOf(parent));
// console.log(
//   'child.hasOwnProperty("surname"):',
//   child.hasOwnProperty('surname'),
// );
// console.log('child.surname:', child.surname);
// console.log('child.heritage:', child.heritage);
// console.log(
//   'child.hasOwnProperty("heritage"):',
//   child.hasOwnProperty('heritage'),
// );
// console.log('ancestor.heritage:', ancestor.heritage);
// console.log(
//   'ancestor.hasOwnProperty("surname"):',
//   ancestor.hasOwnProperty('surname'),
// );
// console.log(
//   'ancestor.hasOwnProperty("heritage"):',
//   ancestor.hasOwnProperty('heritage'),
// );
// console.log('ancestor.surname:', ancestor.surname);

// ==========  Задача №3  ==========

// function Car(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// console.log('new Car("Audi", "Q3", 36000):', new Car('Audi', 'Q3', 36000));
// console.log('new Car("BMW", "X5", 58900):', new Car('BMW', 'X5', 58900));
// console.log(
//   'new Car("Nissan", "Murano", 31700):',
//   new Car('Nissan', 'Murano', 31700),
// );

// ==========  Задача №4  ==========

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// console.log(
//   'new Car({ brand: "Audi", model: "Q3", price: 36000 }):',
//   new Car({ brand: 'Audi', model: 'Q3', price: 36000 }),
// );
// console.log(
//   'new Car({ brand: "BMW", model: "X5", price: 58900 }):',
//   new Car({ brand: 'BMW', model: 'X5', price: 58900 }),
// );
// console.log(
//   'new Car({ brand: "Nissan", model: "Murano", price: 31700 }):',
//   new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }),
// );

// ==========  Задача №5  ==========

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function () {
//   return this.price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   return (this.price = newPrice);
// };

// console.log(
//   'Car.prototype.hasOwnProperty("getPrice"):',
//   Car.prototype.hasOwnProperty('getPrice'),
// );
// console.log(
//   'Car.prototype.hasOwnProperty("changePrice"):',
//   Car.prototype.hasOwnProperty('changePrice'),
// );
// console.log(
//   'new Car({ brand: "Audi", model: "Q3", price: 36000 }).getPrice():',
//   new Car({ brand: 'Audi', model: 'Q3', price: 36000 }).getPrice(),
// );
// console.log(
//   'new Car({ brand: "Audi", model: "Q3", price: 36000 }).changePrice(35000):',
//   new Car({ brand: 'Audi', model: 'Q3', price: 36000 }).changePrice(35000),
// );

// ==========  Задача №6  ==========

// Вариант №1
// function Storage(items) {
//   this.items = items;
// }

// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//   for (const itemName of this.items) {
//     if (itemName !== newItem) {
//       this.items.push(newItem);
//       return this.items;
//     }
//   }
// };

// Storage.prototype.removeItem = function (item) {
//   for (let i = 0; i < this.items.length; i += 1) {
//     if (this.items[i] === item) {
//       this.items.splice(i, 1);
//       return this.items;
//     }
//   }
// };

// Вариант №2
// function Storage(items) {
//   this.items = items;
// }

// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
//   return this.items;
// };

// Storage.prototype.removeItem = function (item) {
//   const itemIndex = this.items.indexOf(item);
//   this.items.splice(itemIndex, 1);
//   return this.items;
// };

// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);

// console.log('storage.getItems():', storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]

// storage.addItem('Дроид');

// console.log('storage.addItem("Дроид"):', storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]

// storage.removeItem('Пролонгер');

// console.log('storage.removeItem("Пролонгер"):', storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// ==========  Задача №7  ==========

// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };

// StringBuilder.prototype.padStart = function (str) {
//   this.value = str + this.value;
//   return this.value;
// };

// StringBuilder.prototype.padEnd = function (str) {
//   this.value += str;
//   return this.value;
// };

// StringBuilder.prototype.padBoth = function (str) {
//   this.value = str + this.value + str;
//   return this.value;
// };

// const builder = new StringBuilder('.');

// console.log('builder.getValue():', builder.getValue()); // '.'

// builder.padStart('^');

// console.log('builder.padStart(" ^ "):', builder.getValue()); // '^.'

// builder.padEnd('^');

// console.log('builder.padEnd(" ^ "):', builder.getValue()); // '^.^'

// builder.padBoth('=');

// console.log('builder.padBoth(" = "):', builder.getValue()); // '=^.^='

// ==========  Задача №8  ==========

// class Car {}

// console.log('Вызов new Car() это пустой объект:', new Car());

// ==========  Задача №9  ==========

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// console.log(
//   'new Car({ brand: "Audi", model: "Q3", price: 36000 }):',
//   new Car({ brand: 'Audi', model: 'Q3', price: 36000 }),
// );
// console.log(
//   'new Car({ brand: "BMW", model: "X5", price: 58900 }):',
//   new Car({ brand: 'BMW', model: 'X5', price: 58900 }),
// );
// console.log(
//   'new Car({ brand: "Nissan", model: "Murano", price: 31700  }):',
//   new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }),
// );

// ==========  Задача №10  ==========

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//     return this.price;
//   }
// }

// console.log(
//   'Car.prototype.hasOwnProperty("getPrice"):',
//   Car.prototype.hasOwnProperty('getPrice'),
// );
// console.log(
//   'Car.prototype.hasOwnProperty("changePrice"):',
//   Car.prototype.hasOwnProperty('changePrice'),
// );
// console.log(
//   'new Car({ brand: "Audi", model: "Q3", price: 36000 }).getPrice():',
//   new Car({ brand: 'Audi', model: 'Q3', price: 36000 }).getPrice(),
// );
// console.log(
//   'new Car({ brand: "Audi", model: "Q3", price: 36000 }).changePrice(35000):',
//   new Car({ brand: 'Audi', model: 'Q3', price: 36000 }).changePrice(35000),
// );

// ==========  Задача №11  ==========

// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//     return this.#brand;
//   }
// }

// console.log(
//   'new Car({ brand: "Audi", model: "Q3", price: 36000 }):',
//   new Car({ brand: 'Audi', model: 'Q3', price: 36000 }),
// );
// console.log(
//   'new Car({ brand: "BMW", model: "X5", price: 58900 }):',
//   new Car({ brand: 'BMW', model: 'X5', price: 58900 }),
// );
// console.log(
//   'new Car({ brand: "Nissan", model: "Murano", price: 31700 }):',
//   new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }),
// );
// console.log(
//   'new Car({ brand: "Nissan", model: "Murano", price: 31700 }).getBrand():',
//   new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }).getBrand(),
// );
// console.log(
//   'new Car({ brand: "Nissan", model: "Murano", price: 31700  }).changeBrand("Honda"):',
//   new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }).changeBrand(
//     'Honda',
//   ),
// );

// ==========  Задача №12  ==========

// class Storage {
//   #items;

//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(item) {
//     const itemIndex = this.#items.indexOf(item);
//     this.#items.splice(itemIndex, 1);
//   }
// }

// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);

// console.log('storage.getItems():', storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]

// storage.addItem('Дроид');

// console.log('storage.addItem("Дроид"):', storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]

// storage.removeItem('Пролонгер');

// console.log('storage.removeItem("Пролонгер"):', storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// ==========  Задача №13  ==========

// class StringBuilder {
//   #value;

//   constructor(baseValue) {
//     this.#value = baseValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// const builder = new StringBuilder('.');

// console.log('builder.getValue():', builder.getValue()); // '.'

// builder.padStart('^');

// console.log('builder.padStart(" ^ "):', builder.getValue()); // '^.'

// builder.padEnd('^');

// console.log('builder.padEnd(" ^ "):', builder.getValue()); // '^.^'

// builder.padBoth('=');

// console.log('builder.padBoth(" = "):', builder.getValue()); // '=^.^='

// ==========  Задача №14  ==========

// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// ==========  Задача №15  ==========

// class Car {
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (Car.MAX_PRICE >= newPrice) {
//       this.#price = newPrice;
//     }
//     return;
//   }
// }

// const audi = new Car({ price: 35000 });

// console.log(
//   'Если значения параметра newPrice больше чем MAX_PRICE(50000), сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.',
// );

// console.log('audi.price = 35000, newPrice:', audi.price); // 35000

// audi.price = 49000;

// console.log('audi.price = 49000, newPrice:', audi.price); // 49000

// audi.price = 51000;

// console.log('audi.price = 51000, newPrice:', audi.price); // 49000

// ==========  Задача №16  ==========

// class Car {
//   static #MAX_PRICE = 50000;

//   static checkPrice(price) {
//     if (Car.#MAX_PRICE < price) {
//       return 'Внимание! Цена превышает допустимую.';
//     }
//     return 'Всё хорошо, цена в порядке.';
//   }

//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });

// const bmw = new Car({ price: 64000 });

// console.log('MAX_PRICE = 50000');
// console.log('audi price = 36000:', Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log('bmw price = 64000:', Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// ==========  Задача №17  ==========

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
// }

// console.log(
//   'Admin.AccessLevel.BASIC возвращает строку "basic":',
//   Admin.AccessLevel.BASIC,
// );
// console.log(
//   'Admin.AccessLevel.SUPERUSER возвращает строку "superuser":',
//   Admin.AccessLevel.SUPERUSER,
// );

// ==========  Задача №18  ==========

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   accessLevel;

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log('mango.email:', mango.email); // mango@mail.com
// console.log('mango.accessLevel:', mango.accessLevel); // superuser

// ==========  Задача №19  ==========

// Вариант №1
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   blacklistedEmails;
//   accessLevel;

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     for (const blacklistedEmail of this.blacklistedEmails) {
//       if (blacklistedEmail !== email) {
//       return false;
//       }
//     return true;
//   }
// }

// Вариант №2
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {

//     static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   blacklistedEmails;
//   accessLevel;

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email) ? true : false;
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true
