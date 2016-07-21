import {topmost} from 'ui/frame';
import {ContentView} from 'ui/content-view';

/*
will this work, as it's a swift cocoapod?
let colorSlider = ColorSlider()
colorSlider.frame = CGRectMake(0, 0, 12, 150)
view.addSubview(colorSlider)
*/

declare var ColorSlider: any, CGRectMake: any;

export class Slider extends ContentView {
 
 private _ios: any = ColorSlider;

    get ios(): any {
        return this._ios;
    }

    get _nativeView(): any {
        return this._ios;
    }

  constructor() {
    super();
    this._ios.frame = ColorSlider.initWithFrame(CGRectMake(0, 0, 12, 150));
    topmost().ios.controller.view.addSubview(ColorSlider); 
  }   
}