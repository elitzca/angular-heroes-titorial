import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';         // Angular CLI automatically imported 'HeroesComponent'
import {FormsModule} from '@angular/forms';     // 3.2  add this import, NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent               //Angular CLI automatically declared 'The HeroesComponent' in the @NgModule.declarations array
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule               // 3.2 Then add 'FormsModule' to the @NgModule metadata's imports array, which contains a list of external modules that the app needs.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
