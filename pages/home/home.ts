import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AccessibilityService } from '../../app/accessibility/accessibility.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  font = this.accessibilityService.font;
  constructor(
    public navCtrl: NavController,
    private accessibilityService: AccessibilityService) {

  }

}
