export interface ISummaryExpression {
    fieldName: string;
    customSummary?: any;
}
export interface IgxSummaryResult {
    key: string;
    label: string;
    summaryResult: any;
}
export interface ISummaryRecord {
    summaries: Map<string, IgxSummaryResult[]>;
    max?: number;
    cellIndentation?: number;
}
export declare class IgxSummaryOperand {
    /**
     * Counts all the records in the data source.
     * If filtering is applied, counts only the filtered records.
     * ```typescript
     * IgxSummaryOperand.count(dataSource);
     * ```
     * @memberof IgxSummaryOperand
     */
    static count(data: any[]): number;
    /**
     * Executes the static `count` method and returns `IgxSummaryResult[]`.
     * ```typescript
     * interface IgxSummaryResult {
     *   key: string;
     *   label: string;
     *   summaryResult: any;
     * }
     * ```
     * Can be overridden in the inherited classes to provide customization for the `summary`.
     * ```typescript
     * class CustomSummary extends IgxSummaryOperand {
     *   constructor() {
     *     super();
     *   }
     *   public operate(data?: any[]): IgxSummaryResult[] {
     *     const result = [];
     *     result.push({
     *       key: "test",
     *       label: "Test",
     *       summaryResult: IgxSummaryOperand.count(data)
     *     });
     *     return result;
     *   }
     * }
     * this.grid.getColumnByName('ColumnName').summaries = CustomSummary;
     * ```
     * @memberof IgxSummaryOperand
     */
    operate(data?: any[]): IgxSummaryResult[];
}
export declare class IgxNumberSummaryOperand extends IgxSummaryOperand {
    /**
     * Returns the minimum numeric value in the provided data records.
     * If filtering is applied, returns the minimum value in the filtered data records.
     * ```typescript
     * IgxNumberSummaryOperand.min(data);
     * ```
     * @memberof IgxNumberSummaryOperand
     */
    static min(data: any[]): number;
    /**
     * Returns the maximum numeric value in the provided data records.
     * If filtering is applied, returns the maximum value in the filtered data records.
     * ```typescript
     * IgxNumberSummaryOperand.max(data);
     * ```
     * @memberof IgxNumberSummaryOperand
     */
    static max(data: any[]): number;
    /**
     * Returns the sum of the numeric values in the provided data records.
     * If filtering is applied, returns the sum of the numeric values in the data records.
     * ```typescript
     * IgxNumberSummaryOperand.sum(data);
     * ```
     * @memberof IgxNumberSummaryOperand
     */
    static sum(data: any[]): number;
    /**
     * Returns the average numeric value in the data provided data records.
     * If filtering is applied, returns the average numeric value in the filtered data records.
     * ```typescript
     * IgxSummaryOperand.average(data);
     * ```
     * @memberof IgxNumberSummaryOperand
     */
    static average(data: any[]): number;
    /**
     * Executes the static methods and returns `IgxSummaryResult[]`.
     * ```typescript
     * interface IgxSummaryResult {
     *   key: string;
     *   label: string;
     *   summaryResult: any;
     * }
     * ```
     * Can be overridden in the inherited classes to provide customization for the `summary`.
     * ```typescript
     * class CustomNumberSummary extends IgxNumberSummaryOperand {
     *   constructor() {
     *     super();
     *   }
     *   public operate(data?: any[]): IgxSummaryResult[] {
     *     const result = [];
     *     result.push({
     *       key: "avg",
     *       label: "Avg",
     *       summaryResult: IgxNumberSummaryOperand.average(data)
     *     });
     *     result.push({
     *       key: "max",
     *       label: "Max",
     *       summaryResult: IgxNumberSummaryOperand.max(data)
     *     });
     *     return result;
     *   }
     * }
     * this.grid.getColumnByName('ColumnName').summaries = CustomNumberSummary;
     * ```
     * @memberof IgxNumberSummaryOperand
     */
    operate(data?: any[]): IgxSummaryResult[];
}
export declare class IgxDateSummaryOperand extends IgxSummaryOperand {
    /**
     * Returns the latest date value in the data records.
     * If filtering is applied, returns the latest date value in the filtered data records.
     * ```typescript
     * IgxDateSummaryOperand.latest(data);
     * ```
     * @memberof IgxDateSummaryOperand
     */
    static latest(data: any[]): any;
    /**
     * Returns the earliest date value in the data records.
     * If filtering is applied, returns the latest date value in the filtered data records.
     * ```typescript
     * IgxDateSummaryOperand.earliest(data);
     * ```
     * @memberof IgxDateSummaryOperand
     */
    static earliest(data: any[]): any;
    /**
     * Executes the static methods and returns `IgxSummaryResult[]`.
     * ```typescript
     * interface IgxSummaryResult {
     *   key: string;
     *   label: string;
     *   summaryResult: any;
     * }
     * ```
     * Can be overridden in the inherited classes to provide customization for the `summary`.
     * ```typescript
     * class CustomDateSummary extends IgxDateSummaryOperand {
     *   constructor() {
     *     super();
     *   }
     *   public operate(data?: any[]): IgxSummaryResult[] {
     *     const result = [];
     *     result.push({
     *       key: "latest",
     *       label: "Latest Date",
     *       summaryResult: IgxDateSummaryOperand.latest(data)
     *     });
     *     return result;
     *   }
     * }
     * this.grid.getColumnByName('ColumnName').summaries = CustomDateSummary;
     * ```
     * @memberof IgxDateSummaryOperand
     */
    operate(data?: any[]): IgxSummaryResult[];
}
