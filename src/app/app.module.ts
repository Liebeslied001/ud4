import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HeadComponent } from './head/head.component';
import { ResultComponent } from './result/result.component';
import { S6Module } from './s6/s6.module';
import { FocusDirective } from './focus.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TformComponent } from './tform/tform.component';
import { RformComponent } from './rform/rform.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeadComponent,
    ResultComponent,
    FocusDirective,
    TformComponent,
    RformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    S6Module,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
