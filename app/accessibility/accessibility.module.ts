import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { MyApp } from '../app.component';

import { AccessibilityService } from './accessibility.service';
import { OptionsPopoverComponent } from './options-popover/options-popover.component';
import { OptionsPopoverPageComponent } from './options-popover/options-popover-page/options-popover-page.component';
import { AccessibleDirective } from './accessible.directive';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(MyApp)
  ],
  declarations: [OptionsPopoverComponent, OptionsPopoverPageComponent, AccessibleDirective],
  providers: [AccessibilityService],
  entryComponents: [OptionsPopoverPageComponent],
  exports: [OptionsPopoverComponent, OptionsPopoverPageComponent, AccessibleDirective]
})
export class AccessibilityModule { }