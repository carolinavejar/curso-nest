class NewPokemon {
    constructor(
        public readonlyid: number,
        public name: string
    ) {}

    scream () {
        console.log(`${this.name.toUpperCase()} !!!!!!!!!!!!!`);
    }

    speak () {
        console.log(`${this.name} , ${this.name}1`);
    }
}

const MyDecorator = () => {
    return (target: Function) => {
        // console.log(target);
        return NewPokemon
    }
}

@MyDecorator()

export class Pokemon {
    constructor(
        public readonlyid: number,
        public name: string
    ) {}

    scream () {
        console.log(`${this.name.toUpperCase()} !!!`);
    }

    speak () {
        console.log(`${this.name} , ${this.name}`);
    }
}

export const charmander = new Pokemon(4, "charmander")

charmander.scream()
charmander.speak()