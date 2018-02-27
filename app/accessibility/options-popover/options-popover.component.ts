import { Component, OnInit } from '@angular/core';
import { PopoverController } from 'ionic-angular';

import { OptionsPopoverPageComponent } from './options-popover-page/options-popover-page.component';

import { AccessibilityService } from '../accessibility.service';

@Component({
  selector: 'app-options-popover',
  templateUrl: './options-popover.component.html',
  styleUrls: ['./options-popover.component.scss']
})
export class OptionsPopoverComponent implements OnInit {
  
  // show font size buttons on header
  fontSizeButtons = true;

  // show options popover
  showOptionsButton = true;

  constructor(
    private accessibilityService: AccessibilityService,
    private popoverController: PopoverController,
    ) { }

  ngOnInit() {
  }

  showOptions(event) {
    let popover = this.popoverController.create(OptionsPopoverPageComponent);
    popover.present({
      ev: event,
    })
  }

  biggerFont() {
    this.accessibilityService.increaseFontSize();
  }
  smallerFont() {
    this.accessibilityService.decreaseFontSize();
  }

}