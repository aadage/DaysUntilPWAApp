//Local Storage
window["lsSetItem"] = (key, value) => {
    window.localStorage.setItem(key, value);
};

window["lsGetItem"] = key => {
    return window.localStorage.getItem(key);
}

window["lsRemoveItem"] = key => {
    window.localStorage.removeItem(key);
}

//Focus
window["setFocus"] = elementid => {
    document.getElementById(elementid).focus();
}

//Element Metrics
window["getElementMetrics"] = elementid => {
    let metrics: ElementMetrics = new ElementMetrics();
    let element: HTMLElement = document.getElementById(elementid);
    if (element) {
        let rect: ClientRect = element.getBoundingClientRect();
        metrics.Width = rect.width;
        metrics.Height = rect.height;
        metrics.Top = rect.top;
        metrics.Bottom = rect.bottom;
        metrics.Left = rect.left;
        metrics.Right = rect.right;
        metrics.OffsetHeight = element.offsetHeight;
    }

    return metrics;
}

class ElementMetrics {
    Width: number = 0;
    Height: number = 0;
    Top: number = 0;
    Bottom: number = 0;
    Left: number = 0;
    Right: number = 0;
    OffsetHeight: number = 0;
}

//Scroll Position
window["getScrollPositionY"] = () => {
    if (document.documentElement) {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    }

    return 0;
}

//Timezone Offset
window["getTimezoneOffset"] = () => {
    let date: Date = new Date();
    return date.getTimezoneOffset();
}

