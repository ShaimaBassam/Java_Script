/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids.

*/

function tellFortune(jobTitle,geographic,partners_name,number_of_children){
console.log (`You Will be a ${jobTitle} in ${geographic}and married to ${partners_name} with ${number_of_children} Kids.`)
}
tellFortune('Marketer','Jordan','None','0')

/*

2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(age) {
  
  var dogage=age*7;

  console.log ("Your doggie is "+dogage+" years old in dog years!");
}
calculateDogAge(4)


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
// 100*365  36000
// 30*365  10800
// 32850

function calculateSupply(age, amount) {
  var maxAge = (100*365)*amount;
  var Age =(age*365)*amount;
  var amountConsumed = maxAge - Age; 
  return('You will need '+ amountConsumed +' cups of tea to last you until the ripe old age of 100');
}

console.log(calculateSupply(27, 1));

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name) {
var Name='hello'+name
return (Name)
}

console.log(greet(' Shaima'))

// function greet(name) {
//   var Name='hello '+ name;
//   return(Name);
// }
// document.write(greet('shaima'));

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/

// function double0(cat) {
//   return 2 * x;
// }

///////  cat is not defined    ///////
// function double1(7) {
//   return 2 * 7;
// }
///////  SyntaxError: Unexpected number    ///////
// function double2('7') {
//   return 2 * 'x';
// }
///////  SyntaxError: Unexpected string   ///////


/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(cubeNumber) {
  var C_number = cubeNumber*cubeNumber*cubeNumber;
  return C_number;
}
console.log(cube(4));
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(FirstNum,SecNum) {
  var multi = FirstNum * SecNum;
  return(multi);
}
console.log(multiply(4,5));

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age) {
  if (age >= 20) {
     return('yes you can');
  }
  else{
   var  legalAge=20-age;
    return('please come back after '+legalAge+' years to get one');
  }
}
console.log(canIGetADrivingLicense(18));
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(str1,str2) {
  if( str1.length === str2.length ) {
    return true;
  }
  else{
    return false;
  }
}
console.log(sameLength('tree','clue'));
console.log(sameLength('tree','car'));

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(N1,N2) {
  if (N1 > N2) {
    return N1;
  }
  else{
    return N2;
  }
}

console.log(largerNubmer(15,20));
// console.log(largerNubmer(20,15));

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(N1,N2,N3) {
if ((N1 < N2)||(N1 < N3)) {
  return N1;
}
else if((N2 < N1)||(N2 < N3)){
  return N2;
}
else{
  return N3;
}
}

console.log('the first smaller number:',smallerNubmer(15,50,20));
console.log('the first smaller number:',smallerNubmer(100,50,20));
console.log('the first smaller number:',smallerNubmer(100,100,20));


/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
// function shorterString(s1,s2,s3,s4,s5) {
//   if ((s1.length < s2.length)&&(s1.length < s3.length)&&(s1.length < s4.length)&&(s1.length < s5.length)) {
//     console.log(s1)
//   }
//   else if((s2.length < s1.length)&&(s2.length < s3.length)&&(s2.length < s4.length)&&(s2.length < s5.length)){
//     console.log(s2)
//   }
//   else if((s3.length < s1.length)&&(s3.length < s2.length)&&(s3.length < s4.length)&&(s3.length < s5.length)){
//     console.log(s3)
//   }
//   else if((s4.length < s1.length)&&(s4.length < s2.length)&&(s4.length < s3.length)&&(s4.length < s5.length)){
//   }
//   console.log(s4)
//   else((s5.length>s1.length)&&(s5.length>s2.length )(s5.length>s3.length )(s5.length>s4.length ))
  
//   console.log(s5)
//   shorterString("air","school","car","by","github");
// }














/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/











function isEven(Num1) {
  if (Num1 %2 === 0) {
    return true;
  }
  else{
    return false;
  }
}
console.log(isEven(1));
console.log(isEven(2));
console.log(isEven(7));

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(num) {
  if (num % 2 > 0) {
    return 'this number is Odd :'+ true;
  }
  else{
    return 'this number is not Odd :'+false;
  }
}
console.log(isOdd(4));
console.log(isOdd(5));

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(para) {
  return  Math.abs(para);
}
console.log('the positive version:',positive(4));
console.log('the positive version:',positive(-5));

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(firstName,lastName) {
  return firstName +' '+ lastName;
}
console.log(fullName("Adam","McCallen"));
console.log(fullName("Alex", "Mercer"));

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(n1,n2,n3,n4,n5) {
  var average=(n1+n2+n3+n4+n5)/5;
  return average;
}
console.log(average(1,2,3,4,5));
console.log(average(5,7,9,3,5));

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber() {
 return Math.random();
}
console.log('A random number between 0-1:',randomNumber());
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(param1,param2) {
  min= Math.ceil(param1);
  max= Math.floor(param2);
  return Math.floor(Math.random() * (max - min) + min);
}
console.log('The random number between two numbers',randomBetweenNumbers(1,8));
console.log('The random number between two numbers',randomBetweenNumbers(3,100));

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(par) {
  if (par >= 95 && par <= 100) {
    return 'A';
  }
  else if(par <= 94 && par >= 85){
    return 'B';
  }
  else if(par <= 84 && par >= 70){
    return 'C';
  }
  else if(par <= 69 && par >= 50){
    return 'D';
  }
  else{
    return 'F';
  }
}
console.log(scoreInUniversty(96));
console.log(scoreInUniversty(3));
console.log(scoreInUniversty(71));
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
var count = 0;
function counter() {
  return count=count+1;
}
console.log(counter());
console.log(counter());
console.log(counter());

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function resetCounter() {
 return count = count -1 +' and the counter reset now';
}
console.log(resetCounter());