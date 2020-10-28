const container = document.querySelector('.container');

fetch('https://pokeapi.co/api/v2/pokemon/arcanine')
.then(response => {
    if (response.ok) {
        return response.json();
    }
})
.then(pokemon => {
    const arcanine = {
        ability: pokemon.abilities[0].ability.name,
        height: pokemon.height,
        weight: pokemon.weight,
        name: pokemon.name,
        move: pokemon.moves[9].move.name,
        image: pokemon.sprites.other['official-artwork']['front_default'],
        purchaseLink: 'https://www.google.com/aclk?sa=l&ai=DChcSEwiN1MGE4tfsAhUDh4YKHTfaAtkYABAGGgJ2dQ&sig=AOD64_18jC0relu4gK6AgDy9L47MB8CoyA&adurl&ctype=5&ved=2ahUKEwjykLSE4tfsAhVEIt8KHRpeC5IQvhd6BAgBEDE'
    }
    
    const arcanineCard = makePokemonCard(arcanine);
    container.appendChild(arcanineCard);
})
.catch(error => {
    console.log(error);
})
function makePokemonCard(pokemon) {
    //create a div element, add a class and add style
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
    
        //create an image tag, add class, add source add alt
    const image = document.createElement('img');
    image.classList.add('card-img-top');
    image.setAttribute('src', pokemon.image);
    image.setAttribute('alt', `This is ${pokemon.name}`);
        //append image to the card div
    card.appendChild(image);

        //creat div, add class
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
            //create h5 element, add a class, add text
    const nameElement = document.createElement('h5');
    nameElement.classList.add('card-title');
    nameElement.textContent = pokemon.name;
            //create p tag, add class, add text
    const heightWeight = document.createElement('p');
    heightWeight.classList.add('card-text');
    heightWeight.textContent = `Height: ${pokemon.height}, Weight: ${pokemon.weight}`;
    
    const move = document.createElement('p');
    move.classList.add('card-text');
    move.textContent = pokemon.move;
    
    const ability = document.createElement('p');
    ability.classList.add('card-text');
    ability.textContent = pokemon.ability;
            //create a tag, add 2 classes, add href, add text
    const purchaseLink = document.createElement('a');
    purchaseLink.classList.add('btn', 'btn-primary');
    purchaseLink.setAttribute('href', pokemon.purchaseLink);
    purchaseLink.textContent = `Buy ${pokemon.name} card`;       
            //append to card-body div
    cardBody.appendChild(nameElement);
    cardBody.appendChild(heightWeight);
    cardBody.appendChild(move);
    cardBody.appendChild(ability);
    cardBody.appendChild(purchaseLink);
        //append card-body div to card
    card.appendChild(cardBody);
    
    return card;
    //append card div to container div


}
// {/* <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div> */}