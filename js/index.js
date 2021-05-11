// ==========  Задача №1  ==========

// const productName = "Droid";
// console.log(productName);
// ("Droid");
// const pricePerItem = 2000;
// console.log(pricePerItem);
// 2000;

// ==========  Задача №2  ==========

// let productName = 'Droid';
// console.log('productName:', productName);
// let pricePerItem = 2000;
// console.log('pricePerItem:', pricePerItem);
// productName = 'Repair droid';
// console.log('productName:', productName);
// pricePerItem = pricePerItem + 1500;
// console.log('pricePerItem:', pricePerItem);

// ==========  Задача №3  ==========

// const topSpeed = 160;
// console.log('topSpeed:', topSpeed);
// const distance = 617.54;
// console.log('distance:', distance);
// const login = 'mango935';
// console.log('login:', login);
// const isOnline = true;
// console.log('isOnline:', isOnline);
// const isAdmin = false;
// console.log('isAdmin:', isAdmin);

// ==========  Задача №4  ==========

// const pricePerItem = 3500;
// console.log('pricePerItem:', pricePerItem);
// const orderedQuantity = 4;
// console.log('orderedQuantity:', orderedQuantity);
// const totalPrice = pricePerItem * orderedQuantity;
// console.log('totalPrice:', totalPrice);

// ==========  Задача №5  ==========

// const productName = 'Droid';
// console.log('productName:', productName);
// const pricePerItem = 3500;
// console.log('pricePerItem:', pricePerItem);
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits.`;
// console.log('message:', message);

// ==========  Задача №6  ==========

// const pricePerDroid = 800;
// console.log('pricePerDroid:', pricePerDroid);
// const orderedQuantity = 6;
// console.log('orderedQuantity:', orderedQuantity);
// const deliveryFee = 50;
// console.log('deliveryFee:', deliveryFee);
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// console.log('totalPrice:', totalPrice);
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log('message:', message);

// ==========  Задача №7  ==========

// function sayHi() {
//   console.log('Hello, this is my first function!');
// }
// sayHi();

// ==========  Задача №8  ==========

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// ==========  Задача №9  ==========

// function add(a, b, c) {
//   return a + b + c;
// }
// add(2, 5, 8);
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// ==========  Задача №10  ==========

// function makeMessage(name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;
// }
// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));

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

// function isNumberInRange(start, end, number) {
//   const isInRange = start <= number && number <= end;

//   return isInRange;
// }

// ==========  Задача №22  ==========

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line

//   return canAccessContent;
// }

// ==========  Задача №23  ==========

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }

// ==========  Задача №24  ==========

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent <= 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent <= 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent <= 5000) {
//     discount = BASE_DISCOUNT;
//   }
//   return discount;
// }

// ==========  Задача №25  ==========

// function checkStorage(available, ordered) {
//   let message;
//   message =
//     ordered < available
//       ? 'The order is accepted, our manager will contact you'
//       : 'Not enough goods in stock!';
//   return message;
// }

// ==========  Задача №26  ==========

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   message =
//     password === 'jqueryismyjam'
//       ? 'Access is allowed'
//       : 'Access denied, wrong password!';
//   return message;
// }

// ==========  Задача №27  ==========

// function getSubscriptionPrice(type) {
//   let price;

//   switch (type) {
//     case 'starter':
//       price = 0;
//       break;

//     case 'professional':
//       price = 20;
//       break;

//     case 'organization':
//       price = 50;
//       break;
//   }
//   return price;
// }

// ==========  Задача №28  ==========

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;
//     case 'jqueryismyjam':
//       message = 'Welcome!';
//       break;
//     default:
//       message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// ==========  Задача №29  ==========

// function getShippingCost(country) {
//   let message;

//   switch (country) {
//     case 'China':
//       message = 'Shipping to China will cost 100 credits';
//       break;

//     case 'Chile':
//       message = 'Shipping to Chile will cost 250 credits';
//       break;

//     case 'Australia':
//       message = 'Shipping to Australia will cost 170 credits';
//       break;

//     case 'Jamaica':
//       message = 'Shipping to Jamaica will cost 120 credits';
//       break;

//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }

//   return message;
// }

// ==========  Задача №30  ==========

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;
//   return message;
// }

// ==========  Задача №31  ==========

// const courseTopic = 'JavaScript essentials';
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // ==========  Задача №32  ==========

// function getSubstring(string, length) {
//   const substring = string.slice(0, length);
//   return substring;
// }

// ==========  Задача №33  ==========

// function formatMessage(message, maxLength) {
//   let result;
//   result =
//     message.length > maxLength ? message.slice(0, maxLength) + '...' : message;
//   return result;
// }

// ==========  Задача №34  ==========

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

// ==========  Задача №35  ==========

// function checkForName(fullName, name) {
//   const result = fullName.includes(name);
//   return result;
// }

// ==========  Задача №36  ==========

// function checkForSpam(message) {
//   let result;

//   message = message.toLowerCase();
//   result = message.includes('spam') || message.includes('sale');

//   return result;
// }
