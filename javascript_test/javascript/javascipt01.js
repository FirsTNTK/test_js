
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
// Multiplication Table Up to 10
const number = parseInt(prompt('Enter an integer: '));
for (let i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}

