import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'lib-swire-slider',
  template: `
    <div style="width: 300px;height: 100px;">
    <div
  class="slider-component"
>
  <input type="text" readonly  matInput />

  <mat-slider
    #sliderInternal
    class="slider"
    (input)="2"
    [value]="1"
    [max]="8"
    [min]="4"
    [step]="1 / 10"
  >
  </mat-slider>
</div>
    </div>
  `,
  styleUrls: ['./swire-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwireSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }


}
