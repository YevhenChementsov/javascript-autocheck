// ==========  Задача №1  ==========

// function checkAge(age) {
//   if (age >= 18) {
//     return 'You are an adult';
//   }
//   return 'You are a minor';
// }
// console.log('Age : 20 -', checkAge(20));
// console.log('Age : 8 -', checkAge(8));
// console.log('Age : 14 -', checkAge(14));
// console.log('Age : 38 -', checkAge(38));

// ==========  Задача №2  ==========

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';
// }
// console.log('Password : mangohackzor -', checkPassword('mangohackzor'));
// console.log('Password : polyhax -', checkPassword('polyhax'));
// console.log('Password : jqueryismyjam -', checkPassword('jqueryismyjam'));

// ==========  Задача №3  ==========

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';
// }
// console.log('Storage: available - 100; ordered - 50; -', checkStorage(100, 50));
// console.log(
//   'Storage: available - 100; ordered - 130; -',
//   checkStorage(100, 130),
// );
// console.log('Storage: available - 70; ordered - 0; -', checkStorage(70, 0));
// console.log('Storage: available - 200; ordered - 20; -', checkStorage(200, 20));
// console.log(
//   'Storage: available - 200; ordered - 250; -',
//   checkStorage(200, 250),
// );
// console.log('Storage: available - 150; ordered - 0; -', checkStorage(150, 0));

// ==========  Задача №4  ==========

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// console.log('fruits:', fruits);

// ==========  Задача №5  ==========

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];
// console.log('fruits:', fruits);
// console.log('firstElement:', firstElement);
// console.log('secondElement:', secondElement);
// console.log('lastElement:', lastElement);

// ==========  Задача №6  ==========

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// console.log('fruits:', fruits);
// fruits[1] = 'peach';
// fruits[3] = 'banana';
// console.log('fruits:', fruits);

// ==========  Задача №7  ==========

// const fruits = ['apple', 'peach', 'pear', 'banana'];
// console.log('fruits:', fruits);
// const fruitsArrayLength = fruits.length;
// console.log('fruitsArrayLength:', fruitsArrayLength);

// ==========  Задача №8  ==========

// const fruits = ['apple', 'peach', 'pear', 'banana'];
// console.log('fruits:', fruits);
// const lastElementIndex = fruits.length - 1;
// console.log('lastElementIndex:', lastElementIndex);
// const lastElement = fruits[lastElementIndex];
// console.log('lastElement:', lastElement);

// ==========  Задача №9  ==========

// Вариант 1:
// function getExtremeElements(array) {
//   const lastElementIndex = array.length - 1;
//   const lastElement = array[lastElementIndex];
//   const firstElement = array[0];
//   const arr = [firstElement, lastElement];
//   return arr;
// }
// Вариант 2:
// function getExtremeElements(array) {
//   array = [array[0], array[array.length - 1]];
//   return array;
// }
// console.log(
//   'from Elements([1, 2, 3, 4, 5]) :',
//   getExtremeElements([1, 2, 3, 4, 5]),
// );
// console.log(
//   'from Elements(["Earth", "Mars", "Venus"]) :',
//   getExtremeElements(['Earth', 'Mars', 'Venus']),
// );
// console.log(
//   'from Elements(["apple", "peach", "pear", "banana"]) :',
//   getExtremeElements(['apple', 'peach', 'pear', 'banana']),
// );

// ==========  Задача №10  ==========

// function splitMessage(message, delimeter) {
//   let words;
//   words = message.split(delimeter);
//   return words;
// }
// console.log(
//   'splitMessage("Mango hurries to the train", " ") :',
//   splitMessage('Mango hurries to the train', ' '),
// );
// console.log('splitMessage("Mango", "") :', splitMessage('Mango', ''));
// console.log(
//   'splitMessage("best_for_week", "_") :',
//   splitMessage('best_for_week', '_'),
// );

// ==========  Задача №11  ==========

// function calculateEngravingPrice(message, pricePerWord) {
//   message = message.split(' ').length;
//   let totalPrice = message * pricePerWord;
//   return totalPrice;
// }
// console.log(
//   "calculateEngravingPrice('JavaScript is in my blood', 10):",
//   calculateEngravingPrice('JavaScript is in my blood', 10),
// );
// console.log(
//   "calculateEngravingPrice('JavaScript is in my blood', 20):",
//   calculateEngravingPrice('JavaScript is in my blood', 20),
// );
// console.log(
//   "calculateEngravingPrice('Web-development is creative work', 40):",
//   calculateEngravingPrice('Web-development is creative work', 40),
// );
// console.log(
//   "calculateEngravingPrice('Web-development is creative work', 20):",
//   calculateEngravingPrice('Web-development is creative work', 20),
// );

// ==========  Задача №12  ==========

// function makeStringFromArray(array, delimeter) {
//   let string;
//   string = array.join(delimeter);
//   return string;
// }
// console.log(
//   "makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' '):",
//   makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' '),
// );
// console.log(
//   "makeStringFromArray(['M', 'a', 'n', 'g', 'o'], ''):",
//   makeStringFromArray(['M', 'a', 'n', 'g', 'o'], ''),
// );
// console.log(
//   "makeStringFromArray(['top', 'picks', 'for', 'you'], '_'):",
//   makeStringFromArray(['top', 'picks', 'for', 'you'], '_'),
// );

// ==========  Задача №13  ==========

// function slugify(title) {
//   let slug;
//   slug = title.toLowerCase().split(' ').join('-');
//   return slug;
// }
// console.log(
//   "slugify('Arrays for begginers'):",
//   slugify('Arrays for begginers'),
// );
// console.log(
//   "slugify('Ten secrets of JavaScript'):",
//   slugify('Ten secrets of JavaScript'),
// );
// console.log(
//   "slugify('How to become a JUNIOR developer in TWO WEEKS'):",
//   slugify('How to become a JUNIOR developer in TWO WEEKS'),
// );

// ==========  Задача №14  ==========

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);
// console.log('Все элементы:', fruits);
// console.log('Первые два:', firstTwoEls);
// console.log('Все элементы кроме первого и последнего:', nonExtremeEls);
// console.log('Три последних элемента:', lastThreeEls);

// ==========  Задача №15  ==========

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients);
// console.log('Старые клиенты:', oldClients);
// console.log('Новые клиенты:', newClients);
// console.log('Все клиенты:', allClients);

// ==========  Задача №16  ==========

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   }
//   return newArray;
// }
// console.log(
//   "Массив ['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3 возвращает:",
//   makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3),
// );
// console.log(
//   "Массив ['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4 возвращает:",
//   makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4),
// );
// console.log(
//   "Массив ['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3 возвращает:",
//   makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3),
// );
// console.log(
//   "Массив ['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2 возвращает:",
//   makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2),
// );
// console.log(
//   "Массив ['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4 возвращает:",
//   makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4),
// );
// console.log(
//   "Массив ['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0 возвращает:",
//   makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0),
// );

// ==========  Задача №17  ==========

// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// ==========  Задача №18  ==========

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(
//   'Возвращает сумму всех целых чисел от единицы и до 1 :',
//   calculateTotal(1),
// );
// console.log(
//   'Возвращает сумму всех целых чисел от единицы и до 3 :',
//   calculateTotal(3),
// );
// console.log(
//   'Возвращает сумму всех целых чисел от единицы и до 7 :',
//   calculateTotal(7),
// );
// console.log(
//   'Возвращает сумму всех целых чисел от единицы и до 18 :',
//   calculateTotal(18),
// );
// console.log(
//   'Возвращает сумму всех целых чисел от единицы и до 24 :',
//   calculateTotal(24),
// );

// ==========  Задача №19  ==========

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// ==========  Задача №20  ==========

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }

// ==========  Задача №21  ==========

// function findLongestWord(string) {
//   const word = string.split(' ');
//   let longestWord = word[0];
//   for (let index = 0; index < word.length; index += 1) {
//     if (longestWord.length < word[index].length) {
//       longestWord = word[index];
//     }
//   }
//   return longestWord;
// }
// console.log(
//   'Самое длинное слово в строке "The quick brown fox jumped over the lazy dog" :',
//   findLongestWord('The quick brown fox jumped over the lazy dog'),
// );
// console.log(
//   'Самое длинное слово в строке "Google do a roll" :',
//   findLongestWord('Google do a roll'),
// );
// console.log(
//   'Самое длинное слово в строке "May the force be with you" :',
//   findLongestWord('May the force be with you'),
// );

// ==========  Задача №22  ==========

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   return numbers;
// }

// ==========  Задача №23  ==========

// function filterArray(numbers, value) {
//   const filterNumbers = [];
//   for (const number of numbers) {
//     if (number > value) {
//       filterNumbers.push(number);
//     }
//   }
//   return filterNumbers;
// }

// ==========  Задача №24  ==========

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];
//   return fruits.includes(fruit);
// }

// ==========  Задача №25  ==========

// function getCommonElements(array1, array2) {
//   const newArray = [];
//   for (const element of array1) {
//     if (array2.includes(element)) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// }

// ==========  Задача №26  ==========

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const number of order) {
//     total += number;
//   }
//   return total;
// }

// ==========  Задача №27  ==========

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }

// ==========  Задача №28  ==========

// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// ==========  Задача №29  ==========

// function getEvenNumbers(start, end) {
//   const evenNumbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;
// }

// ==========  Задача №30  ==========

// const start = 6;
// const end = 27;
// let number;
// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// ==========  Задача №31  ==========

// function findNumber(start, end, divisor) {
//   let number;
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

// ==========  Задача №32  ==========

// function includes(array, value) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }
