export declare enum Type {
    DEFAULT = "default",
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error"
}
/**
 * **Ignite UI for Angular Badge** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/badge.html)
 *
 * The Ignite UI Badge is used to decorate avatars, navigation menus, or other components in the
 * application when visual notification is needed. They are usually designed as icons with a predefined
 * style to communicate information, success, warnings, or errors.
 *
 * Example:
 * ```html
 * <igx-avatar icon="person" roundShape="true" size="small">
 *   <igx-badge icon="check" type="success" class="badge-style">
 *   </igx-badge>
 * </igx-avatar>
 * ```
 * The `badge-style` class is used to position the badge:
 * ```css
 * .badge-style {
 *   position: absolute;
 *   bottom: -6px;
 *   right:-50px;
 * }
 * ```
 */
export declare class IgxBadgeComponent {
    /**
    * An @Input property that sets the value of the `id` attribute.
    * ```html
    *<igx-badge id="igx-badge-2" icon="check" type="success" class="badge-style"></igx-badge>
    * ```
    */
    id: string;
    /**
    * An @Input property controlling the type of the badge.
    * Allowed values are `default`, `info`, `success`, `warning`, `error`.
    * Providing an invalid value won't display a badge.
    * ```html
    *<igx-badge type="success" icon="check" class="badge-style"></igx-badge>
    * ```
    */
    type: string | Type;
    /**
    * An @Input property that sets the value to be displayed inside the badge.
    * If an `icon` property is already set the `icon` will be displayed.
    * If neither a `value` nor an `icon` is set the contentent of the badge will be empty.
    * ```html
    *<igx-badge value="11" type="success" class="badge-style"></igx-badge>
    * ```
    */
    value: string;
    /**
     * Set an icon for the badge from the material icons set.
     * Has priority over the `value` property.
     * If neither a `value` nor an `icon` is set the content of the badge will be empty.
     * Providing an invalid value won't display anything.
     * ```html
     *<igx-badge icon="check" type="success" class="badge-style" value="11"></igx-badge>
     * ```
     */
    icon: string;
    /**
     * This allows you to set value to role attribute.
     *```html
     *@ViewChild("MyBadge", { read: IgxBadgeComponent })
     *public badge: IgxBadgeComponent;
     * //...
     *badge.label = "badge-status";
     * ```
     */
    role: string;
    /**
     * This allows you to disable igx-badge class. The default it's applied.
     *```html
     *@ViewChild("MyBadge", { read: IgxBadgeComponent })
     *public badge: IgxBadgeComponent;
     * //...
     *badge.cssClass = false;
     * ```
     */
    cssClass: string;
    /**
     * This allows you to set value to aria-label attribute.
     *```html
     *@ViewChild("MyBadge", { read: IgxBadgeComponent })
     *public badge: IgxBadgeComponent;
     * //...
     *badge.label = "icon-badge";
     * ```
     */
    label: string;
    /**
     * @hidden
     * Defines a human-readable, accessor, author-localized description for the `type` and the `icon` or `value` of the element.
     */
    readonly roleDescription: any;
    /**
     * @hidden
     * Method which makes the name of the class more descriptive.
     * This helps the styling of the badges.
     */
    setClasses(): {};
}
/**
 * @hidden
 */
export declare class IgxBadgeModule {
}
