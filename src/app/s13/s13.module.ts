import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercaseComponent } from './uppercase/uppercase.component';
import { CurrencyComponent } from './currency/currency.component';
import { DateComponent } from './date/date.component';
import { FormsModule } from '@angular/forms';
import { TimeAgoPipe } from './time-ago.pipe';



@NgModule({
  declarations: [
    UppercaseComponent,
    CurrencyComponent,
    DateComponent,
    TimeAgoPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CurrencyComponent,
    DateComponent,
    UppercaseComponent
  ]
})
export class S13Module { }
