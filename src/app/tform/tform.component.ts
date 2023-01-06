import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
interface ContactForm{
  "name": string;
  "checkAdult": boolean;
  "area": string;
  "comment": string;
}



@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent implements OnInit {

  model={
    name: '',
    checkAdult: true,
    area: '',
    comment: ''
  }

  constructor(){}
  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm): void{
    console.log('Form values: ', form.value)
  }
}
