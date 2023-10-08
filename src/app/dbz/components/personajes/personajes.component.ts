import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  
  @Input() 
  public characterList : Character[] = []

  @Output()
  public onDeleteId : EventEmitter<string> = new EventEmitter();

  onDelCharacter(id : string) : void {
    this.onDeleteId.emit(id);
  }
}
