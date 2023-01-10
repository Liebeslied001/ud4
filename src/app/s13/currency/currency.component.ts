import { Component } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
  val!: number;
  options = ['Elija una opcion','USD','EUR'];
  option= this.options[0];
}
