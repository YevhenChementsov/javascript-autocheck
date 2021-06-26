// ==========  Задача №1  ==========

// Задание:

// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// Решение:

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(item => (totalPrice += item));

//   return totalPrice;
// }

// console.log(
//   'calculateTotalPrice([12, 85, 37, 4]):',
//   calculateTotalPrice([12, 85, 37, 4]),
// );
// console.log(
//   'calculateTotalPrice([164, 48, 291]):',
//   calculateTotalPrice([164, 48, 291]),
// );
// console.log(
//   'calculateTotalPrice([412, 371, 94, 63, 176]):',
//   calculateTotalPrice([412, 371, 94, 63, 176]),
// );

// ==========  Задача №2  ==========

// Задание:

// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// Решение:

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

// console.log(
//   'filterArray([1, 2, 3, 4, 5], 3):',
//   filterArray([1, 2, 3, 4, 5], 3),
// );
// console.log(
//   'filterArray([1, 2, 3, 4, 5], 4):',
//   filterArray([1, 2, 3, 4, 5], 4),
// );
// console.log(
//   'filterArray([1, 2, 3, 4, 5], 5):',
//   filterArray([1, 2, 3, 4, 5], 5),
// );
// console.log(
//   'filterArray([12, 24, 8, 41, 76], 38):',
//   filterArray([12, 24, 8, 41, 76], 38),
// );
// console.log(
//   'filterArray([12, 24, 8, 41, 76], 20):',
//   filterArray([12, 24, 8, 41, 76], 20),
// );

// ==========  Задача №3  ==========

// Задание:

// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// Решение:

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(item => {
//     if (secondArray.includes(item)) {
//       commonElements.push(item);
//     }
//   });

//   return commonElements;
// }

// console.log(
//   'getCommonElements([1, 2, 3], [2, 4]):',
//   getCommonElements([1, 2, 3], [2, 4]),
// );
// console.log(
//   'getCommonElements([1, 2, 3], [2, 1, 17, 19]):',
//   getCommonElements([1, 2, 3], [2, 1, 17, 19]),
// );
// console.log(
//   'getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]):',
//   getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]),
// );
// console.log(
//   'getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]):',
//   getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]),
// );
// console.log(
//   'getCommonElements([1, 2, 3], [10, 20, 30]):',
//   getCommonElements([1, 2, 3], [10, 20, 30]),
// );

// ==========  Задача №4  ==========

// Задание:

// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

// Решение:

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// console.log('calculateTotalPrice(5, 100):', calculateTotalPrice(5, 100));
// console.log('calculateTotalPrice(8, 60):', calculateTotalPrice(8, 60));
// console.log('calculateTotalPrice(3, 400):', calculateTotalPrice(3, 400));

// ==========  Задача №5  ==========

// Задание:

// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

// Решение:

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// console.log('calculateTotalPrice(5, 100):', calculateTotalPrice(5, 100));
// console.log('calculateTotalPrice(8, 60):', calculateTotalPrice(8, 60));
// console.log('calculateTotalPrice(3, 400):', calculateTotalPrice(3, 400));

// ==========  Задача №6  ==========

// Задание:

// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.

// Решение:

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };

// console.log(
//   'calculateTotalPrice([12, 85, 37, 4]):',
//   calculateTotalPrice([12, 85, 37, 4]),
// );
// console.log(
//   'calculateTotalPrice([164, 48, 291]):',
//   calculateTotalPrice([164, 48, 291]),
// );
// console.log(
//   'calculateTotalPrice([412, 371, 94, 63, 176]):',
//   calculateTotalPrice([412, 371, 94, 63, 176]),
// );

// ==========  Задача №7  ==========

// Задание:

// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// Решение:

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };

// console.log(
//   'filterArray([1, 2, 3, 4, 5], 3):',
//   filterArray([1, 2, 3, 4, 5], 3),
// );
// console.log(
//   'filterArray([1, 2, 3, 4, 5], 4):',
//   filterArray([1, 2, 3, 4, 5], 4),
// );
// console.log(
//   'filterArray([1, 2, 3, 4, 5], 5):',
//   filterArray([1, 2, 3, 4, 5], 5),
// );
// console.log(
//   'filterArray([12, 24, 8, 41, 76], 38):',
//   filterArray([12, 24, 8, 41, 76], 38),
// );
// console.log(
//   'filterArray([12, 24, 8, 41, 76], 20):',
//   filterArray([12, 24, 8, 41, 76], 20),
// );

// ==========  Задача №8  ==========

// Задание:

// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// Решение:

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
// };

// console.log(
//   'getCommonElements([1, 2, 3], [2, 4]):',
//   getCommonElements([1, 2, 3], [2, 4]),
// );
// console.log(
//   'getCommonElements([1, 2, 3], [2, 1, 17, 19]):',
//   getCommonElements([1, 2, 3], [2, 1, 17, 19]),
// );
// console.log(
//   'getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]):',
//   getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]),
// );
// console.log(
//   'getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]):',
//   getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]),
// );
// console.log(
//   'getCommonElements([1, 2, 3], [10, 20, 30]):',
//   getCommonElements([1, 2, 3], [10, 20, 30]),
// );

// ==========  Задача №9  ==========

// Задание:

// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.
// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// Решение:

// function changeEven(numbers, value) {
//   const newNumbers = [];

//   numbers.forEach(number =>
//     number % 2 !== 0
//       ? newNumbers.push(number)
//       : newNumbers.push(number + value),
//   );

//   return newNumbers;
// }

// console.log(
//   'changeEven([1, 2, 3, 4, 5], 10):',
//   changeEven([1, 2, 3, 4, 5], 10),
// );
// console.log(
//   'changeEven([2, 8, 3, 7, 4, 6], 10):',
//   changeEven([2, 8, 3, 7, 4, 6], 10),
// );
// console.log(
//   'changeEven([17, 24, 68, 31, 42], 100):',
//   changeEven([17, 24, 68, 31, 42], 100),
// );
// console.log(
//   'changeEven([44, 13, 81, 92, 36, 54], 100):',
//   changeEven([44, 13, 81, 92, 36, 54], 100),
// );

// ==========  Задача №10  ==========

// Задание:

// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().

// Решение:

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

// const planetsLengths = planets.map(planet => planet.length);

// console.log('planets:', planets);
// console.log('planets.length:', planets.length);

// ==========  Задача №11  ==========

// Задание:

// Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.

// Решение:

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];

// const titles = books.map(book => book.title);

// console.log('books:', books);
// console.log('titles:', titles);

// ==========  Задача №12  ==========

// Задание:

// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.

// Решение:

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика'],
//   },
// ];

// const genres = books.flatMap(book => book.genres);

// console.log('books:', books);
// console.log('genres:', genres);

// ==========  Задача №13  ==========

// Задание:

// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.

// Решение:

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUserNames = users => {
//   return users.map(user => user.name);
// };

// console.log('getUserNames:', getUserNames(users));

// ==========  Задача №14  ==========

// Задание:

// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив имён пользователей (свойство email) из массива объектов в параметре users.

// Решение:

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUserEmails = users => {
//   return users.map(user => user.email);
// };

// console.log('getUserEmails:', getUserEmails(users));

// ==========  Задача №15  ==========

// Задание:

// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().

// Решение:

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);

// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log('numbers:', numbers);
// console.log('evenNumbers of numbers:', evenNumbers);
// console.log('oddNumbers of numbers:', oddNumbers);

// ==========  Задача №16  ==========

// Задание:

// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

// Решение:

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения'],
//   },
// ];

// const allGenres = books.flatMap(book => book.genres);

// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index,
// );

// console.log('allGenres:', allGenres);
// console.log('uniqueGenres:', uniqueGenres);

// ==========  Задача №17  ==========

// Задание:

// Используя метод filter() дополни код так, чтобы:
//   - В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
//   - В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.

// Решение:

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];

// const MIN_RATING = 8;

// const AUTHOR = 'Бернард Корнуэлл';

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);

// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log('books:', books);
// console.log('MIN_RATING:', MIN_RATING);
// console.log('AUTHOR:', AUTHOR);
// console.log('topRatedBooks > MIN_RATING:', topRatedBooks);
// console.log('booksByAuthor AUTHOR:', booksByAuthor);

// ==========  Задача №18  ==========

// Задание:

// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.

// Решение:

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
// };

// console.log('getUsersWithEyeColor blue:', getUsersWithEyeColor(users, 'blue'));
// console.log(
//   'getUsersWithEyeColor green:',
//   getUsersWithEyeColor(users, 'green'),
// );
// console.log(
//   'getUsersWithEyeColor brown:',
//   getUsersWithEyeColor(users, 'brown'),
// );
// console.log(
//   'getUsersWithEyeColor other colors:',
//   getUsersWithEyeColor(users, 'color'),
// );

// ==========  Задача №19  ==========

// Задание:

// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.

// Решение:

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age >= minAge && maxAge >= user.age);
// };

// console.log('getUsersWithAge from 20 to 30:', getUsersWithAge(users, 20, 30));
// console.log('getUsersWithAge from 30 to 40:', getUsersWithAge(users, 30, 40));
// console.log('getUsersWithAge from 80 to 100:', getUsersWithAge(users, 80, 100));

// ==========  Задача №20  ==========

// Задание:

// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.

// Решение:

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName));
// };

// console.log(
//   'getUsersWithFriend Briana Decker:',
//   getUsersWithFriend(users, 'Briana Decker'),
// );
// console.log(
//   'getUsersWithFriend Goldie Gentry:',
//   getUsersWithFriend(users, 'Goldie Gentry'),
// );
// console.log(
//   'getUsersWithFriend Adrian Cross:',
//   getUsersWithFriend(users, 'Adrian Cross'),
// );

// ==========  Задача №21  ==========
// ==========  Задача №22  ==========
// ==========  Задача №23  ==========
// ==========  Задача №24  ==========
// ==========  Задача №25  ==========
// ==========  Задача №26  ==========
// ==========  Задача №27  ==========
// ==========  Задача №28  ==========
// ==========  Задача №29  ==========
// ==========  Задача №30  ==========
// ==========  Задача №31  ==========
// ==========  Задача №32  ==========
// ==========  Задача №33  ==========
// ==========  Задача №34  ==========
// ==========  Задача №35  ==========
// ==========  Задача №36  ==========
// ==========  Задача №37  ==========
// ==========  Задача №38  ==========
// ==========  Задача №39  ==========
// ==========  Задача №40  ==========
// ==========  Задача №41  ==========
// ==========  Задача №42  ==========
// ==========  Задача №43  ==========
// ==========  Задача №44  ==========
