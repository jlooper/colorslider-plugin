import * as observable from 'data/observable';
import * as pages from 'ui/page';
import {HelloWorldModel} from './main-view-model';
var page;
// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function colorChange(args) {
    //page.bindingContext.set()
    console.log(args.colorBar)
    console.log(args.color)
    console.log(args.alphaBar)
}