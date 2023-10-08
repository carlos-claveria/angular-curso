import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { AddPersonajeComponent } from './components/add-personaje/add-personaje.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AddPersonajeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
