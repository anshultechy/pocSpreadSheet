/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { truncate } from "./number";
export function timeSpanInit1(h, m, s) {
    return (h * 3600000) + (m * 60000) + (s * 1000);
}
;
export function timeSpanInit2(d, h, m, s, ms) {
    return (d * 86400000) + (h * 3600000) + (m * 60000) + (s * 1000) + ms;
}
;
export function timeSpanInit3(d, h, m, s) {
    return (d * 86400000) + (h * 3600000) + (m * 60000) + (s * 1000);
}
;
export function timeSpanTotalDays(t) { return t / 86400000; }
;
export function timeSpanTotalHours(t) { return t / 3600000; }
;
export function timeSpanTotalMilliseconds(t) { return t; }
;
export function timeSpanTotalMinutes(t) { return t / 60000; }
;
export function timeSpanTotalSeconds(t) { return t / 1000; }
;
export function timeSpanFromDays(v) { return v * 86400000; }
;
export function timeSpanFromHours(v) { return v * 3600000; }
;
export function timeSpanFromMilliseconds(v) { return v; }
;
export function timeSpanFromMinutes(v) { return v * 60000; }
;
export function timeSpanFromSeconds(v) { return v * 1000; }
;
export function timeSpanFromTicks(v) { return v / 10000; }
;
export function timeSpanDays(t) { return truncate(t / 86400000); }
;
export function timeSpanHours(t) { return truncate((t / 3600000) % 24); }
;
export function timeSpanMilliseconds(t) { return t % 1000; }
;
export function timeSpanMinutes(t) { return truncate((t / 60000) % 60); }
;
export function timeSpanSeconds(t) { return truncate((t / 1000) % 60); }
;
export function timeSpanTicks(t) { return truncate(t * 10000); }
;
export function timeSpanNegate(t) { return -t; }
;
//# sourceMappingURL=timespan.js.map