//Form JS File
function frmOptions_btnOne_onClick_seq0(eventobject) {
    navigateToFrmImgFitToDimensions.call(this);
};

function frmOptions_btnThree_onClick_seq0(eventobject) {
    navigateToFrmImgCrop.call(this);
};

function frmOptions_btnTwo_onClick_seq0(eventobject) {
    navigateToFrmImgMaintainAspectRation.call(this);
};

function frmOptions_btnFour_onClick_seq0(eventobject) {
    navigateToURLBasedImage.call(this);
};

function addWidgetsfrmOptions() {
    var hboxChkBox = new kony.ui.Box({
        "id": "hboxChkBox",
        "isVisible": true,
        "skin": "titleBarHBoxSkin",
        "focusSkin": "titleBarHBoxSkin",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxChkBox.add();
    var labeldesc = new kony.ui.Label({
        "id": "labeldesc",
        "isVisible": true,
        "text": "Different scale mode options of image widget",
        "skin": "skinLblHome"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [7, 0, 5, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 7
    }, {});
    var image2158854410239725 = new kony.ui.Image2({
        "id": "image2158854410239725",
        "isVisible": true,
        "src": "koala_250x200.png",
        "imageWhenFailed": "error_loading.png",
        "imageWhileDownloading": "download.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 73
    }, {});
    var btnOne = new kony.ui.Button({
        "id": "btnOne",
        "isVisible": true,
        "text": "Fit to dimensions",
        "skin": "sknBtnW8",
        "focusSkin": "sknBtnW8focus",
        "onClick": frmOptions_btnOne_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [15, 0, 15, 0],
        "padding": [1, 2, 1, 2],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 27
    }, {});
    var vbox158854410239721 = new kony.ui.Box({
        "id": "vbox158854410239721",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox158854410239721.add(
    image2158854410239725, btnOne);
    var hbox158854410239712 = new kony.ui.Box({
        "id": "hbox158854410239712",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 48,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox158854410239712.add(
    vbox158854410239721);
    var image2158854410239727 = new kony.ui.Image2({
        "id": "image2158854410239727",
        "isVisible": true,
        "src": "koala_250x200.png",
        "imageWhenFailed": "error_loading.png",
        "imageWhileDownloading": "download.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 76
    }, {});
    var btnThree = new kony.ui.Button({
        "id": "btnThree",
        "isVisible": true,
        "text": "Crop",
        "skin": "sknBtnW8",
        "focusSkin": "sknBtnW8focus",
        "onClick": frmOptions_btnThree_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [15, 0, 15, 0],
        "padding": [1, 2, 1, 2],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 24
    }, {});
    var vbox158854410239724 = new kony.ui.Box({
        "id": "vbox158854410239724",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox158854410239724.add(
    image2158854410239727, btnThree);
    var hbox158854410239713 = new kony.ui.Box({
        "id": "hbox158854410239713",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 52,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox158854410239713.add(
    vbox158854410239724);
    var vbox158854410239709 = new kony.ui.Box({
        "id": "vbox158854410239709",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 30,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox158854410239709.add(
    hbox158854410239712, hbox158854410239713);
    var image2158854410239726 = new kony.ui.Image2({
        "id": "image2158854410239726",
        "isVisible": true,
        "src": "koala_250x200.png",
        "imageWhenFailed": "error_loading.png",
        "imageWhileDownloading": "download.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 73
    }, {});
    var btnTwo = new kony.ui.Button({
        "id": "btnTwo",
        "isVisible": true,
        "text": "Maintain aspect ratio",
        "skin": "sknBtnW8",
        "focusSkin": "sknBtnW8focus",
        "onClick": frmOptions_btnTwo_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [15, 0, 15, 0],
        "padding": [1, 2, 1, 2],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 27
    }, {});
    var vbox158854410239722 = new kony.ui.Box({
        "id": "vbox158854410239722",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox158854410239722.add(
    image2158854410239726, btnTwo);
    var hbox158854410239714 = new kony.ui.Box({
        "id": "hbox158854410239714",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 48,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox158854410239714.add(
    vbox158854410239722);
    var image2158854410239728 = new kony.ui.Image2({
        "id": "image2158854410239728",
        "isVisible": true,
        "src": "koala_250x200.png",
        "imageWhenFailed": "error_loading.png",
        "imageWhileDownloading": "download.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 75
    }, {});
    var btnFour = new kony.ui.Button({
        "id": "btnFour",
        "isVisible": true,
        "text": "URL based images",
        "skin": "sknBtnW8",
        "focusSkin": "sknBtnW8focus",
        "onClick": frmOptions_btnFour_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [15, 0, 15, 0],
        "padding": [1, 2, 1, 2],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 25
    }, {});
    var vbox158854410239723 = new kony.ui.Box({
        "id": "vbox158854410239723",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox158854410239723.add(
    image2158854410239728, btnFour);
    var hbox158854410239715 = new kony.ui.Box({
        "id": "hbox158854410239715",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 52,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox158854410239715.add(
    vbox158854410239723);
    var vbox158854410239710 = new kony.ui.Box({
        "id": "vbox158854410239710",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 30,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox158854410239710.add(
    hbox158854410239714, hbox158854410239715);
    var vbox158854410239711 = new kony.ui.Box({
        "id": "vbox158854410239711",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox158854410239711.add();
    var hbox158854410239708 = new kony.ui.Box({
        "id": "hbox158854410239708",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 49,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox158854410239708.add(
    vbox158854410239709, vbox158854410239710, vbox158854410239711);
    frmOptions.add(
    hboxChkBox, labeldesc, hbox158854410239708);
};

function frmOptionsGlobals() {
    var MenuId = [];
    frmOptions = new kony.ui.Form2({
        "id": "frmOptions",
        "title": "Image Options",
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "needAppMenu": true,
        "addWidgets": addWidgetsfrmOptions
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "maxAppMenuButtons": 4,
        "layout": constants.Vertical,
        "titleBar": true,
        "showBackButton": true,
        "directChildrenIDs": ["hboxChkBox", "labeldesc", "hbox158854410239708", "vbox158854410239709", "hbox158854410239712", "vbox158854410239721", "image2158854410239725", "btnOne", "hbox158854410239713", "vbox158854410239724", "image2158854410239727", "btnThree", "vbox158854410239710", "hbox158854410239714", "vbox158854410239722", "image2158854410239726", "btnTwo", "hbox158854410239715", "vbox158854410239723", "image2158854410239728", "btnFour", "vbox158854410239711"],
        "viewConfig": {
            "referenceHeight": 0,
            "referenceWidth": 0
        }
    });
};