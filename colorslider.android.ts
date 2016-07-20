import {Property, PropertyMetadataSettings, PropertyChangeData} from "ui/core/dependency-observable";
import {PropertyMetadata} from "ui/core/proxy";
import { ContentView } from "ui/content-view";
import * as color from "color";




function onShowAlphaBarPropertyChanged(data: PropertyChangeData) {
    var showAlphaBar = <ColorSlider>data.object;
    showAlphaBar._showAlphaUpdate(data.newValue ? data.newValue : null);
}

function onBarHeightPropertyChanged(data: PropertyChangeData) {
    var barHeight = <ColorSlider>data.object;
    barHeight._barHeightUpdate(data.newValue ? data.newValue : null);
}

function onThumbHeightPropertyChanged(data: PropertyChangeData) {
    var thumbHeight = <ColorSlider>data.object;
    thumbHeight._thumbHeightUpdate(data.newValue ? data.newValue : null);
}



export class ColorSlider extends ContentView {
    private static maxProperty = new Property("max", "ColorSlider", new PropertyMetadata(undefined, PropertyMetadataSettings.None));
    private static colorsProperty = new Property("colors", "ColorSlider", new PropertyMetadata(undefined, PropertyMetadataSettings.None));
    private static colorBarProperty = new Property("colorBar", "ColorSlider", new PropertyMetadata(undefined, PropertyMetadataSettings.None));
    private static alphaBarProperty = new Property("alphaBar", "ColorSlider", new PropertyMetadata(undefined, PropertyMetadataSettings.None));
    private static showAlphaBarProperty = new Property("showAlphaBar", "ColorSlider", new PropertyMetadata(undefined, PropertyMetadataSettings.None, onShowAlphaBarPropertyChanged));
    private static barHeightProperty = new Property("barHeight", "ColorSlider", new PropertyMetadata(undefined, PropertyMetadataSettings.None, onBarHeightPropertyChanged));
    private static thumbHeightProperty = new Property("thumbHeight", "ColorSlider", new PropertyMetadata(undefined, PropertyMetadataSettings.None, onThumbHeightPropertyChanged));
    private static barMarginProperty = new Property("barMargin", "ColorSlider", new PropertyMetadata(undefined, PropertyMetadataSettings.None));
    private _android: com.rtugeek.android.colorseekbar.ColorSeekBar;
    public static colorChangeEvent = "colorChange";
    constructor() {
        super();
    }

    get max() {
        return this._getValue(ColorSlider.maxProperty);
    }
    set max(value: number) {
        this._setValue(ColorSlider.maxProperty, value);
    }

    get colors() {
        return this._getValue(ColorSlider.colorsProperty);
    }

    set colors(value: Array<any>) {
        const colorArray = value.map((item) => { return new color.Color(item).android });
        this._setValue(ColorSlider.colorsProperty, colorArray);
    }
    get colorBar() {
        return this._getValue(ColorSlider.colorBarProperty);
    }
    set colorBar(value: number) {
        this._setValue(ColorSlider.colorBarProperty, value)
    }
    get alphaBar() {
        return this._getValue(ColorSlider.alphaBarProperty)
    }
    set alphaBar(value: number) {
        this._setValue(ColorSlider.alphaBarProperty, value)
    }
    get showAlphaBar() {
        return this._getValue(ColorSlider.showAlphaBarProperty)
    }
    set showAlphaBar(value: boolean) {
        this._setValue(ColorSlider.showAlphaBarProperty, value)
    }
    get barHeight() {
        return this._getValue(ColorSlider.barHeightProperty)
    }
    set barHeight(value: number) {
        this._setValue(ColorSlider.barHeightProperty, value)
    }
    get thumbHeight() {
        return this._getValue(ColorSlider.thumbHeightProperty)
    }
    set thumbHeight(value: number) {
        this._setValue(ColorSlider.thumbHeightProperty, value)
    }
    get barMargin() {
        return this._getValue(ColorSlider.barMarginProperty)
    }
    set barMargin(value: number) {
        this._setValue(ColorSlider.barMarginProperty, value)
    }

    get android() {
        return this._android;
    }

    get _nativeView() {
        return this._android;
    }

    public _createUI() {
        this._android = new com.rtugeek.android.colorseekbar.ColorSeekBar(this._context);
        if (!this._android) return;
        const that = new WeakRef(this);
        if (this.max) {
            this._android.setMaxValue(this.max);
        }

        if (this.colors) {
            this._android.setColors(this.colors);
        }
        if (this.colorBar) {
            this._android.setColorBarValue(this.colorBar);
        }
        if (this.alphaBar) {
            this._android.setAlphaBarValue(this.alphaBar);
        }
        if (this.showAlphaBar) {
            this._android.setShowAlphaBar(this.showAlphaBar);
        }
        if (this.barHeight) {
            this._android.setBarHeight(this.barHeight);
        }
        if (this.thumbHeight) {
            this._android.setThumbHeight(this.thumbHeight);
        }
        if (this.barMargin) {
            this._android.setBarMargin(this.barMargin);
        }

        this._android.setOnColorChangeListener(new com.rtugeek.android.colorseekbar.ColorSeekBar.OnColorChangeListener({
            getOwner() {
                return that.get();
            },
            onColorChangeListener: function (colorBarValue, alphaBarValue, color) {
                const owner = that.get();
                if (owner) {
                    owner.notify({ eventName: ColorSlider.colorChangeEvent, object: owner, colorBar: colorBarValue, alphaBar: alphaBarValue, color: color })
                }
            }
        }))
    }

    public _showAlphaUpdate(data) {
        if (!this._android) return;
        this._android.setShowAlphaBar(data);
    }
    public _barHeightUpdate(data) {
        if (!this._android) return;
        this._android.setBarHeight(data);
    }
    public _thumbHeightUpdate(data) {
        if (!this._android) return;
        this._android.setThumbHeight(data);
    }
}


