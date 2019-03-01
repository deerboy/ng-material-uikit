import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialPopularUikitModule } from 'material-popular-uikit';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MaterialPopularUikitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
