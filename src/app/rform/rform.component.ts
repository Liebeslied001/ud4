import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder){}

  ngOnInit(): void {
    this.contactForm = this.initForm();
    //this.onPatchValue();
    //this.onSetValue();
  }

  onPatchValue():void{
    this.contactForm.patchValue({name: 'Joseph'})
  }

  onSetValue():void{
    this.contactForm.setValue({Comment: 'Hola Mundo'})
  }

  onSubmit(): void{
    console.log('Form ->')
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      checkAdult: ['', [Validators.required]],
      department: [''],
      comment: ['', [Validators.required]],
    })
  }

}
