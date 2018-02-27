import { Injectable, Input } from '@angular/core';

@Injectable()
export class OptionsService {

  @Input()
  options = {
    stairs: true,
    elevator: true,
    doorOpener: false,
  }

  constructor() { }

}