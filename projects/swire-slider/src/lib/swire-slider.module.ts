import { NgModule } from '@angular/core';
import { SwireSliderComponent } from './swire-slider.component';
import {MatSliderModule} from '@angular/material/slider';
@NgModule({
  declarations: [SwireSliderComponent],
  imports: [
    MatSliderModule
  ],
  exports: [SwireSliderComponent, MatSliderModule]
})
export class SwireSliderModule { }
