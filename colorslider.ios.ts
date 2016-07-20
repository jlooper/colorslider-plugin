import {topmost} from 'ui/frame';

declare var CGRectMake: any;

export class ColorSlider {

 private _colorSlider: any;
 
  constructor(imageName: string, hexColor: string) {
    this._colorSlider.frame = CGRectMake(0, 0, 12, 150);
  }

   
  public initSlider() {
    topmost().ios.controller.view.addSubview(this._colorSlider); 
  }

}
