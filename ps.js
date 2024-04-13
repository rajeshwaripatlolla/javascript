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
//     return "something" + a 
// }
// console.log(demo(" "));
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

 arr = [2,2,2,3,4,4]
 d = []
 e = []
 for (i of arr){
    if(!e.includes(i))
    e.push(i)
 }
 for(i of e){
    c = 0 
    for(j of e){
        if(i ==j){
            c++
        }
    }
    if(c==1){
        uni = i
    }
    else{
        d.push(c)
    }
 }
 for(i of d){
    if (i=uni){
        continue
    }
 }

