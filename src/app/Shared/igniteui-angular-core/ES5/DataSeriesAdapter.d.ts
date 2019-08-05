import { Base, Type } from "./type";
import { IExternalDataSeriesAdapter } from "./IExternalDataSeriesAdapter";
import { DataSeriesAdapterImplementation } from "./DataSeriesAdapterImplementation";
import { DataSeries } from "./DataSeries";
import { IDataSourceLocalDataProvider } from "./IDataSourceLocalDataProvider";
import { IDataSeriesAdapterRule } from "./IDataSeriesAdapterRule";
/**
 * @hidden
 */
export declare class DataSeriesAdapter extends Base implements IExternalDataSeriesAdapter {
    static $t: Type;
    e: DataSeriesAdapterImplementation;
    private f;
    constructor();
    private j;
    i: any;
    getDataProvider(a: any): IDataSourceLocalDataProvider;
    l(a: (arg1: DataSeriesAdapter, arg2: DataSeries[]) => void): void;
    x(a: (arg1: DataSeriesAdapter, arg2: DataSeries[]) => void): void;
    k(a: DataSeries): void;
    v(a: DataSeries): void;
    w(a: number): void;
    c(a: number): DataSeries;
    a(): DataSeries[];
    n(): void;
    p(a: number, b: DataSeries): void;
    g(): number;
    m(a: IDataSeriesAdapterRule): void;
    y(a: IDataSeriesAdapterRule): void;
    z(a: number): void;
    d(a: number): IDataSeriesAdapterRule;
    o(): void;
    q(a: number, b: IDataSeriesAdapterRule): void;
    h(): number;
    b(): IDataSeriesAdapterRule[];
    r(a: any): void;
    s(a: any, b: number, c: any): void;
    t(a: any, b: number, c: any): void;
    u(a: any, b: number, c: any, d: any): void;
}