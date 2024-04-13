// var str = "Patlolla"
// console.log(str.charAt(0));
// // output : p                                           
// console.log(str.charAt(4));         //charAt()
// // output : o 

// CONCAT;
//  var str1 = "hello"
//  var str2 = "welcome"
//  console.log(str1.concat(" ",str2)); 
//   // output : hello welcome
//   // or 
//   var str1 = "10k"
//   var str2 = "coders "
//   var str3= str1.concat(" ",str2);
//   console.log(str3);      // output: 10k coders
 
//   length;
// let  str1 = "hi ramya welcome to 10k coders";
// let str2 = str1.length;
// console.log(str2);
//   // output : 30
  
// const a=[1,2,"3",4,5,6,"7",8,9,10];
// for(i=0;i<a.length;i++){
//     if( typeof a[i]==="string"){
//         console.log(a[i] , "is a string");
//     }
// }
 
//  var x = [ 1,2,3,4,5,6,7,8,9,10 ,11,12,13,14,15];
// for(i = 0 ; i<x.length; i++){
//     if((x[i]%3==0) &&( x[i]% 5!=0)){
//     console.log("fizz");
//     }
//      else if ((x[i]%5==0) &&( x[i]% 3!=0)){
//         console.log("buzz");
//     }
//     else if( (x[i]%3==0) && (x[i]%5==0)){
//      console.log("fizzbuzz");
//     }
//     else{
//         console.log(x[i]);
//     }
//     }

    // var a = "abcde";
    // var b = " ";
    // for(i=0; i<5;i++){
    //     b+=a[i];
    //     console.log(b);
    // }
    // var str = "Hello"
    // console.log(str.charCodeAt(0));
    // output: 72
  
    //  var str = "raji"
    //  console.log(str.charCodeAt(1));

    //  let str = "hello welcome"
    //  console.log(str.indexOf("welcome"));
    //    // output : 6


// let str = "Hello World"
// console.log(str.toUpperCase());
//    // output : HELLO WORLD

//     var str = "Hello HI"
//  console.log(str.toLowerCase());    
//      // output : hello hi
    //  let str = "   Hello world    ";
    //   console.log(str.trimEnd());

    //   // Output:   Hello world    


    
//     let a = "hello";
// console.log(a.padStart(10)); // Output: "     hello"

// let b = "hi";
// console.log(b.padStart(10, "123")); // Output: "12312312hi" 

// var str = "hello welcome"
// console.log(str.slice(5));       // welcome  
// console.log(str.slice(1 , 5));   //  hello
// console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Output: "Hello"
 
// var a = 5
// var b = 6
// var c = 7                          // area of triangle
// area = a+b+c/2
// console.log(area);

// let a = "hello";
// console.log(a.padEnd(10));                // Output: hello   
// console.log( a.padEnd(10,12))           // output : hello12121

// let str = " RCB "
// console.log(str.repeat(5));            
    // RCB  RCB  RCB  RCB  RCB 

    // let arr = [1,2,3,4,5]
    // let b = arr.slice(2,4)
    // console.log(b);
    // console.log(2+"2"*"3"); 

    // let str = "CSK"
    // console.log( str.replace("CSK" ,"RCB"));
    //    // output: RCB

    // let str = "India is my country"
    // console.log(str.split(" "));             // output : [ 'India', 'is', 'my', 'country' ]
    // console.log(str.split(""));       output: [
    //                                            'I', 'n', 'd', 'i', 'a',
    //                                             ' ', 'i', 's', ' ', 'm',
    //                                             'y', ' ', 'c', 'o', 'u',
    //                                               'n', 't', 'r', 'y'
    //                                                                  ]
    // var arr = [ "if","if else", "else if", "nested if" ,"switch"]
    // console.log(arr.length);
    // // output : 5

//     let a = ["a","e"]
//    var b= a.push ("i","o","u")     // output :5
//    console.log(b);

// let a = ["a","e"]
//     a.push ("i","o","u")     //[ 'a', 'e', 'i', 'o', 'u' ]
//    console.log(a);

//    str = "[ a,b,c ]"
    
//    if(''){
//     console.log(true);
//    }
//    else{
//     console.log(false);
//    }

//    a=[10,20,[30,[2,3,5,6],7],9,10]
//    console.log(a[2][1][2])

// b = [1,2,3,4]+ [5]
// console.log(b);



    
// var a = ["raji", "himaja", "bhavya"];
// var b = "";
// for (var i = 0; i < a.length; i++) {
//     // Convert the first character to uppercase and concatenate with the rest of the string
//     b += a[i].charAt(0).toUpperCase() + a[i].slice(1);
//     if (i < a.length - 1) {
//         b += " "; // Add a space between words
//     }
// }
// console.log(b);
// slice(start,length-1(end))

// var a = [11,2,3,4,5]
// b=a.reduce((acc,next)=>acc)   //op :11
// console.log(b)
//  var a = ["hello","welcome","to","10k"]
var a="hello world"
console.log(a.length)