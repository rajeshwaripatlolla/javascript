// 1.Create a function that takes two numbers as arguments and returns their sum.
// function raji (a,b){
//     console.log(a+b);
// }
// raji(2,7) 

//2.Write a function that takes an integer minutes and converts it to seconds.

// function raji1 (a){
//     console.log(a*60);
// }
// raji1(5)

//3.Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// function raji2(b){
//     console.log(b+1);
// }
// raji2(5)
//or
// function raji2(b){
//     return b+1
// }

// console.log(raji2(7));

//4.Create a function that takes the age in years and returns the age in days.
//    function raji3(c) {
//     return c*365
//    }
//    console.log(raji3(21));
// 5.Create a function that takes voltage and current and returns the calculated power.
// function power (v,c){
//     const p = v * c
//     return p;
// }
// console.log(power(10,2));
//6. Write a function that returns the string "something" joined with a space " " and the given argument a.
// function demo (a){
//  return "something" + a 
// }
// console.log(demo(" "));

//7 Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

    //  function demo (a,b){
    //    if(a===10 || b ===10 || a+b ===10){
    //     console.log("true");
    //    }
    //    else{
    //     console.log("false");
    //    }
       
    //  }
    //  demo(5,10)
      //8.Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
        // function fname(str,str1){
        //     if(str.length === str1.length){
        //         console.log("true");
        //     }
        //     else{
        //         console.log("false");
        //     }
        // }
        // fname("raji","maheshwari")
//9 Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.
// let a = (name)=>{
//   console.log(`hello,${name}`); 
// }

//10:Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
//    function fname(numbers){
//     let a = `${numbers[0]}${numbers[1]} ${numbers[2]}`
//     const b = `${numbers[3]}${numbers[4]}${numbers[5]}`;
//     const secondPart = `${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
//    }
//    console.log(5,5,5,5,5,5);
   //11 Create a function that returns an array of strings sorted by length in ascending order.
  //  function sortByLength(arr) {
  //   return arr.sort((a, b) => a.length - b.length);
  // }
  // const a = sortByLength(["a", "ccc", "dddd", "bb"]);
  // console.log(a);

  //12 Create a function that takes an array of numbers and returns the second largest number.
// secondLargest([10, 40, 30, 20, 50]) ➞ 40

// function secondLargest(arr) {
//   if (arr.length < 2) {
//     console.log("a");
//   }
  
//   let largest = -Infinity;
//   let secondLargest = -Infinity;
  
//   for (let num of arr) {
//     if (num > largest) {
//       secondLargest = largest;
//       largest = num;
//     } else if (num > secondLargest && num !== largest) {
//       secondLargest = num;
//     }
//   }
//   return secondLargest;
// }


// console.log(secondLargest([10, 40, 30, 20, 50])); // 40

//15:Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.
function findUniqueNumber(arr) {
  const countMap = {};

  // Count occurrences of each number in the array
  for (let num of arr) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  // Find the unique number
  for (let num in countMap) {
    if (countMap[num] === 1) {
      return parseInt(num, 10);
    }
  }

  return null; // Return null if no unique number found
}


console.log(findUniqueNumber([2, 2, 2, 3, 4, 4, 4])); // 3


// 23. Program to arrange numbers in ascending order
//  let a = [2,3,1,5,4]
//   b = a.sort()               // using sort
//   console.log(b);
// or 
// let a = [2,3,1,5,4]
// let b = a.length
// for (let i = 0 ;i<b-1;i++){
//     for(let j =0;j<b-1;j++ ){
//         if(b[j]>a[a+1]){

//         }
//     }
// }
// Program to Check Whether a Number is Prime or Not

//27  Program to find LCM of two numbers using while loop

//  a = 15 , b = 50
//  c = (a>b)  ? a:b
//  while(true){
//     if(c%a==0 && c%b==0){
//         console.log("lcm of 15 and 50 is "+c);
//         break
//     }
//     c++
//  }
// Program to Display Characters from A to Z Using Loop with count.
// for(i=0;i<26;i++){
//     let a = String.fromCharCode(65+i)
//     console.log(a+(i+1));
// }

// let a = 25
// let b = 70
// let c = 45
// (a>b>c)?console.log(a): (b>c) ? console.log(b):console.log(c);
// let a = 25;
// let b = 70;
// let c = 45;

// (a > b && a > c) ? console.log(a) : (b > c) ? console.log(b) : console.log(c);

// let a = [2,7,12]
 
//  p = 1
// for (i =0;i<a.length;i++){
// c=0
// let t = []
// for(j=0;j<a.length;j++ ){
//     if(j%i==0){
//         c++
//         t.push(a[j]/a[i])
//     }
//     else{
//         t.push(a[j])
//     }
// }
// console.log(t);
// if(c>1){
//     a = t 
//     p = p*a[i]
// }
// }
// console.log(p);
// console.log(a);

// let b ="42 52 62" .split(" ")
// arr=[];
// for(i of b){
//     arr.push(Number(i))
// }
// let l = 1;
// a=1;
// for (let i = 0; i < arr.length; i++) {
//     let c = 0;
//     let temp = [];
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] % arr[i] === 0) {
//             temp.push(arr[j] / arr[i]);
//             c++;
//         }else {
//             temp.push(arr[j]);
//             //c++;
//         }
//     }
//     if (c > 1) {
//         l=l* arr[i];
//         arr=temp;
        
//     }
//     //a=l*arr[j]
// }
// //let a=l*arr[i]
//  console.log(l)
// console.log(arr)
// for(i of arr){
//     a=a*i;
// }
// lcm=a*l;
// console.log(lcm)

//  arr = [2,2,2,3,4,4]
//  d = []
//  e = []
//  for (i of arr){
//     if(!e.includes(i))
//     e.push(i)
//  }
//  for(i of e){
//     c = 0 
//     for(j of e){
//         if(i ==j){
//             c++
//         }
//     }
//     if(c==1){
//         uni = i
//     }
//     else{
//         d.push(c)
//     }
//  }
//  for(i of d){
//     if (i=uni){
//         continue
//     }
//  }

  // converting after _ letters to uppercase letter
// var a = "hi_guys_how_are_you";
// var b = "";

// for (var i = 0; i < a.length; i++) {
//   if (i === 0) {
//     b += a[i];
//   } else if (a[i] === "_") {
//     b += "_";
//     i++; 
//     b += a[i].toUpperCase(); 
//   } else {
//     b += a[i];
//   }
// }

// console.log(b);  