import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
}
)
export class FormComponent {
  input1!: number;
  input2!: number;
  options = ['Elija una opcion','Suma','Resta','Multiplicacion','Division'];
  option= this.options[0];

}
