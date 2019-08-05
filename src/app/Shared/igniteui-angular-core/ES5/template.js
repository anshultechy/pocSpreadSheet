//This is deliberately fashioned after lit-html's public interface seam
// so that a customer can drop in lit-html for more efficient templates.
// or perhaps we'll just take on lit-html as a dependency.
// The current templating is pretty brain dead and inefficient, but will
// probably serve us fine in the short term.
import * as tslib_1 from "tslib";
var TemplateImplementation = /** @class */ (function () {
    function TemplateImplementation() {
    }
    TemplateImplementation.useLitHtml = function (litHtml) {
        TemplateImplementation.createTemplate = litHtml.html;
        TemplateImplementation.renderTemplate = litHtml.render;
    };
    return TemplateImplementation;
}());
export { TemplateImplementation };
export function html(strings) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    if (TemplateImplementation.createTemplate) {
        return TemplateImplementation.createTemplate.apply(TemplateImplementation, tslib_1.__spread([strings], values));
    }
    return {
        strings: strings,
        values: values
    };
}
function renderValue(val) {
    if (!val) {
        return '';
    }
    if (val.strings && val.values) {
        return renderToString(val);
    }
    return val.toString();
}
function renderToString(template) {
    var ret = "";
    for (var i = 0; i < template.strings.length; i++) {
        ret += template.strings[i];
        ret += template.values[i] ? template.values[i] : '';
    }
    return ret;
}
export function render(template, target) {
    if (TemplateImplementation.renderTemplate) {
        TemplateImplementation.renderTemplate(template, target);
    }
    var ret = renderToString(template);
    if (target instanceof HTMLElement) {
        target.innerHTML = ret;
    }
    else {
        var div = document.createElement("div");
        div.innerHTML = ret;
        target.appendChild(div);
    }
}
//# sourceMappingURL=template.js.map