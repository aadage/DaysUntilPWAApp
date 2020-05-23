//Local Storage
window["lsSetItem"] = function (key, value) {
    window.localStorage.setItem(key, value);
};
window["lsGetItem"] = function (key) {
    return window.localStorage.getItem(key);
};
window["lsRemoveItem"] = function (key) {
    window.localStorage.removeItem(key);
};
//Focus
window["setFocus"] = function (elementid) {
    document.getElementById(elementid).focus();
};
//Element Metrics
window["getElementMetrics"] = function (elementid) {
    var metrics = new ElementMetrics();
    var element = document.getElementById(elementid);
    if (element) {
        var rect = element.getBoundingClientRect();
        metrics.Width = rect.width;
        metrics.Height = rect.height;
        metrics.Top = rect.top;
        metrics.Bottom = rect.bottom;
        metrics.Left = rect.left;
        metrics.Right = rect.right;
        metrics.OffsetHeight = element.offsetHeight;
    }
    return metrics;
};
var ElementMetrics = /** @class */ (function () {
    function ElementMetrics() {
        this.Width = 0;
        this.Height = 0;
        this.Top = 0;
        this.Bottom = 0;
        this.Left = 0;
        this.Right = 0;
        this.OffsetHeight = 0;
    }
    return ElementMetrics;
}());
//Scroll Position
window["getScrollPositionY"] = function () {
    if (document.documentElement) {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    }
    return 0;
};
//Timezone Offset
window["getTimezoneOffset"] = function () {
    var date = new Date();
    return date.getTimezoneOffset();
};
//# sourceMappingURL=jsinterop.js.map