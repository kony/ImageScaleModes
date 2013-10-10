//Form JS File
function addWidgetsfrmURLBasedImage() {
    var labelori = new kony.ui.Label({
        "id": "labelori",
        "isVisible": true,
        "text": "Original image size is 300X300(Pixels)",
        "skin": "skinLblHome"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [30, 22, 30, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "containerWeight": 5
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var labelfit = new kony.ui.Label({
        "id": "labelfit",
        "isVisible": true,
        "text": "FIT TO DIMENTIONS",
        "skin": "skinLblHome"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [30, 22, 30, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "containerWeight": 5
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var labelfitsize = new kony.ui.Label({
        "id": "labelfitsize",
        "isVisible": true,
        "text": "referenceWidth-200px; referenceHeight-100px",
        "skin": "skinLblHome"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [30, 22, 30, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "containerWeight": 5
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imageFtDim = new kony.ui.Image2({
        "id": "imageFtDim",
        "isVisible": true,
        "src": "http://www.kony.com/themes/kony/images/logo_small.png",
        "imageWhenFailed": "error_loading.png",
        "imageWhileDownloading": "download.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [18, 10, 18, 10],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 200,
        "referenceHeight": 100,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var hboxFtDim = new kony.ui.Box({
        "id": "hboxFtDim",
        "isVisible": true,
        "skin": "hboximgwhitebg",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxFtDim.add(
    imageFtDim);
    var line1 = new kony.ui.Line({
        "id": "line1",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": true
    }, {});
    var labelmain = new kony.ui.Label({
        "id": "labelmain",
        "isVisible": true,
        "text": "MAINTAIN ASPECT RATIO",
        "skin": "skinLblHome"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [30, 22, 30, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "containerWeight": 5
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var labelmainsize = new kony.ui.Label({
        "id": "labelmainsize",
        "isVisible": true,
        "text": "referenceWidth-300px; referenceHeight-150px",
        "skin": "skinLblHome"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [30, 22, 30, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "containerWeight": 5
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgMt = new kony.ui.Image2({
        "id": "imgMt",
        "isVisible": true,
        "src": "http://www.kony.com/themes/kony/images/logo_small.png",
        "imageWhenFailed": "error_loading.png",
        "imageWhileDownloading": "download.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [18, 10, 18, 10],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": 300,
        "referenceHeight": 150,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var hboximgMt = new kony.ui.Box({
        "id": "hboximgMt",
        "isVisible": true,
        "skin": "hboximgwhitebg",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboximgMt.add(
    imgMt);
    var line2 = new kony.ui.Line({
        "id": "line2",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": true
    }, {});
    var labelcrop = new kony.ui.Label({
        "id": "labelcrop",
        "isVisible": true,
        "text": "CROP",
        "skin": "skinLblHome"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [30, 22, 30, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "containerWeight": 5
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var labelcropsize = new kony.ui.Label({
        "id": "labelcropsize",
        "isVisible": true,
        "text": "referenceWidth-100px; referenceHeight-100px",
        "skin": "skinLblHome"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [30, 22, 30, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "containerWeight": 5
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgCp = new kony.ui.Image2({
        "id": "imgCp",
        "isVisible": true,
        "src": "http://www.kony.com/themes/kony/images/logo_small.png",
        "imageWhenFailed": "error_loading.png",
        "imageWhileDownloading": "download.png"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [18, 10, 18, 10],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_CROP,
        "referenceWidth": 100,
        "referenceHeight": 100,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var hboximgCp = new kony.ui.Box({
        "id": "hboximgCp",
        "isVisible": true,
        "skin": "hboximgwhitebg",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboximgCp.add(
    imgCp);
    var line3 = new kony.ui.Line({
        "id": "line3",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 4, 0, 4],
        "marginInPixel": true,
        "paddingInPixel": true
    }, {});
    frmURLBasedImage.add(
    labelori, labelfit, labelfitsize, hboxFtDim, line1, labelmain, labelmainsize, hboximgMt, line2, labelcrop, labelcropsize, hboximgCp, line3);
};

function frmURLBasedImageGlobals() {
    var MenuId = [];
    frmURLBasedImage = new kony.ui.Form2({
        "id": "frmURLBasedImage",
        "title": "URL based images",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmURLBasedImage
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "title",
            "labelLeftSideView": "Back"
        },
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
};