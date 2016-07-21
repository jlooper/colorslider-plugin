import {topmost} from 'ui/frame';
import {ContentView} from 'ui/content-view';

declare var ColorSlider: any, CGRectMake: any;

export class Slider extends ContentView {
 
  private _ios: any = ColorSlider;

  constructor() {
    super();
    this._ios = new ColorSlider();
    this._ios.frame = CGRectMake(0, 0, 12, 150);
  }  

  get ios(): any {
    return this._ios;
  }

  get _nativeView(): any {
    return this._ios;
  } 
}