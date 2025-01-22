let valueSearch = document.getElementById('valueSearch');
let name = document.getElementById('name');
let abilities = document.getElementById('ability');
let moves = document.getElementById('moves');
let img = document.querySelector('img');

fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
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