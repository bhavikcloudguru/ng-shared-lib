import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SwireSliderModule } from 'swire-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { SwireSliderModule } from '../../../swire-slider/src/lib/swire-slider.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SwireSliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
