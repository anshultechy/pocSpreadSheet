import { DataSourcePageRequestPriority } from "./DataSourcePageRequestPriority";
import { Type } from "./type";
/**
 * @hidden
 */
export interface IPageCandidatesSink {
    addCandidate(a: number, b: DataSourcePageRequestPriority): boolean;
    removeCandidate(a: number): void;
}
/**
 * @hidden
 */
export declare let IPageCandidatesSink_$type: Type;