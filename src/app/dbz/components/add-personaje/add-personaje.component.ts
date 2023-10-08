import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

const valorInicial : Character = {
  id : '',
  name : '',
  power: 0
} 

@Component({
  selector: 'app-dbz-addpersonaje',
  templateUrl: './add-personaje.component.html',
  styleUrls: ['./add-personaje.component.css']
})
export class AddPersonajeComponent {

  @Output()
  public onNewCharacter : EventEmitter<Character> = new EventEmitter();
  // OJO: !!!!!!!!!!!!!!!!!!!!!!!!!!
  // Si no desestructuro character toma la referencia de valorInicial y aunque sea una constante se actualizará con el valor de charcater
  public character : Character  = {...valorInicial};

  emitCharacter() : void {
    if (this.character.name.length == 0) return;
    
    this.onNewCharacter.emit(this.character);
    this.character = {...valorInicial};

  }

  
}
