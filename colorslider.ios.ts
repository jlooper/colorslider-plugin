import {topmost} from 'ui/frame';
import {ContentView} from 'ui/content-view';

declare var Slider: any, UIApplication: any, CGRectMake: any;

export class ColorSlider extends ContentView {
 
 private _ios: Slider;

  constructor() {
    super();
    this._ios = new Slider(CGRectMake(0, 0, 12, 150));
    topmost().ios.controller.view.addSubview(this._ios); 
  }   
}
