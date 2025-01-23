let valueSearch = document.getElementById('searchValue');
let form = document.querySelector('form');
let name = document.getElementById('name');
let abilities = document.getElementById('ability');
let moves = document.getElementById('moves');
let img = document.querySelector('img');
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
	fetch('https://pokeapi.co/api/v2/pokemon/' + valueSearch.value)
	.then(res => res.json())
	.then(data =>{
		console.log(data);
		img.src = data.sprites.front_shiny;
		name.innerText = data.name;
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
}

const initApp = () => {
	valueSearch.value = 'pikachu';
	pokemonSearch();
}
initApp();