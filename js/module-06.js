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
// ==========  Задача №12  ==========
// ==========  Задача №13  ==========
// ==========  Задача №14  ==========
// ==========  Задача №15  ==========
// ==========  Задача №16  ==========
// ==========  Задача №17  ==========
// ==========  Задача №18  ==========
// ==========  Задача №19  ==========
// ==========  Задача №20  ==========
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
