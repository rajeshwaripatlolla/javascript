//  //positive or nagative number

// // var a = 0
// // if(a>=0){
// //     console.log("is a positive number");}

// // else if (a<0){
// //     console.log("it is a negitive number");}
// // else{
// //     console.log("its a decimal");
// // }



// // check even or odd
// // var a = 10001
// // if (a%2==0){
// //     console.log( "even number");
// // }
// // else{
// //     console.log("odd number");
// // }

// // whether the number is prime or not: divisible by 1 and itself

// // area of triangle: base*height/2
// //  var height = 5
// //  var base = 6
// //  var area= height*base/2



// // a=+prompt("enter a number")
// //  count=0;
// //             for(i=2;i<a;i++){
// //                 if(a%i==0){
// //                     count++;
// //                     console.log(a+"is not prime")
// //                     break;
                    
// //                 }
// //             }
// //             if(count==0){
// //                 console.log(a+" is prime");
               
// //             }


// // for (let i = 0; i<10; i++){
// //     if (i==2*i){
// //         break
// //     }
// //     console.log(number ${i});
// // }
// // var sum = 0
// // var x = +prompt("enter number")
// // for (var a = 10; a<=5; a++){
// //     sum=sum+a;
// // }
// // console.log(sum);

// // loops in js:

// // for (i=1; i<20; i++){
// //     console.log("sai baba");
// // }

// // even numbers:

// // for (i=1; i<=20;i++){
// //     if(i%2==0){
// //         console.log(i);
// //     }
// // }
// // for(i=1; i<=15;i++){
// //     if(i==13){
// //         break;
        
// //     }
// //     console.log(i);
// // }


// // var a=11
// // if(a%2==0){
// //     console.log("it is a even number");
// // }
// // else{
// //     console.log("odd number");
// // }

// // var a = prompt("enter Number");
// // if(a>18){
// //     console.log("she is adult");
// //     if (a<18){
// //         console.log("not adult");}
// // }
// //   for loops :
// //   for(i=1; i<=20; i++)
// // {
// //     // console.log('hello ${i}')
// //     console.log(i);
// // }

// // for (birthday=1; birthday<25; birthday++){
// //     console.log(birthday);
// // }


// // palindrome:
var a="level";
var b ="";
 for (i=0; i<=a.length-1;i++){
  console.log(a);
  console.log(a[i]);
    
if(a==b){
    console.log(`${a} is a palindrome`);
}
else{
    console.log("not a palindrome");
}
 }
// // do while;

// // i=a.length-1;
// // do{  b=b+a[i];
// //     console.log(b);
// //     i--;
// // }
// // while(i>=0);


// // for(rows=1; rows<=5; rows++){
// //     // console.log("*");
// //     star=""
// //     for(cols= 1; cols<=rows; cols++){
// //         star+="*"
// //     }
// //     console.log(star);

// // }

// // function welcome(person){
// //     var a=(`welcome `);
// //     return a;
// // }
// // console.log(welcome(mahi.patlolla));
// // console.log(welcome(mahi.patlolla));

// for (var a = 1; a<=10; a++){
//     console.log(a);
// }
// var coding = ["js","python","html"]
// for (let i=0; i< coding.length; i++){
//     console.log(coding[i]);
// }
// // loop inside a loop;
// // for (var i =1; i<=5; i++){
// //     console.log(i);
// //     for( var j = 1; j<=3; j++){
// //         console.log("loop");
// //     }

// // while loop:
// // var i = 0;
// // while(i<=10){
// //     console.log(i);
// //     i++
// // }

// // do whilw loop:
// var a =10//(initialization)
// do{
//     console.log(a); // block of code
//     a++; //increment
    
// }
// while(a<=20);   // condition

// for (let i =1; i<=5; i++){
//     if(i==3){
//         continue;
//     }
//     console.log(i);
// }
// i=0;
// while(false){
//     console.log(i)
//     i++;
// }

// i=0;
// do{
//     console.log(i)    // execute atleast one time
//      i++; 
// }while(false)

// palindrome:

// var a="rotator"
// var b ="";
// for (i=0; i<=a.length+1;i++){
//  console.log(a);
//      console.log(a);}

function demo(x,y){
    console.log(x+y);
    return x+y;
}
demo("hi" ,"welcome");
demo(" to", "india");
console.log(demo(1,2));

// function bill(item1,item2,gst=18){
//     var sum=item1+item2+gst;
//     // console.log(sum);
//     return sum;
// }
//     console.log(bill(23,25)); 
var demo =function(str,str1,str2){
    console.log("hello im annonymous");
    var concat=str+str1+str2
    return concat;
}
console.log(demo("your name","html","css"));

// vowels

// var str=("programming is fun")
// var count=0;
// var str1=""
// for(i=0;i<str.length;i++){
//     if((str[i]=="a")||(str[i]=="e")||(str[i]=="i")||(str[i]=="o")||(str[i]=="u")){
//         var unique=true;
//         for(j=0;j<str1.length;j++){
//             if(str[i]==str1[j]){
//                 unique=false;
//             }
//         }
//     }

// }

// 1 to 10 prime numbers :

for (var i = 2; i<=100;i++){
    c = 0
    for (var j= 2;j<i;j++){
      if(i%j==0){   
        // console.log(i+"prime");
        c++;
        break;
      }
    }
      if (c===0) {
        console.log(i);
      }
      // else{
      //   console.log(i,"not prime");
      // }
    
  }
    
    
    