import axios from 'axios';

export interface HttpAdapter {
    get<T>( url: string ) : Promise <T>
}

export class PokeApiFetchAdapter implements HttpAdapter {
    async get<T>( url: string ):Promise <T> {     
        console.log("fetch");  
        const resp = await fetch(url);
        const data  = await resp.json()
        console.log(data);
        return data;
    }
}

export class PokeApiAdapter implements HttpAdapter  {
    async get<T>( url: string ) {
        console.log("axios");
        
        const { data } = await axios.get<T>(url);
        console.log(data);
        
        return data;
    }

    async post (url: string ) {
        return;
    }

    async patch (url: string ) {
        return;
    }

    async delete (url: string ) {
        return;
    }
}