import axios from "axios";
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {
    // public id: number;
    // public name: string;
    // constructor(id: number, name:string) {
    //     this.id = id;
    //     this.name = name
    // }

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`
    }
    constructor(
        public id: number,
        public name:string
    ) { }
    scream() {
        console.log(`${this.name.toUpperCase()} !!!`);
    }

    async getMoves(): Promise<Move[]> {
        // const 10;
        const { data } = await axios.get<PokeapiResponse>("https://pokeapi.co/api/v2/pokemon/4");
        console.log(data.moves);
        return data.moves;
    }

}


// add readonly on vars to not write them
export const charmander = new Pokemon(4, "charmander --");

console.log(charmander);
charmander.getMoves();

