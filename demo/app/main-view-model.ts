import {Observable} from 'data/observable';
import {ObservableArray} from "data/observable-array"

export class HelloWorldModel extends Observable {
  colorList;
  thumbHeight: number;
  barHeight: number;
  showAlphaBar: boolean;
  alphaBar:number;
  constructor() {
    super();
    this.thumbHeight = 50;
    this.barHeight = 20;
    this.alphaBar = 0;
    this.showAlphaBar = true;
    this.colorList = new ObservableArray(["#F44336", "#9C27B0", "#3F51B5", "#03A9F4", "#009688", "#8BC34A", "#FFEB3B", "#FF9800", "#795548", "#607D8B"])
  }
}