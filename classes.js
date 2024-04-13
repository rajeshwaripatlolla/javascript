// class wow {
//     constructor(a,b,c){
//         (this.name=a),(this.dept = b),(this.yr=c);
//     }
//     additem(x,y){
//         this.city = x
//         this.country = y
//     }
//   set changename (a){
//     this.name = a 
//   }
// }
// var obj1 = new wow("raji","cse",2023);
// var obj2 = new wow("mahi","bsc",2024);
// console.log(obj1);
// console.log(obj2);
// obj1.additem("hyd","India")
// console.log(obj1);
const url = 'https://spotify-apis.p.rapidapi.com/spotify/search?q=lady&type=%3CREQUIRED%3E&limit=50&offset=0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd23a3c8b48msh2adc626391e28abp10aa33jsna250567c399f',
		'X-RapidAPI-Host': 'spotify-apis.p.rapidapi.com'
	}
};
.then((url))=>a.json()
.then(options)