//Form JS File
function addWidgetsfrmURLBasedImage() {
    var hboxChkBox = new kony.ui.Box({
        "id": "hboxChkBox",
        "isVisible": true,
        "skin": "titleBarHBoxSkin",
        "focusSkin": "titleBarHBoxSkin",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 14,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxChkBox.add();
    var image21587501417120099 = new kony.ui.Image2({
        "id": "image21587501417120099",
        "isVisible": true,
        "src": "http://www.kony.com/themes/kony/images/logo_small.png",
        "imageWhenFailed": "error_loading.png",
        "imageWhileDownloading": "download.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": 300,
        "referenceHeight": 300,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vboximg = new kony.ui.Box({
        "id": "vboximg",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 30,
        "margin": [0, 1, 0, 1],
        "padding": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboximg.add(
    image21587501417120099);
    var labelori = new kony.ui.Label({
        "id": "labelori",
        "isVisible": true,
        "text": "Original image size is 300X300(Pixels)",
        "skin": "skinLblHome"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 5, 25, 5],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 33
    }, {});
    var vbxLblcontainer = new kony.ui.Box({
        "id": "vbxLblcontainer",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 29,
        "margin": [0, 1, 0, 1],
        "padding": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxLblcontainer.add(
    labelori);
    var imageFtDim = new kony.ui.Image2({
        "id": "imageFtDim",
        "isVisible": true,
        "src": "http://www.kony.com/themes/kony/images/logo_small.png",
        "imageWhenFailed": "error_loading.png",
        "imageWhileDownloading": "download.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 5, 0, 5],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 200,
        "referenceHeight": 100,
        "marginInPixel": false,
        "containerWeight": 100
    }, {});
    var vbximg = new kony.ui.Box({
        "id": "vbximg",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 16,
        "margin": [0, 1, 0, 1],
        "padding": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbximg.add(
    imageFtDim);
    var labelfit = new kony.ui.Label({
        "id": "labelfit",
        "isVisible": true,
        "text": "FIT TO DIMENTIONS",
        "skin": "skinLblHome"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 5, 25, 5],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 18
    }, {});
    var labelfitsize = new kony.ui.Label({
        "id": "labelfitsize",
        "isVisible": true,
        "text": "reference Width-200px; reference Height-100px",
        "skin": "skinLblHome"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 5, 25, 5],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 18
    }, {});
    var VbxLblContainer = new kony.ui.Box({
        "id": "VbxLblContainer",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 25,
        "margin": [0, 1, 0, 1],
        "padding": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    VbxLblContainer.add(
    labelfit, labelfitsize);
    var hbxOrigional = new kony.ui.Box({
        "id": "hbxOrigional",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 41,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxOrigional.add(
    vboximg, vbxLblcontainer, vbximg, VbxLblContainer);
    var imgMt = new kony.ui.Image2({
        "id": "imgMt",
        "isVisible": true,
        "src": "http://www.kony.com/themes/kony/images/logo_small.png",
        "imageWhenFailed": "error_loading.png",
        "imageWhileDownloading": "download.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 5],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": 300,
        "referenceHeight": 150,
        "marginInPixel": false,
        "containerWeight": 100
    }, {});
    var vbox1587501417120103 = new kony.ui.Box({
        "id": "vbox1587501417120103",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 30,
        "margin": [0, 1, 0, 1],
        "padding": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1587501417120103.add(
    imgMt);
    var labelmain = new kony.ui.Label({
        "id": "labelmain",
        "isVisible": true,
        "text": "MAINTAIN ASPECT RATIO",
        "skin": "skinLblHome"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 5, 0, 5],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 20
    }, {});
    var labelmainsize = new kony.ui.Label({
        "id": "labelmainsize",
        "isVisible": true,
        "text": "reference Width-300px; reference Height-150px",
        "skin": "skinLblHome"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 5, 0, 5],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 20
    }, {});
    var vbox1587501417120104 = new kony.ui.Box({
        "id": "vbox1587501417120104",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 30,
        "margin": [0, 1, 0, 1],
        "padding": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1587501417120104.add(
    labelmain, labelmainsize);
    var imgCp = new kony.ui.Image2({
        "id": "imgCp",
        "isVisible": true,
        "src": "http://www.kony.com/themes/kony/images/logo_small.png",
        "imageWhenFailed": "error_loading.png",
        "imageWhileDownloading": "download.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 5],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_CROP,
        "referenceWidth": 100,
        "referenceHeight": 100,
        "marginInPixel": false,
        "containerWeight": 100
    }, {});
    var vbox1587501417120106 = new kony.ui.Box({
        "id": "vbox1587501417120106",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 15,
        "margin": [0, 1, 0, 1],
        "padding": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1587501417120106.add(
    imgCp);
    var labelcrop = new kony.ui.Label({
        "id": "labelcrop",
        "isVisible": true,
        "text": "CROP",
        "skin": "skinLblHome"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 5, 0, 5],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 20
    }, {});
    var labelcropsize = new kony.ui.Label({
        "id": "labelcropsize",
        "isVisible": true,
        "text": "reference Width-100px; reference Height-100px",
        "skin": "skinLblHome"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 5, 0, 5],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 20
    }, {});
    var vbox1587501417120105 = new kony.ui.Box({
        "id": "vbox1587501417120105",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 25,
        "margin": [0, 1, 0, 1],
        "padding": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1587501417120105.add(
    labelcrop, labelcropsize);
    var hbox1587501417120102 = new kony.ui.Box({
        "id": "hbox1587501417120102",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 38,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1587501417120102.add(
    vbox1587501417120103, vbox1587501417120104, vbox1587501417120106, vbox1587501417120105);
    frmURLBasedImage.add(
    hboxChkBox, hbxOrigional, hbox1587501417120102);
};

function frmURLBasedImageGlobals() {
    var MenuId = [];
    frmURLBasedImage = new kony.ui.Form2({
        "id": "frmURLBasedImage",
        "title": "URL based images",
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "needAppMenu": true,
        "addWidgets": addWidgetsfrmURLBasedImage
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "maxAppMenuButtons": 4,
        "layout": constants.Vertical,
        "titleBar": true,
        "showBackButton": true,
        "directChildrenIDs": ["hboxChkBox", "hbxOrigional", "vboximg", "image21587501417120099", "vbxLblcontainer", "labelori", "vbximg", "imageFtDim", "VbxLblContainer", "labelfit", "labelfitsize", "hbox1587501417120102", "vbox1587501417120103", "imgMt", "vbox1587501417120104", "labelmain", "labelmainsize", "vbox1587501417120105", "labelcrop", "labelcropsize", "vbox1587501417120106", "imgCp"],
        "viewConfig": {
            "referenceHeight": 0,
            "referenceWidth": 0
        }
    });
};