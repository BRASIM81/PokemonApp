let char = document.getElementById('char');
fetch('https://pokeapi.co/api/v2/pokemon/?offset=200&limit=200')
	.then(res => res.json())
	.then(data =>{
		console.log(data);
		let pokemonName = '';
		data.results.forEach(a =>{
			pokemonName += '<li><a href="'+a.url+'">'+a.name+'</a></li>';
		})
		char.innerHTML = pokemonName;
	})