import { Injectable, Input } from '@angular/core';

@Injectable()
export class AccessibilityService {

  @Input()
  font = { 
    size: {
    increment: 1,
    current: 15,
    min: 15,
    max: 22,
    normal: 15,
    big: 17,
    bigger: 18,
    large: 20,
    sizeNames: [ 'normal', 'big', 'bigger', 'large'],
    title: 20,
    //h1 ... h6, a, etc...
    },
  };

  constructor() { }

  increaseFontSize() : void  {
    let currentSize = this.font.size.current;
  	
    if (currentSize >= this.font.size.max) { return };
  	currentSize = currentSize + this.font.size.increment;
    this.updateFontSizes(currentSize);

  	console.log("font increased.")
  };

  decreaseFontSize() : void  {
    let currentSize = this.font.size.current;
  	
    if (currentSize <= this.font.size.min) { return };
  	currentSize = currentSize - this.font.size.increment;
    this.updateFontSizes(currentSize);

  	console.log("font decreased.")
  };

  setFontSizeByName(sizeName: string) {

    let currentSize = this.font.size.current;
  	console.log(`font size set to: ${sizeName}.`);
    currentSize = this.font.size[sizeName];
    this.updateFontSizes(currentSize);
  }

  // updates all font sizes, add new as needed
  updateFontSizes(size: number) {
    this.font.size.current = size;
    this.font.size.title = size + 5;
  }
}