//This is deliberately fashioned after lit-html's public interface seam
// so that a customer can drop in lit-html for more efficient templates.
// or perhaps we'll just take on lit-html as a dependency.
// The current templating is pretty brain dead and inefficient, but will
// probably serve us fine in the short term.
export class TemplateImplementation {
    static useLitHtml(litHtml) {
        TemplateImplementation.createTemplate = litHtml.html;
        TemplateImplementation.renderTemplate = litHtml.render;
    }
}
export function html(strings, ...values) {
    if (TemplateImplementation.createTemplate) {
        return TemplateImplementation.createTemplate(strings, ...values);
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
    let ret = "";
    for (let i = 0; i < template.strings.length; i++) {
        ret += template.strings[i];
        ret += template.values[i] ? template.values[i] : '';
    }
    return ret;
}
export function render(template, target) {
    if (TemplateImplementation.renderTemplate) {
        TemplateImplementation.renderTemplate(template, target);
    }
    let ret = renderToString(template);
    if (target instanceof HTMLElement) {
        target.innerHTML = ret;
    }
    else {
        let div = document.createElement("div");
        div.innerHTML = ret;
        target.appendChild(div);
    }
}
//# sourceMappingURL=template.js.map