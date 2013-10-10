//Form JS File
function addWidgetsfrmImgCrop() {
    var labelChkBox = new kony.ui.Label({
        "id": "labelChkBox",
        "isVisible": true,
        "text": "Crop",
        "skin": "lblTitleNewSPA"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
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
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxChkBox.add(
    labelChkBox);
    var labelDesc = new kony.ui.Label({
        "id": "labelDesc",
        "isVisible": true,
        "text": "Image cropped as image size is larger than image widget size",
        "skin": "skinLblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 6, 4, 5],
        "padding": [2, 2, 2, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {});
    var linetop = new kony.ui.Line({
        "id": "linetop",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "paddingInPixel": false
    }, {});
    var imgCrop = new kony.ui.Image2({
        "id": "imgCrop",
        "isVisible": true,
        "src": "koala_250x200.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_CROP,
        "referenceWidth": 200,
        "referenceHeight": 100,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {});
    var labelno = new kony.ui.Label({
        "id": "labelno",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {});
    var hboxmain = new kony.ui.Box({
        "id": "hboxmain",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 36,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [4, 4, 4, 4],
        "padding": [2, 0, 2, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxmain.add(
    imgCrop, labelno);
    var linebottom = new kony.ui.Line({
        "id": "linebottom",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "paddingInPixel": false
    }, {});
    frmImgCrop.add(
    hboxChkBox, labelDesc, linetop, hboxmain, linebottom);
};

function frmImgCropGlobals() {
    var MenuId = [];
    frmImgCrop = new kony.ui.Form2({
        "id": "frmImgCrop",
        "title": "Crop",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmImgCrop
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