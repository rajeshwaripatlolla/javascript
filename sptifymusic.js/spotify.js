
function searchSpotify() {
    const searchInput = document.getElementById('searchInput').value;

    fetch(`https://spotify23.p.rapidapi.com/search/?q=${searchInput}&type=multi&offset=0&limit=10&numberOfTopResults=5`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '189be66ac6msh6aeca80fa421279p14141fjsnadab681c63e8',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
      window.localStorage.setItem("data",JSON.stringify(data))
      window.location.assign("./songs.html")

    })
}
const url = 'https://spotify-scraper.p.rapidapi.com/v1/track/download?track=Lego%20House%20Ed%20Sheeran';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c766deee28msh918feb190107139p1f59e1jsndd1fbde3bc6a',
		'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
	}
};

let searchInp = document.getElementById('searchInput')
let hideSearchText = document.getElementById('search')

let hideSearch = (e)=>{
    searchInp.style.visibility = 'hidden'
    hideSearchText.style.visibility = 'hidden'
}

let showSearch = ()=>{
    searchInp.style.visibility = 'visible'
    hideSearchText.style.visibility = 'visible'
}


