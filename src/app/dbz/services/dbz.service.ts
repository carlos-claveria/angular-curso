import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private charactersList: Character[] = [
    {
        id : '74d2311e-c5be-45ea-9596-14612aac4390',
        name: 'Krillin',
        power: 1000
    },
    {
        id : '556d0d3f-7248-41e5-baf0-6be9c91f6da4',
        name: 'Goku',
        power: 9500
    },
    {
        id : 'f0a6d5d5-b52b-427a-9cf9-c82512e770fe',
        name: 'Vegueta',
        power: 7500
    },];

    get characters() : Character[] {
        return [...this.charactersList]
    }

    addCharacter(character: Character): void {
        if (!this.characters.some(x => x.name == character.name)) this.charactersList.push({ ...character, id: uuid() })
    }

    deleteCharacter(id: string): void {
        this.charactersList = this.charactersList.filter((ch) => ch.id !== id);
    }

}
