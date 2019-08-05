/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe, Inject } from '@angular/core';
import { IGX_TIME_PICKER_COMPONENT } from './time-picker.common';
/**
 * Formats `IgxTimePickerComponent` display value according to the `format` property,
 * when the input element loses focus.
 *
 */
export class TimeDisplayFormatPipe {
    /**
     * @param {?} timePicker
     */
    constructor(timePicker) {
        this.timePicker = timePicker;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        /** @type {?} */
        let hour;
        /** @type {?} */
        let minutes;
        /** @type {?} */
        let amPM;
        /** @type {?} */
        const maskAmPM = this.timePicker.parseMask();
        /** @type {?} */
        const mask = this.timePicker.parseMask(false);
        if (!value || value === mask || value === maskAmPM) {
            return '';
        }
        /** @type {?} */
        const sections = value.split(/[\s:]+/);
        if (this.timePicker.showHoursList) {
            hour = sections[0];
        }
        if (this.timePicker.showMinutesList) {
            minutes = this.timePicker.showHoursList ? sections[1] : sections[0];
        }
        if (this.timePicker.showAmPmList) {
            amPM = sections[sections.length - 1];
        }
        /** @type {?} */
        const format = this.timePicker.format;
        /** @type {?} */
        const prompt = this.timePicker.promptChar;
        /** @type {?} */
        const regExp = new RegExp(this.timePicker.promptChar, 'g');
        if (format.indexOf('hh') !== -1 || format.indexOf('HH') !== -1 && hour.indexOf(prompt) !== -1) {
            hour = hour === prompt + prompt ? '00' : hour.replace(regExp, '0');
        }
        if (format.indexOf('mm') !== -1 && minutes.indexOf(prompt) !== -1) {
            minutes = minutes === prompt + prompt ? '00' : minutes.replace(regExp, '0');
        }
        if (format.indexOf('hh') === -1 && format.indexOf('HH') === -1 && hour !== undefined) {
            hour = hour.indexOf(prompt) !== -1 ? hour.replace(regExp, '') : hour;
            /** @type {?} */
            const hourVal = parseInt(hour, 10);
            hour = !hourVal ? '0' : hourVal < 10 && hourVal !== 0 ? hour.replace('0', '') : hour;
        }
        if (format.indexOf('mm') === -1 && minutes !== undefined) {
            minutes = minutes.indexOf(prompt) !== -1 ? minutes.replace(regExp, '') : minutes;
            /** @type {?} */
            const minutesVal = parseInt(minutes, 10);
            minutes = !minutesVal ? '0' : minutesVal < 10 && minutesVal !== 0 ? minutes.replace('0', '') : minutes;
        }
        if (format.indexOf('tt') !== -1 && (amPM !== 'AM' || amPM !== 'PM')) {
            amPM = amPM.indexOf('p') !== -1 || amPM.indexOf('P') !== -1 ? 'PM' : 'AM';
        }
        /** @type {?} */
        let result = amPM ? `${hour}:${minutes} ${amPM}` : `${hour}:${minutes}`;
        if (!hour) {
            result = result.slice(result.indexOf(':') + 1, result.length);
        }
        if (!minutes) {
            result = result.slice(0, result.indexOf(':'));
            if (amPM) {
                result = result + ' ' + amPM;
            }
        }
        return result;
    }
}
TimeDisplayFormatPipe.decorators = [
    { type: Pipe, args: [{ name: 'displayFormat' },] }
];
/** @nocollapse */
TimeDisplayFormatPipe.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [IGX_TIME_PICKER_COMPONENT,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TimeDisplayFormatPipe.prototype.timePicker;
}
/**
 * Formats `IgxTimePickerComponent` display value according to the `format` property,
 * when the input element gets focus.
 *
 */
export class TimeInputFormatPipe {
    /**
     * @param {?} timePicker
     */
    constructor(timePicker) {
        this.timePicker = timePicker;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        /** @type {?} */
        const prompt = this.timePicker.promptChar;
        /** @type {?} */
        const regExp = new RegExp(prompt, 'g');
        /** @type {?} */
        let mask;
        /** @type {?} */
        let hour;
        /** @type {?} */
        let minutes;
        /** @type {?} */
        let amPM;
        if (this.timePicker.cleared) {
            this.timePicker.cleared = false;
            mask = this.timePicker.parseMask(false);
        }
        else {
            mask = this.timePicker.parseMask();
        }
        if (!value || value === mask) {
            return mask;
        }
        /** @type {?} */
        const sections = value.split(/[\s:]+/);
        if (this.timePicker.showHoursList) {
            hour = sections[0];
            hour = hour.replace(regExp, '');
            /** @type {?} */
            const leadZeroHour = (parseInt(hour, 10) < 10 && !hour.startsWith('0')) || hour === '0';
            hour = leadZeroHour ? '0' + hour : hour;
        }
        if (this.timePicker.showMinutesList) {
            minutes = this.timePicker.showHoursList ? sections[1] : sections[0];
            minutes = minutes.replace(regExp, '');
            /** @type {?} */
            const leadZeroMinutes = (parseInt(minutes, 10) < 10 && !minutes.startsWith('0')) || minutes === '0';
            minutes = leadZeroMinutes ? '0' + minutes : minutes;
        }
        if (this.timePicker.showAmPmList) {
            amPM = sections[sections.length - 1];
        }
        /** @type {?} */
        let result = amPM ? `${hour}:${minutes} ${amPM}` : `${hour}:${minutes}`;
        if (!hour) {
            result = result.slice(result.indexOf(':') + 1, result.length);
        }
        if (!minutes) {
            result = result.slice(0, result.indexOf(':'));
            if (amPM) {
                result = result + ' ' + amPM;
            }
        }
        return result;
    }
}
TimeInputFormatPipe.decorators = [
    { type: Pipe, args: [{ name: 'inputFormat' },] }
];
/** @nocollapse */
TimeInputFormatPipe.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [IGX_TIME_PICKER_COMPONENT,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TimeInputFormatPipe.prototype.timePicker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXIucGlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3RpbWUtcGlja2VyL3RpbWUtcGlja2VyLnBpcGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLHlCQUF5QixFQUFxQixNQUFNLHNCQUFzQixDQUFDOzs7Ozs7QUFRcEYsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUU3QixZQUF1RCxVQUE2QjtRQUE3QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtJQUFJLENBQUM7Ozs7O0lBRXpGLFNBQVMsQ0FBQyxLQUFVOztZQUNiLElBQUk7O1lBQUUsT0FBTzs7WUFBRSxJQUFJOztjQUVqQixRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7O2NBQ3RDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDaEQsT0FBTyxFQUFFLENBQUM7U0FDYjs7Y0FFSyxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFFdEMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUMvQixJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRTtZQUNqQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsSUFB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REosSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTs7Ozs0Q0FHWixNQUFNLFNBQUMseUJBQXlCOzs7Ozs7O0lBQWpDLHlDQUF3RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJR1hfVElNRV9QSUNLRVJfQ09NUE9ORU5ULCBJZ3hUaW1lUGlja2VyQmFzZSB9IGZyb20gJy4vdGltZS1waWNrZXIuY29tbW9uJztcblxuXG4vKipcbiAqIEZvcm1hdHMgYElneFRpbWVQaWNrZXJDb21wb25lbnRgIGRpc3BsYXkgdmFsdWUgYWNjb3JkaW5nIHRvIHRoZSBgZm9ybWF0YCBwcm9wZXJ0eSxcbiAqIHdoZW4gdGhlIGlucHV0IGVsZW1lbnQgbG9zZXMgZm9jdXMuXG4gKiovXG5AUGlwZSh7IG5hbWU6ICdkaXNwbGF5Rm9ybWF0J30pXG5leHBvcnQgY2xhc3MgVGltZURpc3BsYXlGb3JtYXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICAgY29uc3RydWN0b3IoQEluamVjdChJR1hfVElNRV9QSUNLRVJfQ09NUE9ORU5UKSBwcml2YXRlIHRpbWVQaWNrZXI6IElneFRpbWVQaWNrZXJCYXNlKSB7IH1cblxuICAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGxldCBob3VyLCBtaW51dGVzLCBhbVBNO1xuXG4gICAgICAgIGNvbnN0IG1hc2tBbVBNID0gdGhpcy50aW1lUGlja2VyLnBhcnNlTWFzaygpO1xuICAgICAgICBjb25zdCBtYXNrID0gdGhpcy50aW1lUGlja2VyLnBhcnNlTWFzayhmYWxzZSk7XG4gICAgICAgIGlmICghdmFsdWUgfHwgdmFsdWUgPT09IG1hc2sgfHwgdmFsdWUgPT09IG1hc2tBbVBNKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWN0aW9ucyA9IHZhbHVlLnNwbGl0KC9bXFxzOl0rLyk7XG5cbiAgICAgICAgaWYgKHRoaXMudGltZVBpY2tlci5zaG93SG91cnNMaXN0KSB7XG4gICAgICAgICAgICBob3VyID0gc2VjdGlvbnNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50aW1lUGlja2VyLnNob3dNaW51dGVzTGlzdCkge1xuICAgICAgICAgICAgbWludXRlcyA9IHRoaXMudGltZVBpY2tlci5zaG93SG91cnNMaXN0ID8gc2VjdGlvbnNbMV0gOiBzZWN0aW9uc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnRpbWVQaWNrZXIuc2hvd0FtUG1MaXN0KSB7XG4gICAgICAgICAgICBhbVBNID0gc2VjdGlvbnNbc2VjdGlvbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmb3JtYXQgPSB0aGlzLnRpbWVQaWNrZXIuZm9ybWF0O1xuICAgICAgICBjb25zdCBwcm9tcHQgPSB0aGlzLnRpbWVQaWNrZXIucHJvbXB0Q2hhcjtcbiAgICAgICAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cCh0aGlzLnRpbWVQaWNrZXIucHJvbXB0Q2hhciwgJ2cnKTtcblxuICAgICAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ2hoJykgIT09IC0xIHx8IGZvcm1hdC5pbmRleE9mKCdISCcpICE9PSAtMSAmJiBob3VyLmluZGV4T2YocHJvbXB0KSAhPT0gLTEpIHtcbiAgICAgICAgICAgaG91ciA9IGhvdXIgPT09IHByb21wdCArIHByb21wdCA/ICcwMCcgOiBob3VyLnJlcGxhY2UocmVnRXhwLCAnMCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvcm1hdC5pbmRleE9mKCdtbScpICE9PSAtMSAmJiBtaW51dGVzLmluZGV4T2YocHJvbXB0KSAhPT0gLTEpIHtcbiAgICAgICAgICAgbWludXRlcyA9IG1pbnV0ZXMgPT09IHByb21wdCArIHByb21wdCA/ICcwMCcgOiBtaW51dGVzLnJlcGxhY2UocmVnRXhwLCAnMCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvcm1hdC5pbmRleE9mKCdoaCcpID09PSAtMSAmJiBmb3JtYXQuaW5kZXhPZignSEgnKSA9PT0gLTEgJiYgaG91ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBob3VyID0gaG91ci5pbmRleE9mKHByb21wdCkgIT09IC0xID8gaG91ci5yZXBsYWNlKHJlZ0V4cCwgJycpIDogaG91cjtcbiAgICAgICAgICAgIGNvbnN0IGhvdXJWYWwgPSBwYXJzZUludChob3VyLCAxMCk7XG4gICAgICAgICAgICBob3VyID0gIWhvdXJWYWwgPyAnMCcgOiBob3VyVmFsIDwgMTAgJiYgaG91clZhbCAhPT0gMCA/IGhvdXIucmVwbGFjZSgnMCcsICcnKSA6IGhvdXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ21tJykgPT09IC0xICYmIG1pbnV0ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbWludXRlcyA9IG1pbnV0ZXMuaW5kZXhPZihwcm9tcHQpICE9PSAtMSA/IG1pbnV0ZXMucmVwbGFjZShyZWdFeHAsICcnKSA6IG1pbnV0ZXM7XG4gICAgICAgICAgICBjb25zdCBtaW51dGVzVmFsID0gcGFyc2VJbnQobWludXRlcywgMTApO1xuICAgICAgICAgICAgbWludXRlcyA9ICFtaW51dGVzVmFsID8gJzAnIDogbWludXRlc1ZhbCA8IDEwICYmIG1pbnV0ZXNWYWwgIT09IDAgPyBtaW51dGVzLnJlcGxhY2UoJzAnLCAnJykgOiBtaW51dGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvcm1hdC5pbmRleE9mKCd0dCcpICE9PSAtMSAmJiAoYW1QTSAhPT0gJ0FNJyB8fCBhbVBNICE9PSAnUE0nKSkge1xuICAgICAgICAgICBhbVBNID0gYW1QTS5pbmRleE9mKCdwJykgIT09IC0xIHx8IGFtUE0uaW5kZXhPZignUCcpICE9PSAtMSA/ICdQTScgOiAnQU0nO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IGFtUE0gPyBgJHtob3VyfToke21pbnV0ZXN9ICR7YW1QTX1gIDogYCR7aG91cn06JHttaW51dGVzfWA7XG5cbiAgICAgICAgaWYgKCFob3VyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UocmVzdWx0LmluZGV4T2YoJzonKSArIDEsIHJlc3VsdC5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFtaW51dGVzKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UoMCwgcmVzdWx0LmluZGV4T2YoJzonKSk7XG4gICAgICAgICAgICBpZiAoYW1QTSkgeyByZXN1bHQgPSByZXN1bHQgKyAnICcgKyBhbVBNOyB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBGb3JtYXRzIGBJZ3hUaW1lUGlja2VyQ29tcG9uZW50YCBkaXNwbGF5IHZhbHVlIGFjY29yZGluZyB0byB0aGUgYGZvcm1hdGAgcHJvcGVydHksXG4gKiB3aGVuIHRoZSBpbnB1dCBlbGVtZW50IGdldHMgZm9jdXMuXG4gKiovXG5AUGlwZSh7IG5hbWU6ICdpbnB1dEZvcm1hdCcgfSlcbmV4cG9ydCBjbGFzcyBUaW1lSW5wdXRGb3JtYXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KElHWF9USU1FX1BJQ0tFUl9DT01QT05FTlQpIHByaXZhdGUgdGltZVBpY2tlcjogSWd4VGltZVBpY2tlckJhc2UpIHsgfVxuXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBwcm9tcHQgPSB0aGlzLnRpbWVQaWNrZXIucHJvbXB0Q2hhcjtcbiAgICAgICAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChwcm9tcHQsICdnJyk7XG5cbiAgICAgICAgbGV0IG1hc2ssIGhvdXIsIG1pbnV0ZXMsIGFtUE07XG5cbiAgICAgICAgaWYgKHRoaXMudGltZVBpY2tlci5jbGVhcmVkKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVQaWNrZXIuY2xlYXJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgbWFzayA9IHRoaXMudGltZVBpY2tlci5wYXJzZU1hc2soZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFzayA9IHRoaXMudGltZVBpY2tlci5wYXJzZU1hc2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdmFsdWUgfHwgdmFsdWUgPT09IG1hc2spIHtcbiAgICAgICAgICAgIHJldHVybiBtYXNrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSB2YWx1ZS5zcGxpdCgvW1xcczpdKy8pO1xuXG4gICAgICAgIGlmICh0aGlzLnRpbWVQaWNrZXIuc2hvd0hvdXJzTGlzdCkge1xuICAgICAgICAgICAgaG91ciA9IHNlY3Rpb25zWzBdO1xuICAgICAgICAgICAgaG91ciA9IGhvdXIucmVwbGFjZShyZWdFeHAsICcnKTtcblxuICAgICAgICAgICAgY29uc3QgbGVhZFplcm9Ib3VyID0gKHBhcnNlSW50KGhvdXIsIDEwKSA8IDEwICYmICFob3VyLnN0YXJ0c1dpdGgoJzAnKSkgfHwgaG91ciA9PT0gJzAnO1xuICAgICAgICAgICAgaG91ciA9IGxlYWRaZXJvSG91ciA/ICcwJyArIGhvdXIgOiBob3VyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudGltZVBpY2tlci5zaG93TWludXRlc0xpc3QpIHtcbiAgICAgICAgICAgIG1pbnV0ZXMgPSB0aGlzLnRpbWVQaWNrZXIuc2hvd0hvdXJzTGlzdCA/IHNlY3Rpb25zWzFdIDogc2VjdGlvbnNbMF07XG4gICAgICAgICAgICBtaW51dGVzID0gbWludXRlcy5yZXBsYWNlKHJlZ0V4cCwgJycpO1xuXG4gICAgICAgICAgICBjb25zdCBsZWFkWmVyb01pbnV0ZXMgPSAocGFyc2VJbnQobWludXRlcywgMTApIDwgMTAgJiYgIW1pbnV0ZXMuc3RhcnRzV2l0aCgnMCcpKSB8fCBtaW51dGVzID09PSAnMCc7XG4gICAgICAgICAgICBtaW51dGVzID0gbGVhZFplcm9NaW51dGVzID8gJzAnICsgbWludXRlcyA6IG1pbnV0ZXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50aW1lUGlja2VyLnNob3dBbVBtTGlzdCkge1xuICAgICAgICAgICAgYW1QTSA9IHNlY3Rpb25zW3NlY3Rpb25zLmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IGFtUE0gPyBgJHtob3VyfToke21pbnV0ZXN9ICR7YW1QTX1gIDogYCR7aG91cn06JHttaW51dGVzfWA7XG5cbiAgICAgICAgaWYgKCFob3VyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UocmVzdWx0LmluZGV4T2YoJzonKSArIDEsIHJlc3VsdC5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFtaW51dGVzKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UoMCwgcmVzdWx0LmluZGV4T2YoJzonKSk7XG4gICAgICAgICAgICBpZiAoYW1QTSkgeyByZXN1bHQgPSByZXN1bHQgKyAnICcgKyBhbVBNOyB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiJdfQ==