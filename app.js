let valueSearch = document.getElementById('searchValue');
let form = document.querySelector('form');
let name = document.getElementById('name');
let height = document.getElementById('height');
let abilities = document.getElementById('ability');
let moves = document.getElementById('moves');
let img = document.getElementById('gif');
// var val = valueSearch.value;
// let url = 'https://pokeapi.co/api/v2/pokemon/'+valueSearch.value;

form.addEventListener('submit', (event) => {
	event.preventDefault();
	// console.log('https://pokeapi.co/api/v2/pokemon/' + valueSearch.value);
	if(valueSearch.value != ''){
		pokemonSearch();
	}
})
const pokemonSearch = () => {
	fetch('https://pokeapi.co/api/v2/pokemon/' + valueSearch.value.toLowerCase())
	.then(res => res.json())
	.then(data =>{
		console.log(data);
		let weight = data.weight / 10;
		img.src = data.sprites.front_shiny;
		name.innerText = data.name;
		height.innerText = 'Height: '+data.height+'0cm. Weight: '+weight+'Kg';
		let ability = '';
		let move = '';
		data.abilities.forEach(a =>{
			ability += '<li>'+a.ability.name+'</li>';
		})
		abilities.innerHTML = ability;
		data.moves.forEach(m =>{
			move += '<li>'+m.move.name+'</li>';
		})
		moves.innerHTML = move;
	})
	valueSearch.value = '';
}

const initApp = () => {
	valueSearch.value = 'pikachu';
	pokemonSearch();
}
initApp();