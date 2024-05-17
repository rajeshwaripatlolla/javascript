//   num=100
// for (i=1;i<=num;i++){
//     if (i%2==0)
//  console.log(i)
// }
//2
// num=100
// num1=""
// for (i=1;i<=num;i++){
//     if (i%2==0)
//    num1+=" "+i
// }
// console.log(num1);
  //3
  
//   var a=8839793
// var b=a.toString()
// let c=""
// for(i=0;i<b.length;i++){     
//   if(b[i]%2 !==0){
//     c+=b[i] 
//   }
// }
// console.log(c)


//4
// var a = 3431
// b=a.toString()
// var c = 1
// var i = 0
// while(i<b.length){   
//     c=c*b[i] 
//     i++     
// }
// console.log(c);
//5 
// var a= 1273
// var b=a.toString()
// var c=0
// var d = 0
// for(i=0;i<b.length;i++){
//     if(b[i]%2===0){
//       c+=+b[i] 
//     }
//     else {
//            d+=+b[i]
//     }
//     }
    
//      console.log(c);
//      console.log(d);
//      if(c>d){
//       console.log("true")
//      }
//      else{
//       console.log("false");
//      }
// var a=19
// switch(a%2){
//   case 0:
//   console.log("true");
//   break;
//   case 1:
//     console.log("false");
//}
//      i=2
// if(i>=1&&i<=10)
// console.log(i);
// var a = 1
// while(a>=10){
//   console.log(a);
//   a++
// }

// var num = 15
// p= 1
// let i=1;
// pString=""
// while(i<=num){
//   p*=i;
//   pString += i;
//   if(i<num){
//     pString+="*";
//   }
//   i++;
// }
// console.log(pString + "=" + p);
//day3 
//1
// var a = 3876
// var b= a.toString()
// var c = 0
// for (i=0;i<b.length;i++){
//   c+=+(b[i])
// }
// console.log(c);  

//2
// var a = 84729
// var b = a.toString()
// c=0
// for (i=0;i<b.length-1;i++){
//   c+=parseInt(b[i])+parseInt(b[i+1])
// } 
// console.log(c);20
 // duplicate the numbers 
// var arr = [3,5,1,2]
// temp = []
// c=0
// for (i of arr){      
//   if (!temp.includes(i))
//   temp.push(i)
// c++
// }
// // unique = true
// // for (i of arr)
// if (arr.length==temp.length){
//   console.log("unique");
// }
// else{
//   console.log("duplicate");
// }


// var a = 84729;
// var b = a.toString();
// temp = []
// var c = " ";
// for (var i = 0; i < b.length ; i=i+2) {
//   if (i==b.length-1 && b.length%2==1) {
//   c += parseInt(b[i]) + parseInt(b[i + 1]);
//   }
//   else{
//     temp.push(Number(b[i])+Number(b[i+1]))
//   }
// }
// console.log(temp.join("")); 


// let a = 8;
// let c = 0;

// for (let i = 2; i < a; i++) {
//   if (a % i  === 0) {
   
//     console.log("not a prime");
//     c++;
//     break;
//   }
// }

// if (c === 0) {
//   console.log("prime");
// }

// var a=prompt("enter a number" )
// // var b = 20
// let c = 0
// var d= ""
// for (i=a.length-1;i>=2;i--){
//   c++;
//   if(a%i==0){
//     d+= a[i]
//   }
// }


