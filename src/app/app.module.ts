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
import { S13Module } from './s13/s13.module';
import { S14Module } from './s14/s14.module';

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
    S13Module,
    S14Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
