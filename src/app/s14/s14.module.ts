import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { FatherComponent } from './father/father.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ChildComponent,
    FatherComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ChildComponent,
    FatherComponent
  ]
})
export class S14Module { }
