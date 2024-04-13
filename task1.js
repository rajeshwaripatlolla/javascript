for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        for (var j = 0; j < i; j++) {                    // here the iteration continues  untill j is less than i but we print i in console.
            console.log(i);
        }
    } else {
        console.log(i);
    }
}
 
// for( var i=1; i<=5; i++)
//     console.log("1,"+i);
//     for( var i=1; i<=5; i++)
//      console.log("2," +i);
//      for( var i=1; i<=5; i++)
//      console.log("3," +i);
//      for( var i=1; i<=5; i++)
//      console.log("4," +i);
//      for( var i=1; i<=5; i++)
//      console.log("5," +i);

for(i=1;i<=5;i++){
    for(j=1;j<=5;j++){
        console.log(`(${i},${j})`);
    }
}
    
    
    

  