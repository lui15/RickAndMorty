import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { environment } from '@environment/environment';
import { constants } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http:HttpClient) { }
  searchCharacter(query = '',page = 1){

    const filter = `${environment.baseUrlApi}/?name=${query}&page=${page}`;
    return this.http.get<Character[]>(filter)
  }
  getDetails(id:number){
    return this.http.get<Character>(`${environment.baseUrlApi}/${id}`)
  }
}
