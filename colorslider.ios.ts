import {topmost} from 'ui/frame';
import {ContentView} from 'ui/content-view';

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
    this._ios = new ColorSlider();
    this._ios.frame = CGRectMake(0, 0, 12, 150);
    // this._ios.frame = ColorSlider.alloc().initWithFrame(CGRectMake(0, 0, 12, 150));
    // topmost().ios.controller.view.addSubview(slider); 
    // console.log(ColorSlider);
    // if (ColorSlider) {
    //   for (let key in ColorSlider) {
    //     console.log(key);
    //   }
    // }
  }   
}