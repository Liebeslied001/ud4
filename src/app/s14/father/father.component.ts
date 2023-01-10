import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
interface userForm{
  "name": string;
  "dni": string;
  "state": string;
}

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit{

  user = {
    name: '',
    dni: '',
    state: ''
  }

  constructor(){}
  
  ngOnInit(): void {
    
  }
  
  onSubmit(form: NgForm): void{
    console.log(form.value)
  }
}
