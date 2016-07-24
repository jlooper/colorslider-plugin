import {topmost} from 'ui/frame';
import {ContentView} from 'ui/content-view';
import {Color} from "color";
/*
orientation: String;
    previewEnabled: Boolean;
    borderWidth: Number;
    borderColor: String;
    */
declare var ColorSlider: any, CGRectMake: any;

export class Slider extends ContentView {
 
  private _ios: any = ColorSlider;

  public static colorChangeEvent = "changedColor";
    
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
  
  set orientation(value: string) {
    this._ios.orientation = +value;
  }

  set previewEnabled(value: boolean) {
    this._ios.previewEnabled = +value;
  }

  set borderWidth(value: number) {
    this._ios.borderWidth = +value;
  }

  
}