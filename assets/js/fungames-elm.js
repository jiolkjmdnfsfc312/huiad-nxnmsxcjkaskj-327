document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'P'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) {
        return false;
    }
}


(function () {
    if (!$('body').hasClass('debug_mode')) {
        var _z = console;
        Object.defineProperty(window, "console", {
            get: function () {
                if ((window && window._z && window._z._commandLineAPI) || {}) {
                    throw "Nice trick! but not permitted!";
                }
                return _z;
            },
            set: function (val) {
                _z = val;
            }
        });
    }
})();