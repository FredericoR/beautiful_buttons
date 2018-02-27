import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OptionsService } from '../../app/options.service';

@Component({
  selector: 'page-contact',
  templateUrl: 'info.html'
})
export class InfoPage {

  options = this.optionsService.options;
  
  constructor(
    public navCtrl: NavController,
    private optionsService: OptionsService
    ) {

  }

}
