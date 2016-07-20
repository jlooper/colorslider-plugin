import {Observable} from 'data/observable';
import {ColorSlider} from 'nativescript-colorslider';

export class HelloWorldModel extends Observable {
  public message: string;
  private colorSlider: ColorSlider;

  constructor() {
    super();

    this.colorSlider = new ColorSlider();
    this.colorSlider.initSlider();
    this.message = this.colorSlider.message;
  }
}