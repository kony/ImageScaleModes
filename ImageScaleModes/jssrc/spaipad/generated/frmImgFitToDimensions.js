//Form JS File
function addWidgetsfrmImgFitToDimensions() {
    var lblTitleSPA = new kony.ui.Label({
        "id": "lblTitleSPA",
        "isVisible": true,
        "text": "Fit to Dimensions",
        "skin": "titleSkinSPA"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hboxChkBox = new kony.ui.Box({
        "id": "hboxChkBox",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "titleBarHBoxSkin",
        "focusSkin": "titleBarHBoxSkin",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 7,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxChkBox.add(
    lblTitleSPA);
    var labelori = new kony.ui.Label({
        "id": "labelori",
        "isVisible": true,
        "text": "Original Image",
        "skin": "skinLblHome"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "containerWeight": 2
    }, {});
    var labelorisize = new kony.ui.Label({
        "id": "labelorisize",
        "isVisible": true,
        "text": "width=250px ; height=200px",
        "skin": "skinLblHome"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "containerWeight": 2
    }, {});
    var line1 = new kony.ui.Line({
        "id": "line1",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "paddingInPixel": false
    }, {});
    var imgOriginal = new kony.ui.Image2({
        "id": "imgOriginal",
        "isVisible": true,
        "src": "koala_250x200.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [5, 5, 5, 5],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 250,
        "referenceHeight": 200,
        "marginInPixel": false,
        "containerWeight": 10
    }, {});
    var line0 = new kony.ui.Line({
        "id": "line0",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1
    }, {});
    var labelsqu = new kony.ui.Label({
        "id": "labelsqu",
        "isVisible": true,
        "text": "Image Squeezed",
        "skin": "skinLblHome"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "containerWeight": 2
    }, {});
    var labelsqusize = new kony.ui.Label({
        "id": "labelsqusize",
        "isVisible": true,
        "text": "referenceWidth=200px; referenceHeight=100px",
        "skin": "skinLblHome"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "containerWeight": 2
    }, {});
    var line2 = new kony.ui.Line({
        "id": "line2",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 3],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var imgSqueezed = new kony.ui.Image2({
        "id": "imgSqueezed",
        "isVisible": true,
        "src": "koala_250x200.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [6, 4, 6, 4],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 200,
        "referenceHeight": 100,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 20
    }, {});
    var line3 = new kony.ui.Line({
        "id": "line3",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "paddingInPixel": false
    }, {});
    var labelstr = new kony.ui.Label({
        "id": "labelstr",
        "isVisible": true,
        "text": "Image Stretched",
        "skin": "skinLblHome"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "containerWeight": 4
    }, {});
    var labelstrsize = new kony.ui.Label({
        "id": "labelstrsize",
        "isVisible": true,
        "text": "referenceWidth=350px; referenceHeight=300px",
        "skin": "skinLblHome"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "containerWeight": 4
    }, {});
    var line4 = new kony.ui.Line({
        "id": "line4",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "paddingInPixel": false
    }, {});
    var imgStretched = new kony.ui.Image2({
        "id": "imgStretched",
        "isVisible": true,
        "src": "koala_250x200.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [6, 4, 6, 4],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 300,
        "referenceHeight": 300,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 23
    }, {});
    var line5 = new kony.ui.Line({
        "id": "line5",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1
    }, {});
    frmImgFitToDimensions.add(
    hboxChkBox, labelori, labelorisize, line1, imgOriginal, line0, labelsqu, labelsqusize, line2, imgSqueezed, line3, labelstr, labelstrsize, line4, imgStretched, line5);
};

function frmImgFitToDimensionsGlobals() {
    var MenuId = [];
    frmImgFitToDimensions = new kony.ui.Form2({
        "id": "frmImgFitToDimensions",
        "title": "Fit to Dimensions",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmImgFitToDimensions
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "leftCenter"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        }
    });
};