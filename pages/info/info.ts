import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {

  size: number = 15;
  maxSize: number = 19;
  minSize: number = 15;
  increment: number = 1;

  constructor(public navCtrl: NavController) {

  }

  increaseFontSize() : void  {
    console.log("font increased.")
    if (this.size >= this.maxSize) { return };
    this.size = this.size + this.increment;
  };

  decreaseFontSize() : void  {
    console.log("font decreased.")
    if (this.size <= this.minSize) { return };
    this.size = this.size - this.increment;
  };

}
