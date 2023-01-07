import { Injectable } from '@angular/core';
import {POKEMONS} from "./mock-pokemon-list";
import {Pokemon} from "./pokemon";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";

@Injectable()
export class PokemonService {

    constructor(private http : HttpClient) {}

  /*getPokemonList(): Observable<Pokemon[]>{
   return this.http.get<Pokemon[]>('api/pokemons').pipe(
       tap((response)=> console.table(response)),
       catchError((error) => {
           console.log(error);
           return of([]);
       })
   )
  }*/

  getPokemonById(pokemonId: number): Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }

  getPokemonTypeList(): string[] {
    return [
        'Plante',
        'Feu',
        'Eau',
        'Insecte',
        'Normal',
        'Electrik',
        'Poison',
        'Fée',
        'Vol',
        'Combat',
        'Psy'
    ];
  }
}
