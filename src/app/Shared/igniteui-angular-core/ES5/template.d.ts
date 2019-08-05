export interface ITemplateObject {
    strings: TemplateStringsArray;
    values: any[];
}
export declare type TemplateFunction = (context: any) => ITemplateObject;
export declare class TemplateImplementation {
    static useLitHtml(litHtml: any): void;
    static createTemplate: (strings: TemplateStringsArray, ...values: any[]) => ITemplateObject;
    static renderTemplate: (template: ITemplateObject, target: Element | DocumentFragment) => void;
}
export declare function html(strings: TemplateStringsArray, ...values: any[]): ITemplateObject;
export declare function render(template: ITemplateObject, target: Element | DocumentFragment): void;
