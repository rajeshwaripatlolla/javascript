// obj = {
//    name:"raji",
//    age:21,                   // output:{ name: 'raji', age: 21, place: 'hyderabd' }
//    place:"hyderabd" 
// }
// Object.freeze(obj) 
// obj.place="sangareddy"
// console.log(obj);

//   seal :   we can't add or delete  but we can assign the values
// obj = {
//     name:"mahi",
//     age:19,
//     branch:"MPCS"
// }
// Object.seal(obj)        // { name: 'mahi', age: 20, branch: 'MPCS' }
// obj.age=20
// console.log(obj);
   

 // assign method:

 a = { a:1,b:2},
 b={b:3,c:4}
 c= Object.assign(a,b)
 console.log(c);
  
   