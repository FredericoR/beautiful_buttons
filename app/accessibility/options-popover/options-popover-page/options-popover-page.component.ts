import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { AccessibilityService } from '../../accessibility.service';
import { OptionsService } from '../../../options.service';

@Component({
  selector: 'app-options-popover-page',
  templateUrl: './options-popover-page.component.html',
  styleUrls: ['./options-popover-page.component.css']
})
export class OptionsPopoverPageComponent implements OnInit {

  // main options
  options = this.optionsService.options;

  font = this.accessibilityService.font;
  sizeNames = this.font.size.sizeNames;
  constructor( 
    public viewCtrl: ViewController,
    private optionsService: OptionsService,
    private accessibilityService: AccessibilityService,
    ) { }

  ngOnInit() {
  }

  changeTextSize(size: string) {
    this.accessibilityService.setFontSizeByName(size);
  }  
  
  close() { 
    this.viewCtrl.dismiss();
  }
}