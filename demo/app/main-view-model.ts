import {Observable} from 'data/observable';
import {ObservableArray} from "data/observable-array"

export class HelloWorldModel extends Observable {
  //android
  colorList;
  thumbHeight: number;
  showAlphaBar: boolean;
  alphaBar:number;
  //ios
  orientation: string;
  borderWidth: number;
  previewEnabled: boolean;
  width: number;
  height: number;
  constructor() {
    super();
    //android
    this.thumbHeight = 50;
    this.alphaBar = 0;
    this.showAlphaBar = true;
    this.colorList = new ObservableArray(["#F44336", "#9C27B0", "#3F51B5", "#03A9F4", "#009688", "#8BC34A", "#FFEB3B", "#FF9800", "#795548", "#607D8B"]);
    //ios
    this.orientation = ".Vertical";
    this.borderWidth = 2;
    this.previewEnabled = true;
    this.height = 150;
    this.width = 12;
    

  }
}