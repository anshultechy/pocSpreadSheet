/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
var HttpRequestUtil = /** @class */ (function () {
    function HttpRequestUtil() {
    }
    HttpRequestUtil.submit = function (url, callback, error) {
        var data, ret, req;
        if (typeof XMLHttpRequest == "undefined") {
            try {
                req = new ActiveXObject("Msxml2.XMLHTTP.6.0");
            }
            catch (e) { }
            try {
                req = new ActiveXObject("Msxml2.XMLHTTP.3.0");
            }
            catch (e) { }
            req = new ActiveXObject("Microsoft.XMLHTTP");
        }
        else {
            req = new XMLHttpRequest();
        }
        if (req.overrideMimeType) {
            req.overrideMimeType("text/plain; charset=x-user-defined");
        }
        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    if (callback) {
                        callback(req.responseText, req);
                    }
                }
                else {
                    if (error) {
                        error(req.error, req);
                    }
                }
            }
        };
        req.open("GET", url, true);
        req.send(null);
        return req;
    };
    ;
    return HttpRequestUtil;
}());
export { HttpRequestUtil };
//# sourceMappingURL=httpRequestUtil.js.map