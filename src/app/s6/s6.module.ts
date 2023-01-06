import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ContenidoComponent } from './contenido/contenido.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ContenidoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    ContenidoComponent
  ]
})
export class S6Module { }
