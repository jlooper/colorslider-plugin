import {topmost} from 'ui/frame';
import {ContentView} from 'ui/content-view';
import {Color} from 'color';
/*
orientation: String;
    previewEnabled: Boolean;
    borderWidth: Number;
    borderColor: String;
    width: Number;
    height: Number;
    */
declare var ColorSlider: any, CGRectMake: any, UIControlEvents: any, interop: any;

export class Slider extends ContentView {

  public static colorChangeEvent = 'changedColor';

  private _ios: any = ColorSlider;
  private _sliderHandler: NSObject;

  constructor() {
    super();
    this._ios = new ColorSlider();
    this._ios.frame = CGRectMake(0, 0, 12, 150);
    this._sliderHandler = SliderHandlerImpl.initWithOwner(new WeakRef(this));
    this._ios.addTargetActionForControlEvents(this._sliderHandler, 'changedColor', UIControlEvents.UIControlEventValueChanged);
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

class SliderHandlerImpl extends NSObject {

  private _owner: WeakRef<Slider>;

  public static initWithOwner(owner: WeakRef<Slider>): SliderHandlerImpl {
    let impl = <SliderHandlerImpl>SliderHandlerImpl.new();
    impl._owner = owner;
    return impl;
  }

  

  public changedColor(sender: any) {
    let owner = this._owner.get();
    console.log('Selected Color: ' + sender.color);
    owner.notify({ eventName: Slider.colorChangeEvent, object: owner, color: sender.color })
  }

  
  public static ObjCExposedMethods = {
    'changedColor': { returns: interop.types.void, params: [ColorSlider] }
  }

}