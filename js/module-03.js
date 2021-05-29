// ==========  Задача №1  ==========

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };
// console.log('apartment:', apartment);

// ==========  Задача №2  ==========

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };
// console.log('apartment:', apartment);

// ==========  Задача №3  ==========

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// console.log('aptRating:', aptRating);
// console.log('aptDescr:', aptDescr);
// console.log('aptPrice:', aptPrice);
// console.log('aptTags:', aptTags);

// ==========  Задача №4  ==========

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log('ownerName:', ownerName);
// console.log('ownerPhone:', ownerPhone);
// console.log('ownerEmail:', ownerEmail);
// console.log('numberOfTags:', numberOfTags);
// console.log('firstTag:', firstTag);
// console.log('lastTag:', lastTag);

// ==========  Задача №5  ==========

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// console.log('aptRating:', aptRating);
// console.log('aptDescr:', aptDescr);
// console.log('aptPrice:', aptPrice);
// console.log('aptTags:', aptTags);

// ==========  Задача №6  ==========

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');
// console.log('price:', apartment.price);
// console.log('rating:', apartment.rating);
// console.log('name:', apartment.owner.name);
// console.log('tags:', apartment.tags);

// ==========  Задача №7  ==========

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = 'Jamaica';
// apartment.location.city = 'Kingston';
// console.log('area:', apartment.area);
// console.log('rooms:', apartment.rooms);
// console.log('location:', apartment.location);
// console.log('country:', apartment.location.country);
// console.log('city:', apartment.location.city);

// ==========  Задача №8  ==========

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };
// console.log('name:', name);
// console.log('price:', price);
// console.log('image:', image);
// console.log('tags:', tags);

// ==========  Задача №9  ==========

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
// };
// console.log('credentials:', credentials);

// ==========  Задача №10  ==========

// const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log('apartment:', apartment);
// console.log('keys:', keys);
// console.log('values:', values);

// ==========  Задача №11  ==========

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city centre';
// apartment.rating = 4;
// apartment.price = 2153;
// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }
// console.log('advert:', advert);
// console.log('apartment:', apartment);
// console.log('keys:', keys);
// console.log('values:', values);

// ==========  Задача №12  ==========

// Вариант №1
// function countProps(object) {
//   let propCount = 0;
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }

// Вариант №2
// function countProps(object) {
//   let propCount = 0;
//   propCount = Object.keys(object).length;
//   return propCount;
// }
// console.log('countProps:', countProps({}));
// console.log('countProps:', countProps({ name: 'Mango', age: 2 }));
// console.log(
//   'countProps:',
//   countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }),
// );

// ==========  Задача №13  ==========

// const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log('apartment:', apartment);
// console.log('keys:', keys);
// console.log('values:', values);

// ==========  Задача №14  ==========

// Вариант №1
// function countProps(object) {
//   let propCount = 0;
//   propCount = Object.keys(object).length;
//   return propCount;
// }

// Вариант №2
// function countProps(object) {
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     propCount += 1;
//   }
//   return propCount;
// }
// console.log('countProps:', countProps({}));
// console.log('countProps:', countProps({ name: 'Mango', age: 2 }));
// console.log(
//   'countProps:',
//   countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }),
// );

// ==========  Задача №15  ==========

// const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log('apartment:', apartment);
// console.log('keys:', keys);
// console.log('values:', values);

// ==========  Задача №16  ==========

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries);
//   for (value of values) {
//     totalSalary += value;
//   }
//   return totalSalary;
// }
// console.log('countTotalSalary:', countTotalSalary({}));

// ==========  Задача №17  ==========

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// ==========  Задача №18  ==========

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price;
//     }
//   }
//   return null;
// }

// ==========  Задача №19  ==========

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   const propValues = [];
//   for (const product of products) {
//     if (product[propName]) {
//       propValues.push(product[propName]);
//     }
//   }
//   return propValues;
// }

// ==========  Задача №20  ==========

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products) {
//     if (productName === product.name) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   return totalPrice;
// }

// ==========  Задача №21  ==========

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const { yesterday, today, tomorrow } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log('highTemperatures:', highTemperatures);
// console.log('yesterday:', yesterday);
// console.log('today:', today);
// console.log('tomorrow:', tomorrow);
// console.log('meanTemperature:', meanTemperature);

// ==========  Задача №22  ==========

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log('highTemperatures:', highTemperatures);
// console.log('yesterday:', yesterday);
// console.log('today:', today);
// console.log('tomorrow:', tomorrow);
// console.log('icon:', icon);
// console.log('meanTemperature:', meanTemperature);

// ==========  Задача №23  ==========

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log('highTemperatures:', highTemperatures);
// console.log('highYesterday:', highYesterday);
// console.log('highToday:', highToday);
// console.log('highTomorrow:', highTomorrow);
// console.log('highIcon:', highIcon);
// console.log('meanTemperature:', meanTemperature);

// ==========  Задача №24  ==========

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log('colors:', colors);
// console.log('hexColors:', hexColors);
// console.log('rgbColors:', rgbColors);

// ==========  Задача №25  ==========

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;
// console.log('forecast:', forecast);
// console.log('highToday:', highToday);
// console.log('lowToday:', lowToday);
// console.log('todayIcon:', todayIcon);
// console.log('highTomorrow:', highTomorrow);
// console.log('lowTomorrow:', lowTomorrow);
// console.log('tomorrowIcon:', tomorrowIcon);

// ==========  Задача №26  ==========

// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   }),
// );
// console.log(
//   calculateMeanTemperature({
//     today: { low: 37, high: 40 },
//     tomorrow: { low: 33, high: 38 },
//   }),
// );

// ==========  Задача №27  ==========

// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log('scores:', scores);
// console.log('bestScore:', bestScore);
// console.log('worstScore:', worstScore);

// ==========  Задача №28  ==========

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log('firstGroupScores:', firstGroupScores);
// console.log('secondGroupScores:', secondGroupScores);
// console.log('thirdGroupScores:', thirdGroupScores);
// console.log('allScores:', allScores);
// console.log('bestOfAllScore:', bestScore);
// console.log('worstOfAllScore:', worstScore);

// ==========  Задача №29  ==========

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log('defaultSettings:', defaultSettings);
// console.log('overrideSettings:', overrideSettings);
// console.log('finalSettings:', finalSettings);

// ==========  Задача №30  ==========

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   const newData = { category, priority, completed, ...data };
//   return newData;
// }
// console.log('makeTask:', makeTask({}));
// console.log(
//   'makeTask:',
//   makeTask({
//     category: 'Homemade',
//     priority: 'Low',
//     text: 'Take out the trash',
//   }),
// );
// console.log(
//   'makeTask:',
//   makeTask({ category: 'Finance', text: 'Take interest' }),
// );

// ==========  Задача №31  ==========

// function add(...args) {
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return sum;
// }
// console.log('add(15, 27):', add(15, 27));
// console.log('add(12, 4, 11, 48):', add(12, 4, 11, 48));
// console.log('add(32, 6, 13, 19, 8):', add(32, 6, 13, 19, 8));
// console.log('add(74, 11, 62, 46, 12, 36):', add(74, 11, 62, 46, 12, 36));

// ==========  Задача №32  ==========

// function addOverNum(value, ...args) {
//   let total = 0;
//   for (const arg of args) {
//     if (value < arg) {
//       total += arg;
//     }
//   }
//   return total;
// }
// console.log('addOverNum(50, 15, 27):', addOverNum(50, 15, 27));
// console.log(
//   'addOverNum(10, 12, 4, 11, 48, 10, 8):',
//   addOverNum(10, 12, 4, 11, 48, 10, 8),
// );
// console.log(
//   'addOverNum(15, 32, 6, 13, 19, 8):',
//   addOverNum(15, 32, 6, 13, 19, 8),
// );
// console.log(
//   'addOverNum(20, 74, 11, 62, 46, 12, 36):',
//   addOverNum(20, 74, 11, 62, 46, 12, 36),
// );

// ==========  Задача №33  ==========

// function findMatches(...args) {
//   const matches = []; // Don't change this line
//   for (const arg of args) {
//     if (args[0].includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   return matches;
// }
// console.log(
//   'findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7):',
//   findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7),
// );
// console.log(
//   'findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2):',
//   findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2),
// );
// console.log(
//   'findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41):',
//   findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41),
// );
// console.log(
//   'findMatches([63, 11, 8, 29], 4, 7, 16):',
//   findMatches([63, 11, 8, 29], 4, 7, 16),
// );

// ==========  Задача №34  ==========

// const bookShelf = {
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };
// console.log('bookShelf:', bookShelf);
// console.log('bookShelf.getBooks():', bookShelf.getBooks());
// console.log('bookShelf.addBook("Haze"):', bookShelf.addBook('Haze'));
// console.log(
//   'bookShelf.removeBook("Red sunset"):',
//   bookShelf.removeBook('Red sunset'),
// );
// console.log(
//   'bookShelf.updateBook("Sands of dune", "Dune"):',
//   bookShelf.updateBook('Sands of dune', 'Dune'),
// );

// ==========  Задача №35  ==========

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//   },
// };

// ==========  Задача №36  ==========

// const atTheOldToad = {
//   potions: [],
// };

// ==========  Задача №37  ==========

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
// };

// ==========  Задача №38  ==========

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };

// ==========  Задача №39  ==========

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);
//   },
// };

// ==========  Задача №40  ==========

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionIndex, 1, newName);
//   },
// };

// ==========  Задача №41  ==========

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     const { potions } = this;
//     const { name } = potionName;
//     for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === name) {
//         return `Potion ${name} is already equipped!`;
//       }
//       potions.push(potionName);
//     }
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === potionName) {
//         potions.splice(i, 1);
//         return potions;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === oldName) {
//         potions[i].name = newName;
//         return potions;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };
