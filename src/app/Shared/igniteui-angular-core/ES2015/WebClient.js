/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, BaseError, markType } from "./type";
import { WebHeaderCollection } from "./WebHeaderCollection";
import { UploadStringCompletedEventArgs } from "./UploadStringCompletedEventArgs";
import { UploadDataCompletedEventArgs } from "./UploadDataCompletedEventArgs";
import { NotImplementedException } from "./NotImplementedException";
/**
 * @hidden
 */
export class WebClient extends Base {
    constructor() {
        super();
        this.e = null;
        this.d = null;
        this.a = null;
        this.uploadStringCompleted = null;
        this.uploadDataCompleted = null;
        this.d = new WebHeaderCollection();
    }
    k(a, b, c, d) {
        this.g(a, b, c).i((e) => {
            if (this.uploadStringCompleted != null) {
                let f = null;
                let g = null;
                try {
                    f = e.m;
                }
                catch (h) {
                    g = (h);
                }
                this.uploadStringCompleted(this, new UploadStringCompletedEventArgs(f, g, e.g == 6, d));
            }
        });
    }
    g(a, b, c) {
        let url_ = a.value;
        let method_ = b;
        let data_ = c;
        let contentType_ = this.d.item("Content-Type");
        let credentials_ = this.a;
        throw new NotImplementedException(0);
    }
    j(a, b, c, d) {
        this.f(a, b, c).i((e) => {
            if (this.uploadDataCompleted != null) {
                let f = null;
                let g = null;
                try {
                    f = e.m;
                }
                catch (h) {
                    g = (h);
                }
                this.uploadDataCompleted(this, new UploadDataCompletedEventArgs(f, g, e.g == 6, d));
            }
        });
    }
    f(a, b, c) {
        let url_ = a.value;
        let method_ = b;
        let data_ = c;
        let contentType_ = this.d.item("Content-Type");
        let credentials_ = this.a;
        throw new NotImplementedException(0);
    }
    i(a, b, c, d) {
        a.e(b);
    }
    h(a, b, c, d) {
        a.d(new BaseError(1, d));
    }
}
WebClient.$t = markType(WebClient, 'WebClient');
//# sourceMappingURL=WebClient.js.map