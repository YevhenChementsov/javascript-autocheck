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

// ==========  Задача №3  ==========

// function Car(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// ==========  Задача №4  ==========

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

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
//   this.price = newPrice;
// };

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
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// ==========  Задача №7  ==========

// function StringBuilder (baseValue) {
//   this.value = baseValue;
// }
// StringBuilder.prototype.getValue = function () {
//   return this.value;
// }
// StringBuilder.prototype.padStart = function (str) {
//   this.value = str + this.value;
//   return this.value;
// }
// StringBuilder.prototype.padEnd = function (str ) {
//   this.value += str;
//   return this.value;
// }
// StringBuilder.prototype.padBoth = function (str ) {
//   this.value = str + this.value + str;
//   return this.value;
// }
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// ==========  Задача №8  ==========
// ==========  Задача №9  ==========
// ==========  Задача №10  ==========
// ==========  Задача №11  ==========
// ==========  Задача №12  ==========
// ==========  Задача №13  ==========
// ==========  Задача №14  ==========
// ==========  Задача №15  ==========
// ==========  Задача №16  ==========
// ==========  Задача №17  ==========
// ==========  Задача №18  ==========
// ==========  Задача №19  ==========
