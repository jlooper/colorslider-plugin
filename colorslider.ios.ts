import {topmost} from 'ui/frame';
import {ContentView} from 'ui/content-view';

declare var Slider: any, UIApplication: any, CGRectMake: any;

export class ColorSlider extends ContentView {
 
 private _ios: any = Slider;

    get ios(): any {
        return this._ios;
    }

    get _nativeView(): any {
        return this._ios;
    }

  constructor() {
    super();
    this._ios = new Slider(CGRectMake(0, 0, 12, 150));
    topmost().ios.controller.view.addSubview(this._ios); 
  }   
}