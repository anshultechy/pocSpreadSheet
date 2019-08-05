/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { DependencyObject } from "./DependencyObject";
import { INotifyPropertyChanged_$type, BaseError, PropertyChangedEventArgs, typeCast, markType } from "./type";
import { Uri } from "./Uri";
import { DependencyProperty } from "./DependencyProperty";
import { TriangulationSource } from "./TriangulationSource";
import { BinaryReader } from "./BinaryReader";
import { BinaryFileDownloader } from "./BinaryFileDownloader";
import { AsyncCompletedEventArgs } from "./AsyncCompletedEventArgs";
import { List$1 } from "./List$1";
import { TriangulationSourcePointRecord } from "./TriangulationSourcePointRecord";
import { Triangle } from "./Triangle";
import { PropertyMetadata } from "./PropertyMetadata";
/**
 * @hidden
 */
export class ItfConverter extends DependencyObject {
    constructor() {
        super(...arguments);
        this.j = null;
        this.importCompleted = null;
        this.propertyChanged = null;
    }
    get source() {
        return typeCast(Uri.$, this.c(ItfConverter.sourceProperty));
    }
    set source(a) {
        this.h(ItfConverter.sourceProperty, a);
    }
    get triangulationSource() {
        return this.j;
    }
    set triangulationSource(a) {
        let b = a != this.triangulationSource;
        if (b) {
            let c = this.j;
            this.j = a;
            this.t("TriangulationSource", c, this.triangulationSource);
        }
    }
    r() {
        let a = null;
        let b = () => {
            if (a != null) {
                this.triangulationSource = TriangulationSource.loadItf(a);
            }
            this.s(new AsyncCompletedEventArgs(null, false, null));
        };
        BinaryFileDownloader.a(this.source.value, (c) => {
            a = new BinaryReader(0, c, false);
            b();
        }, (c) => {
            throw new BaseError(1, "itf file download error: " + c);
        });
    }
    s(a) {
        if (this.importCompleted != null) {
            this.importCompleted(this, a);
        }
    }
    u(a, b, c) {
        switch (a) {
            case "Source":
                if (this.source != null) {
                    this.r();
                }
                break;
        }
    }
    t(a, b, c) {
        if (this.propertyChanged != null) {
            this.propertyChanged(this, new PropertyChangedEventArgs(a));
        }
        this.u(a, b, c);
    }
    getPointData() {
        if (this.j == null) {
            return null;
        }
        return new List$1(TriangulationSourcePointRecord.$, 1, this.j.points);
    }
    getTriangleData() {
        if (this.j == null) {
            return null;
        }
        return new List$1(Triangle.$, 1, this.j.triangles);
    }
}
ItfConverter.$t = markType(ItfConverter, 'ItfConverter', DependencyObject.$, [INotifyPropertyChanged_$type]);
ItfConverter.sourceProperty = DependencyProperty.i("Source", Uri.$, ItfConverter.$, new PropertyMetadata(2, null, (a, b) => (typeCast(ItfConverter.$, a)).u("Source", b.oldValue, b.newValue)));
//# sourceMappingURL=ItfConverter.js.map