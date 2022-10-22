export const pokemonsId = [1,2,4];

interface Pokemon {
    id: number;
    name: string;
    age?: number 
};

export const pokemon: Pokemon = {
    id: 1, 
    name: 'Bulbasaur'
};


export const pokemons: Pokemon[] = []
pokemons.push(pokemon)
