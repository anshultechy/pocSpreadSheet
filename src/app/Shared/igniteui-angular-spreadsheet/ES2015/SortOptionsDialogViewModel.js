/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, INotifyPropertyChanged_$type, PropertyChangedEventArgs, markType } from "../../igniteui-angular-core/ES2015/type";
import { ArgumentNullException } from "../../igniteui-angular-core/ES2015/ArgumentNullException";
/**
 * @hidden
 */
export class SortOptionsDialogViewModel extends Base {
    constructor(a) {
        super();
        this._a = null;
        this._e = false;
        this._b = 0;
        this.propertyChanged = null;
        if (a == null) {
            throw new ArgumentNullException(0, "sortDialogViewModel");
        }
        this._a = a;
        this._f = this._a._ab;
        this._c = this._a._p;
    }
    _j(a, ...b) {
        return this._a._a8(a, ...b);
    }
    _s() {
        this._a._ab = this._f;
        this._a._p = this._c;
    }
    _t(a) {
        switch (a) {
        }
        let b = this.propertyChanged;
        if (null != b) {
            b(this, new PropertyChangedEventArgs(a));
        }
    }
    get _d() {
        return this._a._t;
    }
    get _i() {
        return this._j("SortDialog_Cancel");
    }
    get _f() {
        return this._e;
    }
    set _f(a) {
        if (a == this._e) {
            return;
        }
        this._e = a;
        this._t("CaseSensitive");
    }
    get _g() {
        return this._c == 1;
    }
    set _g(a) {
        let b = a ? 1 : 0;
        if (this._b == b) {
            return;
        }
        this._c = b;
        this._t("IsSortingColumns");
    }
    get _h() {
        return this._c == 0;
    }
    set _h(a) {
        let b = a ? 0 : 1;
        if (this._b == b) {
            return;
        }
        this._c = b;
        this._t("IsSortingRows");
    }
    get _k() {
        return this._j("SortOptionsDialog_OK");
    }
    get _m() {
        return this._j("SortOptionsDialog_CaseSensitive");
    }
    get _l() {
        return this._j("SortOptionsDialog_Cancel");
    }
    get _p() {
        return this._j("SortOptionsDialog_SortLeftToRight");
    }
    get _q() {
        return this._j("SortOptionsDialog_SortTopToBottom");
    }
    get _r() {
        return this._j("SortOptionsDialog_Title");
    }
    get _n() {
        return this._j("SortOptionsDialog_OK");
    }
    get _o() {
        return this._j("SortOptionsDialog_Orientation");
    }
    get _c() {
        return this._b;
    }
    set _c(a) {
        if (a == this._b) {
            return;
        }
        this._b = a;
        this._t("SortOrientation");
    }
}
SortOptionsDialogViewModel.$t = markType(SortOptionsDialogViewModel, 'SortOptionsDialogViewModel', Base.$, [INotifyPropertyChanged_$type]);
//# sourceMappingURL=SortOptionsDialogViewModel.js.map