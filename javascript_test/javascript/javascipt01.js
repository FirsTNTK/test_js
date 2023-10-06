
// 1.
// // แสดงในส่วน console
// console.log('Hello World!');

// // มีการแจ้งเตือน box ออกมา
// alert('Hello World!');

// // มีการเอาข้อความลง HTML ในส่วนของ document
// document.write('Hello World!');


// 2.
// การหาผลบวกของ ตัวแปรมาบวกกัน
// let num1 = 5;
// let num2 = 4;
// let sum = num1 + num2;
// console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + sum);


// //Add Two Numbers Entered by the User
// const num1 = parseInt(prompt('Enter the first number'));
// const num2 = parseInt(prompt('Enter the first number'));
// const sum = num1 + num2;
// console.log(`The sum of  ${num1} and ${num2} is: ${sum}`);



// 3.
// การหาผลรูทของตัวเลข
// let nom1 = prompt('Enter the number : ');
// const result = Math.sqrt(nom1)
// console.log(`The square root of ${nom1} is ${result}`);
// Math.sqrt(number);


// การหาผลรูทของตัวเลขและตัวอักษร
// let num1 = 2.25;
// let num2 = -4;
// let num3 = 'hello';

// const result1 = Math.sqrt(num1);
// const result2 = Math.sqrt(num2);
// const result3 = Math.sqrt(num3);

// console.log(`The squre root of ${num1} is ${result1}`);
// console.log(`The squre root of ${num2} is ${result2}`);
// console.log(`The squre root of ${num3} is ${result3}`);




// 4.
// การถอดรูท 2 หลังจาก คูณ
// const baseValue = prompt('Enter the base of a triangle:');
// const heightValue = prompt('Enter the base of a triangle:');

// const areavalue = (baseValue * heightValue) / 2 ;

// console.log(`The area of the triangle is ${areavalue}`)

// การหา3เหลี่ยม
// const side1 = parseInt(prompt('Enter side'));
// const side2 = parseInt(prompt('Enter side'));
// const side3 = parseInt(prompt('Enter side'));
// const s =  (side1 + side2 + side3 ) / 2;
// const areavalue = Math.sqrt(
//     s * (s - side1) * (s - side2) * (s - side3)
// );
// console.log(`The area of the triangle is ${areavalue}`)


// 5.
// การสลับค่าตัวแปลทั้ง 2
// Example 1: Using a Temporary Variable
// let num1 = prompt('Enter the first of variable:');
// let num2 = prompt('Enter the second of variable:');
// let temp;  // เป็นตัวแปรค่าเปล่าที่ใส่เพิ่อไปรับค่า num1
// temp = num1;
// num1 = num2;
// num2 = temp;
// console.log(`The value of a after swapping: ${num1}`)
// console.log(`The value of a after swapping: ${num2}`)


// Example 2: Using es6(ES2015) Destructuring assignment
// เป็นการสลับค่าในรูปแบบ array จะดูที่ตำแหน่งของมัน
// let a = prompt('Enter the first of variable a: ');
// let b = prompt('Enter the second of variable b: ');
// [ a, b ] = [ b, a];
// console.log(`The value of a after swapping: ${a}`)
// console.log(`The value of a after swapping: ${b}`)


// Example 3: Using Arithmetic Operators

// let a = parseInt(prompt('Enter the first variable pls'))
// let b = parseInt(prompt('Enter the second variable pls'))
// ถ้าใส่ค่า a = 4, b = 2
// a = a + b;       6
// b = a - b;       4
// a = a - b;       4
// console.log(`The value of a after swapping: ${a}`)
// console.log(`The value of a after swapping: ${b}`)


// Example 4: Using Bitwise XOR operator
// let a = prompt('Enter the first variable pls')
// let b = prompt('Enter the second variable pls')
// a = a ^ b
// b = a ^ b
// a = a ^ b
// console.log(`The value of a after swapping: ${a}`)
// console.log(`The value of a after swapping: ${b}`)







//**   6.
// Example: Roots of a Quadratic Equation
// การแก้สมการกำลัง 2 โดยมี if else if มาทำงานด้วย

// let root1, root2;
// let a = prompt('Enter the first number: ');
// let b = prompt('Enter the second number: ');
// let c = prompt('Enter the third number: ');


// let discriminant = b * b - 4 * a * c;

// if (discriminant > 0) {
//     root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`)
// }


// else if (discriminant == 0) {
//     root1 = root2 = -b / (2 * a);
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// else {
//     let realPart = (-b / (2 * a)).toFixed(2);
//     let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

//     console.log(
//         `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
//     );
// }




// 7
// การเปลี่ยนค่าจาก kilo เป็น miles
// const kilometers = prompt('Enter value in kilometers: ')

// const factor = 0.621371

// const miles = kilometers * factor

// console.log(`${kilometers} kilometers is equal to ${miles} miles`)



// 8
//Convert Celsius to Fahrenheit
// const celsius = prompt('Enter a celsius value: ')
// fahrenheit = celsius * 1.8 + 32
// console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`)


// parseInt คือ คำสั่งสำหรับการแปลงชนิดของข้อมูลให้อยู่ในรูปของตัวเลขจำนวนเต็ม (Interger)
// 9
//Generate a Random Number
// 9.1 Get a Random Number
// const num1 = Math.random();
// console.log(num1);

//9.2 Get a Random Number between 1 and 10
// const a = Math.random() * (10-1) + 1;
// console.log(a);

// 9.3  Integer Value between 1 and 10
// const a = Math.floor(Math.random() * (10 - 1)) + 1;
// console.log(a);

// 9.4 Integer Value between Two Numbers (Inclusive)

// const num1 = parseInt(prompt('Enter a min value :'))
// const num2 = parseInt(prompt('Enter a max value :'))

// const a = Math.floor(Math.random() * ( num2 - num1 + 1)) + num1;
// console.log(`Random value between ${num1} and ${num2} is ${a}`)



// 10.
//Check Number Type with if...else if...else
// const number =parseInt(prompt('Enter a number: '))
// if ( number > 0) {
//     console.log('The number is positive')
// }
// else if ( number == 0 ) {
//     console.log('The number is zero')
// }
// else {
//     console.log('The number is negative')
// }

// 10.2
// Check Number Type with nested if...else
// const number = parseInt(prompt('Enter a number: '))
// if (number >= 0) {
//     if (number == 0) {
//         console.log('The number is zero');
//     } else {
//         console.log('The number is positive');
//     }
// } else {
//     console.log('The number is negative');
// }



// 11
// Check if a Number is Odd or Even
// const a = parseInt(prompt('Enter a number: '))

// if (a % 2 == 0) {
//     console.log('The number is even');
// } else {
//     console.log('The number is odd');
// }

// 11.2 Ternary Operator ถือเป็นการใช้งานร่วมกันระหว่าง Operator และ Conditional. มันเป็นเหมือนแบบจำลองของ If-Else Conditional
// Using Ternary Operator
// const a = parseInt(prompt('Enter a number: '))
// const result = (a % 2 == 0 ) ? 'even' : 'odd'
// console.log(`The number is ${result}`);


// 12.
// Find the Largest Among Three Numbers // เอาเงื่อนไขมาช่วยในการตรวจสอบเพื่อหาค่าที่มากที่สุด
// const num1 = parseInt(prompt('Enter first number: '));
// const num2 = parseInt(prompt('Enter second number: '));
// const num3 = parseInt(prompt('Enter third number: '));
// let largest;
// if (num1 >= num2 && num1 >= num3) {
//     largest = num1
// }
// else if (num2 >= num1 && num2 >= num3) {
//     largest = num2
// }
// else {
//     largest = num3;
// }
// console.log(`The Largest number is ${largest}`);

// 12.2
//Using Math.max() คำสั่งหาค่าที่มากที่สุด
// const num1 = parseInt(prompt('Enter first number: '));
// const num2 = parseInt(prompt('Enter second number: '));
// const num3 = parseInt(prompt('Enter third number: '));
// const largest = Math.max(num1,num2,num3);
// console.log(`The largest number is ${largest}`)



// 13.
//Check Prime Number ตรวจจำนวนเฉพาะ
// const number = (parseInt(prompt('Enter a positive number: ')))
// let isPrime = true;
// if (number === 1) {
//     console.log('1 is meither prime nor composite number.');
// }
// else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }
// if (isPrime) {
//     console.log(`${number} is a prime number`)
// } else {
//     console.log(`${number} is a  not prime number`)
// }




// 14.
// Print Prime Numbers โชว์จำนวนเฉพาะออกมา ทั้งหมด
// const nummin = parseInt(prompt('Enter Lower number: '))
// const nummax = parseInt(prompt('Enter higher number: '))
// console.log(`The prime numbers between ${nummin} and ${nummax} are:`)
// for (let i = nummin; i <= nummax; i++) {
//     let flag = 0;
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }
//     if (i > 1 && flag == 0) {
//         console.log(i)
//     }
// }


// 15.
// Find the Factorial of a Number เป็นการหาค่า factorial
// const number = parseInt(prompt('Enter a positive integer: '))
// if ( number < 0) {
//     console.log('Error ! Factorial for negative numbeer does not exist.')
// }
// else if ( number ===0) {
//     console.log(`The factorial of ${number} is 1.`)
// }
// else {
//     let fact = 1;
//     for ( i = 1 ; i <=number; i++) {
//         fact *= i;
//     }
//     console.log(`The factorial of ${number} is ${fact}.`)
// }




// 16.
// Multiplication Table Up to 10 การคูณเลขที่เราใส้เข้าไป1-10
// const number = parseInt(prompt('Enter an integer: '));
// for (let i = 1; i <= 10; i++) {
//     const result = i * number;
//     console.log(`${number} * ${i} = ${result}`);
// }

// 16.2
// Multiplication Table Up to a Range
// const num1 = parseInt(prompt('Enter an integer: '))
// const num2 = parseInt(prompt('Enter an range: '))
// for ( let i = 1; i<= num2 ; i++) {
//     const result = i * num1;
//     console.log(`${num1} * ${num2} = ${result}`)
// }



// 17 ** ไม่เข้าใจครับอันนี้ทำไมถึงได้ค่า 2 อันสุดท้าย
// Print the Fibonacci Sequence
// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }



// 18 ** ไม่่เข้าใจครับ
// Check Armstrong Number of Three Digits
// let sum = 0;
// const number = prompt('Enter a three-digit positive integer: ');

// // create a temporary variable
// let temp = number;
// while (temp > 0) {
//     // finding the one's digit
//     let remainder = temp % 10;

//     sum += remainder * remainder * remainder;

//     // removing last digit from the number
//     temp = parseInt(temp / 10); // convert float into integer
// }
// // check the condition
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }



// 19 ** ไม่เข้าใจครับ
// Armstrong Numbers Between Two Intervals
// program to find Armstrong number between intervals

// take an input
// const lowNumber = parseInt(prompt('Enter a positive low integer value: '));
// const highNumber = parseInt(prompt('Enter a positive high integer value: '));

// console.log ('Armstrong Numbers:');

// // looping through lowNumber to highNumber
// for (let i = lowNumber; i <= highNumber; i++) {

//     // converting number to string
//     let numberOfDigits = i.toString().length;

//     let sum = 0;

//     // create a temporary variable
//     let temp = i;

//     /* loop through a number to find if
//     a number is an Armstrong number */
//     while (temp > 0) {

//         let remainder = temp % 10;
//         sum += remainder ** numberOfDigits;
//         // removing last digit from the number
//         temp = parseInt(temp / 10); // convert float into integer
//     }

//     if (sum == i) {
//         console.log(i);
//     }
// }



// 20
// Program to Make a Simple Calculator
// Example 1: Simple Calculator with if..else if...else
// const operator = prompt('Enter operator ( either +, -, * or / ): ')
// const num1 = parseFloat(prompt('Enter first number: '))
// const num2 = parseFloat(prompt('Enter second number: '))

// let result;

// if ( operator == '+') {
//     result = num1 + num2
// }
// else if ( operator == '-') {
//     result = num1 - num2
// }
// else if ( operator == '*' ) {
//     result = num1 * num2
// }
// else  {
//     result = num1 / num2;
// }
// console.log(`${num1} ${operator} ${num2} = ${result}`)


// Example 2: Simple Calculator with switch
// const operator = prompt('Enter operator: ')
// const num1 = parseFloat(prompt('Enter first number: '))
// const num2 = parseFloat(prompt('Enter second number: '))
// switch (operator) {
//     case '+':
//         result = num1 + num2;
//         console.log(`${num1} ${operator} ${num2} = ${result}`);
//         break;

//     case '-':
//         result = num1 - num2;
//         console.log(`${num1} ${operator} ${num2} = ${result}`);
//         break;

//     case '*':
//         result = num1 * num2;
//         console.log(`${num1} ${operator} ${num2} = ${result}`);
//         break;

//     case '/':
//         result = num1 / num2;
//         console.log(`${num1} ${operator} ${num2} = ${result}`);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;
// }



// 21.
// Find the Sum of Natural Numbers
// Example 1: Sum of Natural Numbers Using for Loop
// const num1 = parseInt(prompt('Enter a positive integer: '))
// let sum = 0;
// for (let i = 1; i <= num1; i++) {
//     sum += i;
// }
// console.log('The sum of natural numbers:', sum)

// Example 2: Sum of Natural Numbers Using while Loop
// const num1 = parseInt(prompt('Enter a positive integer:'))
// let sum = 0, i = 1
// while(i  <= num1) {
//     sum+= i;
//     i++;
// }
// console.log(`The sum of natural numbers: ${sum}`)



// 22. การหาเลขท้ายเหมือนกันมีการตรวจสอบโดยการไป %10
// //Check if the Numbers Have Same Last Digit
// const num1 = parseInt(prompt('Enter a first integer:'))
// const num2 = parseInt(prompt('Enter a second integer:'))
// const num3 = parseInt(prompt('Enter a third integer:'))
// const result1 = num1 % 10;
// const result2 = num2 % 10;
// const result3 = num3 % 10;
// if( result1 == result2 && result1 == result3) {
//     console.log(`${num1} , ${num2} and ${num3} have the same last digit`)
// }
// else {
//     console.log(`${num1} , ${num2} and ${num3} have different last digit`)
// }





// 23.
// Find HCF or GCD
// Example 1: Find HCF using for Loop
// const num1 = parseInt(prompt('Enter a first integer:'))
// const num2 = parseInt(prompt('Enter a second integer:'))
// for( let i = 1; i <= num1, i<=num2; i++) {
//     if( num1 % i == 0 && num2 % i ==0) {
//         hcf = i;
//     }
// }
// console.log(`HCF of ${num1} and ${num2} is ${hcf}`)

//Example 2: HCF using while Loop and if...else
// let num1 = parseInt(prompt('Enter a first integer:'))
// let num2 = parseInt(prompt('Enter a second integer:'))

// while ( num1 != num2) {
//     if(num1 > num2) {
//         num1-=num2;
//     }
//     else {
//         num2 -= num1
//     }
// }
// console.log(`HCF is ${num1}`)




// 24. ไม่ค่อยเข้าใจ %
// Find LCM
//Example 1: LCM Using while Loop and if Statement
// const num1 = parseInt(prompt('Enter a first positive integer:'))
// const num2 = parseInt(prompt('Enter a second positive integer:'))

// let min = (num1 > num2) ? num1:num2;

// while (true) {
//     if(min % num1 == 0 && min % num2 == 0) {
//         console.log(`The LCM of ${num1} and ${num2} is ${min}`)
//         break;
//     }
//     min++
// }

//Example 2: LCM Calculation Using HCF
// const num1 = parseInt(prompt('Enter a first positive integer:'))
// const num2 = parseInt(prompt('Enter a second positive integer:'))

// for(let i = 1; i <= num1 && i <= num2; i++) {
//     if(num1 % i == 0 && num2 % i == 0) {
//         hcf = i;
//     }
// }
// let lcm = (num1 * num2) / hcf;
// console.log(`The LCM of ${num1} and ${num2} is ${lcm}`)




// 25.
// Example: Factors of Positive Number หารลงตัวไม่มีเศษ
// const num1 = parseInt(prompt('Enter a positive number: '))

// console.log(`The factors of ${num1} is:`)

// for ( let i = 1; i <=num1; i++) {
//     if(num1 % i == 0) {
//         console.log(i)
//     }
// }



// 26. ไม่ค่อยเข้าใจ อันนี้คือ function ซ้อน function หรอ
// Example: Sum of Natural Numbers Using Recursion
// function sum(num) {
//     if (num > 0) {
//         return num + sum(num - 1)
//     }
//     else {
//         return num;
//     }
// }
// const number = parseInt(prompt('Enter a positive integer: '))
// let result = sum(number)
// console.log(`The sum is ${result}`)


// 27.
// Example: Program to Guess a Number การสุ่มเลขจาก 1-10 โดยกดทีละเลขถ้าตรงกันจะแสดงข้อความด้านล่าง
// function guessnumber() {
//     const random = Math.floor(Math.random() * 10) + 1;
//     let num = parseInt(prompt('Guess a number from 1 to 10:'))
//     while (num !== random) {
//         num = parseInt(prompt('Guess a number from 1 to 10:'));
//     }
//     if (num == random) {
//         console.log('You guessed the correct number')
//     }
// }
// guessnumber();


// 28. ไม่่เข้าใจบางส่วน
// Shuffle Deck of Cards
// const card = ['Bobo','Kaka','Tata','Jaja'];
// const value = [
//     'Ace',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '10',
//     'Jack',
//     'Queen',
//     'King',
// ];

// let deck = [];

// for ( let i = 1; i < card.length; i++) {
//     for( let x = 0; x < value.length; x++) {
//         let cards = { Value: value[x], Card: card[i] };
//         deck.push(cards)
//     }
// }
// // ไม่่เข้าใจส่วนนี้ - 1
// for ( let i = deck.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * i);
//     let temp = deck[i];
//     deck[i] = deck[j]
//     deck[j] = temp;
// }
// console.log('The first five cards are:');
// for ( let i = 0; i < 5; i++) {
//     console.log(`${deck[i].Value} of ${deck[i].Card}`)
// }



// 29.
// Example: Fibonacci Sequence Upto nth Term using Recursion
// function fibonacci(num) {
//     if (num < 2) {
//         return num;
//     }
//     else {
//         return fibonacci(num - 1) + fibonacci(num - 2);
//     }
// }
// const nTerms = prompt('Enter the number of terms: ')

// if (nTerms <= 0) {
//     console.log('Enter a positive integer.')
// }
// else {
//     for (let i = 0; i < nTerms; i++) {
//         console.log(fibonacci(i))
//     }
// }


// 30.
//  Find Factorial Using Recursion
// function factorial(num) {
//     if (num == 0) {
//         return 1;
//     }
//     else {
//         return num * factorial(num - 1);
//     }
// }
// const num = prompt('Enter a positive Number: ')
// if (num >= 0) {
//     const result = factorial(num)
//     console.log(`The factorial of ${num} is ${result}`)
// }
// else {
//     console.log('Enter a positive number')
// }



// 31.
// Convert Decimal to Binary




// 32.
// Example 1: ASCII Value of Character Using charCodeAt()
// ASCII stands for American Standard Code for Information Interchange.
// const string = prompt('Enter a Charater:')
// const result = string.charCodeAt(0);
// console.log(`The ASII value is: ${result}`)

// Example 2: ASCII Value of Character Using codePointAt()
// const string = prompt('Enter a character: ');
// const result = string.codePointAt(0);
// console.log(`The ASCII value is: ${result}`);


// 33.
// Check Whether a String is Palindrome or Not
// function Palindrome(string) {
//     const len = string.length;

//     for (let i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]) {
//             console.log('It is not palindrome')
//         }
//         else {
//             console.log('It is palindrome')
//         }
//     }
// }
// const string = prompt('Enter a string')
// const result = Palindrome(string);

// Example 2: Check Palindrome using built-in Functions
// function palindrome(string) {
//     const arrayValues = string.split('');
//     const reverseArrayValues = arrayValues.reverse();
//     const reverseString = reverseArrayValues.join('');
//     if (string == reverseString) {
//         console.log('It is palindrome')
//     }
//     else {
//         console.log('It is not palindrome')
//     }
// }
// const string = prompt('Enter a string')
// palindrome(string);

// เขียนแบบย่อ
// const reverseString = string.split('').reverse().join('');



// 34.
//Example: Sort Words in Alphabetical Order เรียงคำใหม่จากที่ส่งมา
// const string = prompt('Enter a sentence: ')
// const words = string.split(' '); //เป็นการบอกว่าการเว้นช่องว่างคือการแยกออกมาเป็นอีกอันใน array
// words.sort();
// console.log('The sorted words are: ')
// for (const element of words) {
//     console.log(element)
// }


// 35.
// Example: Replace First Occurrence of a Character in a String
// const string = 'Mr Red has a car red house and a red car red';
// const newText = string.replace('red','blue');
// console.log(newText) การเอา string มาทับมันจะทับตัวแรกที่มันเจอ

// Example 2: Replace Character of a String Using RegEx
// const string = 'Mr Red has a car red house and a red car red';
// const rgex = /red/g;   // เป็นการสั่งแบบ global เมื่อเจอตัวที่ชื่อว่า red ให้ทับด้วยตัวที่จะใส่แทน
// const newText = string.replace(rgex, 'blue')             คำสั่งทับพร้อม ข้อความที่จะใส่แทน
// console.log(newText)



// 36.
// Reverse a String
// Example 1: Reverse a String Using for Loop การใช้ for loop ในการกลับด้านตัวอักษร
// function reverseString(string) {
//     let newText = "";
//     for ( let i = string.length - 1; i >= 0; i--) {
//         newText += string[i];
//     }
//     return newText;
// }
// const string = prompt('Entr a string : ')
// const result = reverseString(string)
// console.log(result)

// Example 2: Reverse a String Using built-in Methods การเขียนเป็นชุดฟังชั่นในการกลับตัวอักษร
// function reverseString(str) {
//     const arrayStrings = str.split('')
//     const reverseArray = arrayStrings.reverse()
//     const joinArray = reverseArray.join('')
//     return joinArray;
// }
// const string = prompt('Enter a string')
// const result = reverseString(string)
// console.log(result)



// 37.
// Create Objects in Different Ways
// Example 1: Using object literal

// const person = {
//     name: 'Jhon',
//     age: 20,
//     hobbies: ['reading', 'game', 'coding'],
//     greet: function () {
//         console.log('Hello everyone');
//     },
//     score: {
//         maths: 90,
//         science: 80
//     }
// }
// console.log(typeof person);
// console.log(person.name)
// console.log(person.age)
// console.log(person.hobbies[0])
// person.greet()
// console.log(person.score.maths)

// Example 2: Create an Object using Instance of Object Directly
// const person = new Object({
//     name: 'Jhon',
//     age: 20,
//     hobbies: ['reading', 'game', 'coding'],
//     greet: function () {
//         console.log('Hello everyone');
//     },
//     score: {
//         maths: 90,
//         science: 80
//     }
// })
// console.log(typeof person);
// console.log(person.name)
// console.log(person.age)
// console.log(person.hobbies[0])
// person.greet()
// console.log(person.score.maths)

// Example 3: Create an object using Constructor Function
// function Person() {
//     this.name = 'jhon',
//         this.age = 20,
//         this.hobbies = ['reading', 'game', 'coding'],
//         this.greet = function () {
//             console.log('Hello everyone')
//         },
//         this.score = {
//             maths: 90,
//             science: 80
//         }
// }
// const person = new Person;  เป็นการใช้ key word ในการสร้าง objectขึ้นมาใหม่จาก Person ไปใส่ตัวแปร person
// console.log(typeof person);
// console.log(person.name)
// console.log(person.age)
// console.log(person.hobbies[0])
// person.greet()
// console.log(person.score.maths)




// 38. ไม่เข้าใจเลย
// Check the Number of Occurrences of a Character in the String





// 39.
// Convert the First Letter of a String into UpperCase
// Example 1: Convert First letter to UpperCase
// function capitalizeFirstletter(str) {
//     const captalized = str.charAt(0).toUpperCase() + str.slice(1); ในบรรทัดนี้จะได้ตัวอักษรตัวแรกเปลี่ยนเป็นตัวใหญ่ และ ร่วมกับประโยคที่เหลือ
//     return captalized;
// }
// const string = prompt('Enter a string; ')
// const result = capitalizeFirstletter(string)
// console.log(result)


// Example 2: Convert First letter to UpperCase using Regex
// function capitalizeFirstletter(str) {
//     const captalized = str.replace(/^./, str[0].toUpperCase()); //The regex pattern is /^./ matches the first character of a string.
//     return captalized;
// }
// const string = prompt('Enter a string; ')
// const result = capitalizeFirstletter(string)
// console.log(result)


// 40. ไม่เข้าใจในส่วนนี้
// Count the Number of Vowels in a String เป็นการเช็คตัวอักษร
// Example 1: Count the Number of Vowels Using Regex
// function countVowel(str) {
//     const count = str.match(/[aeiou]/gi).length;

//     return count;
// }
// const string = prompt('Enter a string')
// const result = countVowel(string)
// console.log(result)

// Example 2: Count the Number of Vowels Using for Loop
// const vowels = ['a', 'e', 'i', 'o', 'u']
// function countVowel(str) {
//     let count = 0;

//     for (let letter of str.toLowerCase()) {
//         if (vowels.includes(letter)) {
//             count++;
//         }
//     }
//     return count;
// }
// const string = prompt('Enter a string')
// const result = countVowel(string)
// console.log(result)


// 41.
// Remove a Property from an Object
// Example: Remove a Property From an Object การเอา key หรือ Property ออกจาก object
// const student = {
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'gameing', 'codeing'],
//     greet: function () {
//         console.log('Hi everyone')
//     },
//     score: {
//         maths: 90,
//         science: 80
//     }
// }
// delete student.greet
// delete student['score']
// console.log(student);


// 42. การตรวจสอบความถูกต้องของตัวอักษร
// Check Whether a String Starts and Ends With Certain Characters
// function checkString(str) {
//     if (str.startsWith('S') && str.endsWith('G')) {
//         console.log('The string starts with S and ends with G');
//     }
//     else if (str.startsWith('S')) {
//         console.log('The string starts with S but does not end with G')
//     }
//     else if (str.endsWith('G')) {
//         console.log('The string starts does not with S but end with G')
//     }
//     else {
//         console.log('The string does not start with S and does not end with G');
//     }
// }
// const string = prompt('Enter a string');
// checkString(string)

// Example 2: Check The String Using Regex เป็นการเขียนในรูปแบบ regex
// function checkString(str) {
//     if (/^S/i.test(str) && /G$/i.test(str)) {
//         console.log('The string starts with S and ends with G');
//     }
//     else if (/^S/i.test(str)) {
//         console.log('The string starts with S but does not end with G')
//     }
//     else if (/G$/i.test(str)) {
//         console.log('The string starts does not with S but end with G')
//     }
//     else {
//         console.log('The string does not start with S and does not end with G');
//     }
// }
// for (let i = 0; i < 3; i++) {
//     const string = prompt('Enter a string');
//     checkString(string)
// }



// 43.
// Check if a Key Exists in an Object
// Example 1: Check if Key Exists in Object Using in Operator
// const person = {
//     name:'Jhon',
//     age: 20,
//     age: 23
// }
// const checkkey = 'name' in person
// if(checkkey) {
//     console.log('The key exists')
// }
// else {
//     console.log('The key does not exist.')
// }

// Example 2: Check if Key Exists in Object Using hasOwnProperty()
// const person = {
//     name: 'John',
//     age: 20,
//     id: 2
// }
// const checkkey = person.hasOwnProperty('name')

// if (checkkey) {
//     console.log('The key exists')
// }
// else {
//     console.log('The key does not exist.')
// }




// 44.
// Clone a JS Object
// Example 1. Clone the Object Using Object.assign()
// const person = {
//     name: 'Jhon',
//     age: 21,
// }
// const cloneobject = Object.assign({}, person); ค่าว่าง {} เป็นอาร์กิวเมนต์แรกช่วยให้แน่ใจว่าคุณจะไม่เปลี่ยนออบเจ็กต์ต้นฉบับ
// console.log(cloneobject)
// cloneobject.name = 'Pete';
// console.log(cloneobject.name);
// console.log(person.name)

// Example 2: Clone the Object Using Spread Syntax เขียนโดยการ spread เข้าไป
// const person = {
//     name: 'John',
//     age: 20,
// }
// const cloneObject = {...person}
// console.log(cloneObject)
// cloneObject.name = 'Pepe'
// console.log(cloneObject.name)
// console.log(person.name)

// Example 3: Clone the Object Using JSON.parse() JSON.parse() only works with Number and String object literal. It does not work with an object literal with function or symbol properties.
// const person = {
//     name: 'Baba',
//     age: 22
// }
// const cloneObject = JSON.parse(JSON.stringify(person))
// console.log(cloneObject)
// cloneObject.name = 'Bobo'
// console.log(cloneObject.name)
// console.log(person.name)




// 45.
// Loop Through an Object
// const student = {
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
// };
// for (let key in student) {
//     let value;
//     value = student[key] ค่าที่ได้จาก student[key] จะถูกกำหนดให้กับตัวแปร value ในแต่ละรอบของลูป.
//     console.log(key + '-' + value)
// }

// Example 2: Loop Through Object Using Object.entries and for...of
// const student = {
//     name: 'John',
//     age: 22,
//     hobbies: ['reading', 'games', 'coding'],
// };
// for(let [key,value] of Object.entries(student)) {   Object.entries() วิธีการส่งกลับอาร์เรย์ของคู่คีย์/ค่าของวัตถุที่กำหนด for...of loop ใช้เพื่อวนซ้ำอาร์เรย์
//     console.log(key + '-' + value)
// }



// 46.
//  Merge Property of Two Objects
// Example 1: Merge Property of Two Objects Using Object.assign()
// const obj1 = {
//     name:'Zara',
//     age:22,
// }
// const obj2 = {
//     gender: 'female'
// }
// const newobj = Object.assign(obj1,obj2);  คำสั่งรวม 2 Object.assign(obj1,obj2) เข้าด้วยกัน
// console.log(newobj)

// Example 2: Merge Property of Two Objects Using Spread Operator
// const obj1 = {
//     name: 'Bara',
//     age: 22,
// }
// const obj2 = {
//     gender: 'female'
// }
// const newobj = {...obj1,...obj2}
// console.log(newobj)




// 47.
// Count the Number of Keys/Properties in an Object
// Example 1: Count the Number of Key in an Object Using for...in
// const object = {
//     name: 'Zara',
//     age: 22,
// }
// let count = 0;
// for (let obj in object) {
//     ++count;
// }
// console.log(count)

// Example 2: Count the Number of Key in an Object Using Object.key()
// const object = {
//     name: 'Zara',
//     age: 22,
// }
// const result = Object.keys(object).length;          Object.keys เป็นชุดคำสั่งดเก็บค่าkey ใน object .length เพื่อบอกจำนวนใน array
// console.log(result)




// 48.
// Add Key/Value Pair to an Object
// Example 1: Add Key/Value Pair to an Object Using Dot Notation
// const person = {
//     name: 'Monica',
//     age: 22,
//     gender: 'female'
// }
// person.height = 5.4
// console.log(person)

// Example 2: Add Key/Value Pair to an Object Using Square Bracket Notation
// const person = {
//     name: 'Monica',
//     age: 22,
//     gender: 'female'
// }
// person['height'] = 5.4
// console.log(person)



// 49.
// Replace All Occurrences of a String
// const string = 'Mr Red has a red house and a red car';
// const regex = /red/gi
// const newText = string.replace(regex,'blue')
// console.log(newText)

// Example 2: Replace All Occurrence of String Using built-in Method
// const string = 'Mr red has a red house and a red car';
// const result = string.split('red').join('yellow');
// console.log(result)




// 50.
// Create Multiline Strings
//Example 1: Create Multiline Strings Using +
// const message = 'Hahah' + ' ' + 'bobo' + ' ' + 'putanginamo';
// console.log(message)

// Example 2: Create Multiline Strings Using \
// const message = ' Bobo\n \Kaka\n \Tata';
// console.log(message)

// Example 3: Create Multiline Strings Using Template Literal
// const message = `Haha bobo putang`
// console.log(message)


// 51. ข้ามไปก่อน
//  Format Numbers as Currency Strings


// 52.
// Generate Random String
// Example 1: Generate Random Strings
// const characterRandom = 'AFAWEMFPAWFGNGAFNMAWKAWFWFPOG'
// function randomString(length) {
//     let result = ' ';
//     const randoms = characterRandom.length;
//     for ( let i = 0; i < length; i++) {
//         result += characterRandom.charAt(Math.floor(Math.random() * randoms))
//     }
//     return result;
// }
// console.log(randomString(10))

// Example 2: Generate Random Strings Using Built-in Methods
// const result = Math.random().toString(36).substring(2,7); ต่อมา .substring(2, 7) ถูกใช้เพื่อเลือกสตริงที่สร้างขึ้นมา โดยเริ่มต้นจากตัวอักษรที่ตำแหน่งที่ 2 และสร้างสตริงยาว 5 ตัวอักษร (นับจากตำแหน่งที่ 2) ซึ่งเป็นที่มาของ 5 ตัวอักษรที่คุณได้รับใน result.
// console.log(result)



// 53.
// Check if a String Starts With Another String
// Example 1: Using startsWith()
// const num1 = 'hello'
// const num2 = 'he'

// if ( num1.startsWith(num2)) {
//     console.log('The string start with " he ".')
// }
// else {
//     console.warn('The string does not starts with "he"');
// }

// Example 2: Using lastIndexOf() ไม่เข้าใจ 0 นี่คือ false ใช่มั้ย
// const string = 'hello world';

// const toCheckString = 'he';

// let result = string.lastIndexOf(toCheckString, 0) === 0;
// if(result) {
//     console.warn('The string starts with "he".');
// }
// else {
//     console.warn(`The string does not starts with "he".`);
// }

// Example 3: Using RegEx
// const string = 'hello world'
// const regex = /^he/;

// let result = regex.test(string)
// if (result) {
//     console.warn('The string starts with "he".');
// }
// else {
//     console.warn(`The string does not starts with "he".`);
// }


// 54.
// Trim a String
// const string = '    Hello     '
// // const result = string.trim();
// console.log(result)

//Example 2: Trim a String Using RegEx
// function trimString(x) {
//     let trimValue = x.replace(/^\s+|\s+$/g,'');    /^\s+|\s+$/g checks for whitespace at the beginning and end of the string.
//     return trimValue;
// }
// const result = trimString('    Hello world    ');
// console.log(result);+

// 55.
// Example 1: Convert Object to String Using JSON.stringify()
// const person = {
//     name: 'Kung',
//     age: 50,
//     gender: 'Woman'
// }
// let result = JSON.stringify(person)
// console.log(result)
// console.log(typeof result) บอกประเภทของชุดข้อมูล object

// Example 2: Convert Object to String Using String()
// const person = {
//     name: 'first',
//     age: 24,
//     gender: 'Male'
// }
// const result1 = String(person)
// const result2 = String(person['name'])
// console.log(result1)
// console.log(result2)
// console.log(typeof result1)


// 56.
// Check Whether a String Contains a Substring
// Example 1: Check String with includes()
// const str = prompt('Enter a string: ')
// const check = prompt('Enter a string that you wan to check:')

// if (str.includes(check)) {             // The includes() method is used with the if...else statement to check whether a string contains the characters of a specified string.
//     console.log(`The string contain ${check}`)
// }
// else {
//     console.log(`The string does not contain ${check}`)
// }

// Example 2: Check String with indexOf() The indexOf() method is case sensitive.
// const str = prompt('Enter a string: ')
// const check = prompt('Enter a string that you wan to check:')
// if (str.indexOf(check) !== -1) { // การตรวจสอบเท่ากับ -1 เป็นวิธีที่ใช้กันอย่างแพร่หลายใน JavaScript เมื่อคุณต้องการทราบว่าค่าหรือสตริงใดๆ ไม่พบในสตริงหรืออาเรย์.นี่คือเหตุผลที่ใช้ !== -1:
//     console.log(`The string ${check}`)
// }
// else {
//     console.log(`The string dose not a ${check}`)
// }


// 57.
// Compare Two Strings
// Example 1: Using toUpperCase()
// const string = 'Javascript Programing'
// const string2 = 'javascript programing'
// let result = string.toUpperCase() === string2.toUpperCase();      // toUpperCase เป็นการแปลงทุกตัวอักษรให้เป็นพิมใหญ่
// if (result) {
//     console.log('The strings are similar.')
// }
// else {
//     console.log('The strings are not similar.');
// }

// Example 2: JS String Comparison Using RegEx
// const string = 'Javascript Programing'
// const string2 = 'javascript programing'
// const pattern = new RegExp(string, 'gi');   // gi จะไม่คำนึงถึงตัวเล็กตัวใหญ่
// const result = pattern.test(string2)
// if (result) {
//     console.log('The strings are similar.');
// } else {
//     console.log('The strings are not similar.');
// }

// Example 3: Using localeCompare()
// const string1 = 'JavaScript Program';
// const string2 = 'javascript program';
// const result = string1.localeCompare(string2, undefined, { sensitivity: 'base' });   // ในบรรทัดนี้ undefined ที่ปรากฏในพารามิเตอร์ที่สองของ localeCompare() ใช้เพื่อระบุว่าไม่มีการระบุ locales หรือภูมิภาคใด ๆ ในการทำเปรียบเทียบ.
// { sensitivity: 'base' } เป็น option เพื่อไม่ให้สนใจขนาดตัวอักษร
// if(result == 0) {
//     console.log('The strings are similar.');
// } else {
//     console.log('The strings are not similar.');
// }




// 58.
// Encode a String to Base64



// 59.
// Example 1: Replace All Instances Of a Character Using Regex
// Replace all Instances of a Character in a String
// const string = 'Learning JavaScript Program'
// const result =  string.replace(/a/g, "A") // a และ g คำสั่งแทนตัวอักษร
// console.log(result)

// Example 2: Replace All Instances Of Character Using Built-in Methods
// const string = 'Learning JavaScript Program'
// const spritstring =  string.split('a')  // แยก a ออกมาจาก string และส่งค่ากลับไปให้ spritstring ["Le", "rning J", "v", "Script Progr", "m"]
// const result = spritstring.join('A')  // และส่งค่า A ตัวใหญ่กลับไปแทนที่ใน array
// console.log(result)



// 60.
// Replace All Line Breaks with <br>
// Example 1: Replace All Line Breaks Using RegEx
// const string = `I am Learning JavaScript.
// JavaScript is fun.
// JavaScript is easy.`;
// const result = string.replace(/(\r\n|\r|\n)/g, '<br>');  // The pattern /(\r\n|\r|\n)/ checks for line breaks.
// console.log(result);

// Example 2: Replace All Line Breaks Using Built-in Methods
// const string = `I am Learning JavaScript.
// // JavaScript is fun.
// // JavaScript is easy.`;
// const result = string.split('\n').join('<br>') // เราทำการ split แยกออกเป็น array โดยจากการแยกบรรทัด และ ส่วนที่แยกนั้นเอา join ใส่กลับเข้าไป
// console.log(result)



// 61.
// Example : Display Date and Time
// const date = new Date(2017, 2, 12, 9, 25, 30);
// const newDate = date.toDateString();
// const time = date.toLocaleTimeString();
// console.log(newDate)
// console.log(time)


// 62.
// Check Leap Year



// 63.
// Format the Date
// let currentDate = new Date();

// let day = currentDate.getDate();

// let month = currentDate.getMonth() + 1;    เพราะมันจะเริ่มต้นที่ 0 เลยต้องบวก 1

// let year = currentDate.getFullYear()

// // if (day < 10) {
// //     day = '0' + day;
// // }

// // if (month < 10) {
// //     month = '0' + month;
// // }    ส่วนนี้ไปเพิ่มเลข 0 ในส่วน format ของวันเวลาปี

// const formattedDate1 = month + '/' + day + '/' + year;
// console.log(formattedDate1);

// const formattedDate2 = month + '-' + day + '-' + year;
// console.log(formattedDate2);

// const formattedDate3 = day + '-' + month + '-' + year;
// console.log(formattedDate3);

// const formattedDate4 = day + '/' + month + '/' + year;
// console.log(formattedDate4);



// 64.
//  Display Current Date
// Example : Display Current Date
// const date = new Date();
// const n = date.toDateString();
// const time = date.toLocaleTimeString();
// console.log('Date: ' + n)
// console.log('Time: ' + time)




// 65.
// Compare The Value of Two Dates
// Example: Compare Value of Two Dates
// const d1 = new Date();
// const d2 = new Date();

// const compare1 = d1 > d2
// console.log(compare1)

// const compare2 = d1 < d2
// console.log(compare2)

// const compare3 = d1 <= d2
// console.log(compare3)

// const compare4 = d1 >= d2
// console.log(compare4)

// const compare5 = d1.getTime() !== d2.getTime()
// console.log(compare5)

// const compare6 = d1.getTime() === d2.getTime()
// console.log(compare6)



// 66.
// Create Countdown Timer




// 67.
// Remove Specific Item From an Array
// Example 1: Using For Loop
// function removeArray (array, n) {
//     const newArray = [];


//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== n) {
//             newArray.push(array[i])
//         }
//     }
//     return newArray;
// }

// const result = removeArray([1, 2, 3 , 4 , 5], 2);   // สอดคล้องกับอันนี้ array[i] !== n
// console.log(result)

// Example 2: Using Array.splice()
// function removeItemFromArray(array, n) {
//     const index = array.indexOf(n)  // const index = array.indexOf(n);: ฟังก์ชัน indexOf() ถูกใช้เพื่อค้นหาดัชนี (index) ของค่า n ในอาร์เรย์ array. ถ้าค่า n ไม่มีอยู่ในอาร์เรย์ array ฟังก์ชันนี้จะคืนค่า -1 แต่ถ้าพบค่า n ในอาร์เรย์ array จะคืนดัชนีของค่า n ในอาร์เรย์.
//     if (index > -1) {
//         array.splice(index, 1)
//     }
//     return array;
// }
// const result = removeItemFromArray([1, 2, 3, 4, 5], 2)
// console.log(result)



// 68.
// Check if An Array Contains a Specified Value
// Example 1: Check Array Using includes()
// const array = ['you', 'will', 'learn', 'javascript'];
// const hasvalue = array.includes('javascript');   // The includes() method returns true if the value exists in the array.

// if (hasvalue) {
//     console.log('Array contains a value')
// }
// else {
//     console.log('Array does not contain a value')
// }

// Note: Both includes() and indexOf() are case sensitive. Hence, J and j are different.

// Example 2: Check Array Using indexOf()
// const array = ['you', 'will', 'learn', 'javascript'];
// const hasvalue = array.indexOf('javascript') !== -1;   // ถ้าไม่มี javascript อยู่ใน array จะส่งค่ากลับมาเป็น -1 เลยตั้งเงื่อนไขว่าต้องไม่เท่ากับ -1
// if (hasvalue) {
//     console.log('Array contains a value')
// }
// else {
//     console.log('Array does not contain a value')
// }



// 69.
// Insert Item in an Array
// Example 1: Add Item to Array Using splice()
// function insertArray () {
//     let array = [1,2,3,4,5,6]
//     let index = 3;
//     let value = 8

//     array.splice(index,0,value);  // index คือตำแหน่งต้องการจะแทรกโดยกำนหดค่าไว้แล้ว 0 คือไม่มีการลบออก value คือค่าที่จะแทรกเข้าไป
//     console.log(array)
// }
// insertArray();                    // เรียกใช้ฟังชั่น


// Example 2: Add Item to Array Using for Loop       // ไม่ค่อยเข้าใจ
// function insertArrayLoop() {
//     let array = [1, 2, 3, 4, 5]
//     let index = 1
//     let value = 9

//     for (let i = array.length; i > index; i--) {
//         array[i] = array[i-1]
//     }
//     array[index] = value;
//     console.log(array)
// }
// insertArrayLoop();



// 70.
// Append an Object to An Array
// Example 1: Append Object to Array Using push()
// function appendArray(arr, obj) {

//     arr.push(obj)
//     console.log(arr)

// }
// let array = [1, 2, 3]
// let object = {
//     x: 12,
//     y: 8
// }
// appendArray(array,object)

//Example 2: Append Object to Array Using splice()
// function insertObject(arr,obj) {
//     let index = arr.length;
//     arr.splice(index,0,object)
//     console.log(arr)
// }
// let array = [1, 2, 3]
// let object = {
//     x: 12,
//     y: 8
// }
// insertObject(array,object);

//Example 3: Append Object Using Spread Operator
// function insertArray(arr,obj) {
//     arr = [...arr,obj]
//     console.log(arr)
// }
// let array = [1, 2, 3]
// let object = {x: 13,y: 8}
// insertArray(array,object);


// 71.
// Check if An Object is An Array
// Example: Check Array Using Array.isArray()   // การเช็ค array
// function checkArray(arr) {
//     const result = Array.isArray(arr);
//     if ( result ) {
//         console.log(`${arr} is an array.`)
//     }
//     else {
//         console.log(`${arr} is not an array.`)
//     }
// }
// let array = [1,2,3,4]
// checkArray(array)




// 72.
// Empty an Array
// Example 1: Empty Array by Substituting New Array
// function emptyArray(arr) {
//     arr = [];
//     return arr;
// }
// const array = [1, 2, 3]
// console.log(array)
// const result = emptyArray(array);
// console.log(result)


// Example 2: Empty Array Using splice()
// function arraySplice (arr) {
//     arr.splice(0,arr.length)
//     return arr;
// }
// const array = [1,2,3]
// console.log(array)
// const result = arraySplice(array)
// console.log(result)


// Example 3: Empty Array by Setting Length 0
// function arrayLe(arr) {
//     arr.length = 0            // When setting array.length to 0, all the elements of the array are removed.
//     return arr;
// }
// const array = [1,2,3]
// console.log(array)
// const result = arrayLe(array)
// console.log(result)




// 73
// Add Element to Start of an Array
// Example 1: Add Element to Array Using unshift()
// function arrayunshift(arr) {
//     arr.unshift(4);
//     console.log(arr)
// }
// let array = [ 1,2,3]
// arrayunshift(array)


// Example 2: Add Element to Array Using splice()
// function arrayAdd(arr) {
//     arr.splice(0,0,4)
//     console.log(arr)
// }
// let array = [1,2,3,5]
// arrayAdd(array)

// Example 3: Add Element to Array Using Spread Operator
// function arraySpred(arr) {
//     arr = [4,...arr]
//     console.log(arr)
// }
// let array = [1,2,3]
// arraySpred(array)


// Example 4: Add Element to Array Using concat()
// function arrayConcat(arr) {
//     arr = [4].concat(arr)
//     console.log(arr)
// }
// let array = [1,2,3]
// arrayConcat(array)




// 74.
//  Remove Duplicates From Array
// Example 1: Using indexOf() and push()
// function removeArray(arr) {
//     uniqueArr = [];
//     for (let i of arr) {
//         if (uniqueArr.indexOf(i) === -1) {
//             uniqueArr.push(i);
//         }
//     }
//     console.log(uniqueArr)
// }
// let array = [1,2,3,4,2,3]
// removeArray(array)

//Example 2: Using Set
// function arraySet(arr) {
//     let uniqueArr = [...new Set(arr)]  //ถ้าคุณเอา ... (spread operator) ออก และเขียนแค่ let uniqueArr = new Set(arr) อาจจะไม่เห็นข้อมูลใน object เพราะว่า Set ไม่ใช่อาร์เรย์
//     console.log(uniqueArr)
// }
// let array = [1,2,3,4,5,2,3]
// arraySet(array)




// 75.
// Merge Two Arrays and Remove Duplicate Items
// Example 1: Using concat() and for Loop
// function getUniqueAfterMerge(arr1, arr2) {
//     let arr = arr1.concat(arr2);    // เอา พารามิตเต้อของ array มารวมกันโดยใช้ concat
//     let uniArray = [];              // สร้าง ตัวแปรมารับ array เปล่าไว้

//     for (let i of arr) {                            // และให้ใช้ตัวแปร i วนลูป arr เข้าไป
//         if (uniArray.indexOf(i) === -1) {           // ถ้าไม่มี element อยู่ใน array จะส่งกลับมา -1
//             uniArray.push(i);                       // และ push ข้อมูลเข้า uniarray
//         }
//     }
//     console.log(uniArray)
// }
// let array1 = [1,2,3,4]
// let array2 = [2,3,5]
// getUniqueAfterMerge(array1, array2)

// Example 2: Using Spread Syntax and Set
// function arraySet(arr1,arr2) {
//     let arr = [...arr1, ...arr2]
//     let uniqueArr = [...new Set(arr)]
//     console.log(uniqueArr)
// }
// let array1 = [1,2,3,4]
// let array2 = [2,3,5]
// arraySet(array1, array2)



// 76.   พารมิเต้อ a และ b คือการสร้างตัวแปรมารับให้เกิดการเปรียบเทียบในชุดข้อมูล
// Sort Array of Objects by Property Values
// Example 1: Sort Array by Property Name    ไม่ค่อยเข้าใจ
// function compareName(a,b) {
//     const name1 = a.name.toUpperCase()
//     const name2 = b.name.toUpperCase()
//     let comparison = 0;
//     if (name1 > name2) {
//         comparison = 1;
//     }
//     else if ( name1 < name2) {
//         comparison = -1;
//     }
//     return comparison;
// }
// const students = [{name: 'Sara', age:24},{name: 'John', age:24}, {name: 'Jack', age:25}];
// console.log(students.sort(compareName));


// Example 2: Sort Array by Property Age
// function arraySortAge(a,b) {
//     return a.age - b.age
// }
// const students = [{name: 'Sara', age:27},{name: 'John', age:25}, {name: 'Jack', age:26}];
// console.log(students.sort(arraySortAge));



// 77.
// Create Two Dimensional Array
// function arrayTwoDimensional(a, b) {
//     let arr = []
//     for (let i = 0; i < a; i++) {
//         for (let j = 0; j < b; j++) {
//             arr[i] = [];
//         }                               // for นี้ใช้สร้าง array และ sub array
//     }
//     for (let i = 0; i < a; i++) {
//         for (let j = 0; j < b; j++) {
//             arr[i][j] = j;
//         }                               // insert ข้อมูลลงไปใน array ทีละตัว
//     }
//     return arr;
// }
// const x = 2;
// const y = 3;
// const result = arrayTwoDimensional(x, y)
// console.log(result)




// 78.
// Extract Given Property Values from Objects as Array
//Example 1: Extract Value Using map()
// function extractValue(arr, prop) {
//     let extractedValue = arr.map(item => item[prop])     บรรทัดนี้เราใช้ map() เพื่อสร้างอาร์เรย์ใหม่ extractedValue โดยใช้ฟังก์ชันของ map ในการดำเนินการกับแต่ละอิลิเมนต์ item ในอาร์เรย์
//     return extractedValue;                               arr. ในทุก ๆ รอบของ map, เราดึงค่าของคุณสมบัติ prop จาก item โดยใช้ item[prop] และนำค่านั้นมาเก็บใน extractedValue.
// }
// const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];
// const result = extractValue(objArray, 'a')
// console.log(result)

//Example 2: Extract Value Using for Loop
// function extractValueLoop(arr, prop) {
//     let extractedValue = [];
//     for (let i = 0; i < arr.length; i++) {
//         extractedValue.push(arr[i][prop])       รับค่าจาก พารามิตเต้อและสังกลับไปใน array ชื่อ extractedValue
//     }
//     return extractedValue;                      และส่งค่ากลับไป
// }
// const objArray = [{ a: 1, b: 2 }, { a: 4, b: 5 }, { a: 8, b: 9 }];
// const result = extractValueLoop(objArray, 'a')
// console.log(result)




// 79.
// Compare Elements of Two Arrays
// Example 1 : Compare Arrays Using JSON.stringify()    การเปรียบเทียบค่าใน array 2อันว่าตรงกันมั้ย
// function comPareArray(arr1, arr2) {
//     let result = JSON.stringify(arr1) == JSON.stringify(arr2)
//     if (result) {
//         console.log('The arrays have the same elements.');
//     }
//     else {
//         console.log('The arrays have different elements.');
//     }
// }
// const array1 = [1,2,3,4,6]
// const array2 = [1,2,3,4,5]
// comPareArray(array1,array2)


// Example 2: Compare Arrays using for Loop
// function comPareArray(arr1, arr2) {
//     if (arr1.length != arr2.length) {
//         return false;
//     }
//     else {
//         let result = false;  //หากไม่มีการตั้งค่า result เริ่มต้นเป็น false, ในกรณีที่อาร์เรย์ arr1 และ arr2 มีขนาดเท่ากันและมีค่าที่ตรงกันทุกอิลิเมนต์ ตัวแปร result จะไม่ถูกอัพเดทเป็น true และฟังก์ชันจะคืนค่า false ตามค่าเริ่มต้น.
//         for (let i = 0; i < arr1.length; i++) {
//             if (arr1[i] != arr2[i]) {
//                 return false;
//             }
//             else {
//                 result = true;
//             }
//         }
//         return result;
//     }
// }
// const array1 = [1, 3, 5, 8];
// const array2 = [1, 3, 5, 8];
// const result = comPareArray(array1, array2)
// if (result) {
//     console.log('The arrays have the same elements. ')
// }
// else {
//     console.log('The arrays have different elements.');
// }




// 80.
// Example: Get Random Item From an Array
// function randomItemArray(arr) {
//     const randomIndex = Math.floor(Math.random() * arr.length);
//     const item = arr[randomIndex]
//     return item;
// }
// const array = [1,2,3,'HoHo',4,5,6]
// const result1 = randomItemArray(array)
// const result2 = randomItemArray(array)
// console.log(result1)
// console.log(result2)



// 81.
// Intersection Between Two Arrays
// Example 1: Perform Intersection Using Set
// function interSectionSet(arr1, arr2) {
//     const setA = new Set(arr1)
//     const setB = new Set(arr2)
//     let interArray = []
//     for ( let i of setB) {
//         if (setA.has(i)) {
//             interArray.push(i)
//         }
//     }
//     return interArray;
// }
// const array1 = [1,2,3,5,9]
// const array2 = [1,3,5,8]
// const result = interSectionSet(array1,array2)
// console.log(result)


// Example 2: Perform Intersection Using filter() Method
// function interSecFilter(arr1,arr2) {
//     const result = arr1.filter(x => arr2.indexOf(x) !== -1) 
//     return result
// }
// const array1 = [1,2,3,5,9]
// const array2 = [1,3,5,8,9]
// const result = interSecFilter(array1,array2)
// console.log(result)


// 82.
// Split Array into Smaller Chunks
// Example 1: Split Array Using slice()
// function arraySlice(arr1, chunk) {
//     for (let i = 0; i < arr1.length; i += chunk) {
//         let teamArray;
//         teamArray = arr1.slice(i, i + chunk)
//         console.log(teamArray)
//     }
// }
// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const chunks = 2;
// arraySlice(array1, chunks)

// Example 2: Split Array Using splice()
// function splitArray(arr, chunk) {
//     while (arr.length > 0) {
//         let teamArray;
//         teamArray = arr.splice(0,chunk)
//         console.log(teamArray)
//     }
// }
// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const chunk = 2;
// splitArray(array, chunk);


// 83.
// Include a JS file in Another JS file
// const name = 'First'
// const number = 10
// function plus( a,b) {
//     return a + b;
// }
// export { name, number, plus};


// 84.
// Get File Extension
// function fileExtension(filename) {
//     const extenSin = filename.split('.').pop()  // .split('.')จะแยกส่วนที่ . ออกจากกัน      องค์ประกอบอาร์เรย์สุดท้ายซึ่งเป็นส่วนขยายจะถูกส่งกลับโดยใช้เมธอด pop()
//     return extenSion
// }
// const result1 = fileExtension('module.js')
// console.log(result1)
// const result2 = fileExtension('index.tmt')
// console.log(result2)

// Example 2: Using substring() and lastIndexOf()           //ไม่ค่อยเข้าใจ
// function subString(filename) {
//     const extenSin = filename.substring(filename.lastIndexOf('.') + 1, filename.length )
//     return extenSin
// }
// const result1 = subString('module.js')
// console.log(result1)
// const result2 = subString('index.tmt')
// console.log(result2)


// 85.
// Check If A Variable Is undefined or null
// Example 1: Check undefined or null
// function checkUndefined(variable) {
//     if (variable == null) {
//         console.log('The variable is undefined or null')
//     }
//     else {
//         console.log('The variable is neither undefined nor null')
//     }
// }
// let array;
// checkUndefined(5);
// checkUndefined('hello');
// checkUndefined(null);
// checkUndefined(array);

//Example 2: using typeof  //Note: We cannot use the typeof operator for null as it returns object.
// function checkUndefined(variable) {
//     if (typeof variable === 'undefined' || variable == null) {
//         console.log('The variable is undefined or null')
//     }
//     else {
//         console.log('The variable is neither undefined nor null')
//     }
// }
// let array;
// checkUndefined(5);
// checkUndefined('hello');
// checkUndefined(null);
// checkUndefined(array);


// 86.
// Set a Default Parameter Value For a Function
// Example 1: Set Default Parameter Value For a Function
// function sumNumber(x=3,y=5) {
//     return x + y;
// }
// console.log(sumNumber())
// console.log(sumNumber(5,5))
// console.log(sumNumber(7))  ถ้าใส่ผลบวกตัวเดียวมันจะอ้างอิงตำแหน่ง 7 ตัวนี้แทนในส่วนของ x เลยเป็น 7 + 5 = 12

//Example 2: Using Previous Parameter in Another Parameter
// let Calculation = function(x = 5, y = x-3) {
//     return x+y;
// }
// const result1 = Calculation(10)
// console.log(result1);
// const result2 = Calculation()
// console.log(result2);


// 87.
// llustrate Different Set Operations
// Example 1: Set Union Operation
// function setUnion(a,b) {
//     const newarray = new Set(a);
//     for (let i of b) {
//         newarray.add(i);
//     }
//     return newarray;
// }
// const setA = new Set(['apple','mango','tomato'])
// const setB = new Set(['apple','mango','banana'])
// const result = setUnion(setA, setB)
// console.log(result)


// Example 2: Set Intersection Operation
// function intersec(seta, setb) {
//     const newarray = new Set();
//     for (let i of setb) {
//         if (seta.has(i)) {
//             newarray.add(i);
//         }
//     }
//     return newarray;
// }
// const setA = new Set(['apple', 'mango', 'tomato'])
// const setB = new Set(['apple', 'mango', 'banana'])
// const result = intersec(setA, setB)
// console.log(result)

// Example 3: Set Difference Operation
// function difference(seta, setb) {
//     const differenceSet = new Set(seta);
//     for (let i of setb) {
//         differenceSet.delete(i)   // ในบรรทัดที่ 3-5, ฟังก์ชันวนลูปผ่านทุก ๆ อิลิเมนต์ใน setB โดยใช้ for...of และลบทุกอิลิเมนต์ใน differenceSet ที่มีค่าเท่ากับอิลิเมนต์ใน setB โดยใช้ differenceSet.delete(i).
//     }
//     return differenceSet;
// }
// const setA = new Set(['apple', 'mango', 'tomato'])
// const setB = new Set(['apple', 'mango', 'banana'])
// const result = difference(setA, setB)
// console.log(result)

// Example 4: Set Subset Operation
// function subset(seta, setb) {
//     for (let i of setb) {   // i มีค่าของ setb ทั้งหมดเลย
//         if (!seta.has(i)) {   //โค้ดนี้กำลังตรวจสอบว่า seta มีอิลิเมนต์ i หรือไม่ ถ้า i ไม่อยู่ใน seta (หมายถึง .has(i) คืนค่า false) แล้วคำสั่ง return false; จะถูกเรียก ซึ่งหมายถึงฟังก์ชัน subset(seta, setb) จะคืนค่า false และสิ้นสุดการทำงาน
//             return false;
//         }
//         return true;
//     }
// }
// const setA = new Set(['apple', 'mango', 'orange']);
// const setB = new Set(['apple', 'orange']);
// const result = subset(setA, setB);
// console.log(result);


// 88.
//Example: Integer Value Between Two Numbers
// const min = parseInt(prompt("Enter a min value: "));
// const max = parseInt(prompt("Enter a max value: "));             // Math.random มันจะไม่รวมตัวมันเอง
// const a = Math.floor(Math.random() * (max - min + 1)) + min ;    + min เพื่อให้มันสุ่มถึงค่าที่คนใส่เข้ามา 20-10+1 จะได้ 11 แต่เราต้องการสุ่ม 10-20 เลยต้องบวกค่า min ตามไป
// console.log(`Random value between ${min} and ${max} is ${a}`);


// 89.
// Get The Current URL
// program to get the URL
// const url1 = window.location.href;
// const url2 = document.URL;
// console.log(url1);
// console.log(url2);


// 90.   ในส่วนของ regex ยังไม่เข้าใจในสัญลัก
// Validate An Email Address
// Example: Using Regex
// function validateEmail(email_id) {
//     const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
//     if (regex_pattern.test(email_id)) {
//         console.log('The email address is valid');
//     }
//     else {
//         console.log('The email address is not valid');
//     }
// }

// validateEmail('abc123@gmail.com');
// validateEmail('hello@com');