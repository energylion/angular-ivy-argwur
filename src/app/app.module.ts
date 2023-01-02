import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ListaComponent } from './Lista/lista/lista.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,ListaComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
