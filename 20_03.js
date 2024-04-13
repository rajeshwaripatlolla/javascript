// let a = [4,2,7,1,9]
// // var b = a.sort();
// // console.log(b);
// // var c= b.reverse();
// a.sort();
// a.reverse()
// console.log(a);
// // Sorting and Reversing String Array:*
// //- *Input:* An array of strings ["banana", "apple", "cherry", "date"].
// //*Output:* The sorted array in alphabetical order, then reversed ["date", "cherry", "banana", "apple"].

// var b = ["banana", "apple", "cherry", "date"]
// b.sort()
// b.reverse()
// console.log(b);
    
// //3
//  var c =[{ name: "John", age: 25 },
//   { name: "Alice", age: 30 },
//    { name: "Bob", age: 20 }]
//    d= c.sort((a,b)=>a.age-b.age)
   
//     console.log(d.reverse());

// //4
// var arr = [10, 20, 30, 40, 50];
// var a = arr.find((ele,ind)=>{
//     return arr[ind]>25
// })
// console.log(a);
//5
// let i =["apple", "banana", "orange", "grape"]
//       var j = i.find((a)=>{                                // banana
//         return a[0]=="b"
//       })
// console.log(j);

// 6
// var x = [15, 25, 35, 45, 55]
// var y = x.findIndex((a)=>{
// return x%10==0
// })
// console.log(y);
//7
// var e =[3, 7, 8, 12, 15]
// var f=e.some((a)=>{
// return a%2==0
// })
// console.log(f);
//8
//  var g = [{ name: "John", age: 25 },
//   { name: "Alice", age: 30 },
//    { name: "Bob", age: 20 }]
//    var h = g.every((g)=>{
//     return g.age>18
//    })
//    console.log(h);
//9
// var fruit=["apple", "banana", "grape", "kiwi"]
// var f1=fruit.some((a)=>{
//     return a[0]=="b"
// })
// console.log(f1);
//10
  var i=[5, 10, 15, 20, 25]
  var j = i.reduce((a,b)=>{
    return a+b;
  })
console.log(j);
//11
// var i =["Hello", " ", "world", "!"]
// var j = i.reduce((a,b)=>{
//     return a+b
// })
// console.log(j);

//12
var a = [[1, 2], [3, 4], [5, 6]]
var b=a.reduce((a,b)=>{
   return a .concat(b)
})
console.log(b);




            