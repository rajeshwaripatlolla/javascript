let a = fetch("https://spotify-apis.p.rapidapi.com/spotify/search?q=lady&type=%3CREQUIRED%3E&limit=50&offset=0",{
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd23a3c8b48msh2adc626391e28abp10aa33jsna250567c399f',
		'X-RapidAPI-Host': 'spotify-apis.p.rapidapi.com'
	}
})
.then((res)=>res.json())
.then((a)=>console.log(a))



`${}`


let url="https://spotify23.p.rapidapi.com/search/?q=`${song_nme}`&type=multi&offset=0&limit=10&numberOfTopResults=5"