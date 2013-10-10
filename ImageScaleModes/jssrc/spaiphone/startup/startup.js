//startup.js file
var appConfig = {
    appId: "imgmodes",
    appName: "ImageResources",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.4.91",
    serverPort: "80",
    secureServerPort: "443",
    url: "http://10.10.4.91:80/middleware/MWServlet",
    secureurl: "https://10.10.4.91:443/middleware/MWServlet",
    middlewareContext: "middleware"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmHomeGlobals();
    frmImgCropGlobals();
    frmImgFitToDimensionsGlobals();
    frmImgMaintainAspectRatioGlobals();
    frmOptionsGlobals();
    frmURLBasedImageGlobals();
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
    ["default", "KonyTheme"]);
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: true
    })
    //If default locale is specified. This is set even before any other app life cycle event is called.
    kony.i18n.setDefaultLocaleAsync("en_US", onSuccess, onFailure, null);
};
kony.print = function() {
    return;
};