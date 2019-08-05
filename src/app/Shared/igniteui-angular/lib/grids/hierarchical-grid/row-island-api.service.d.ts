import { IgxHierarchicalGridComponent } from './hierarchical-grid.component';
import { IgxRowIslandComponent } from './row-island.component';
import { Subject } from 'rxjs';
export declare class IgxRowIslandAPIService {
    change: Subject<any>;
    protected state: Map<string, IgxRowIslandComponent>;
    protected destroyMap: Map<string, Subject<boolean>>;
    protected childRowIslands: Map<string, IgxRowIslandComponent>;
    protected childGrids: Map<any, IgxHierarchicalGridComponent>;
    register(rowIsland: IgxRowIslandComponent): void;
    unsubscribe(rowIsland: IgxRowIslandComponent): void;
    get(id: string): IgxRowIslandComponent;
    unset(id: string): void;
    reset(oldId: string, newId: string): void;
    registerChildRowIsland(rowIsland: IgxRowIslandComponent): void;
    unsetChildRowIsland(rowIsland: IgxRowIslandComponent): void;
    getChildRowIsland(rowIslandKey: string): IgxRowIslandComponent;
    registerChildGrid(parentRowID: string | object, grid: IgxHierarchicalGridComponent): void;
    getChildGrids(inDepth?: boolean): any[];
    getChildGridByID(rowID: any): IgxHierarchicalGridComponent;
}