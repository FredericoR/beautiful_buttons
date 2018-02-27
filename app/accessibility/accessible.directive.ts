import { Directive, HostBinding, Input } from '@angular/core';
import { AccessibilityService } from './accessibility.service';

@Directive({
  selector: '[appAccessible]'
})
export class AccessibleDirective {

  @Input()
  appAccessible: string;
  constructor(
    private accessibilityService: AccessibilityService
    ) {}

  // @Input('appAccessible') size: number;
  // Not Working Dinamically
  @HostBinding('style.font-size.px') fontSize: number;


  // change font size according to the attribute type
  changeFontSize() {
    let size: number;

    if(this.appAccessible == "title") {
      size =  this.accessibilityService.font.size.title;
    } else {
      size =  this.accessibilityService.font.size.current;
    }
    this.fontSize = size;
  }
  
  // this is not optimal, but could not trigger font-size ajustment otherwise
  ngDoCheck() {
    this.changeFontSize();
  }
}