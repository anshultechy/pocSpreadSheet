export declare class PromiseWrapper {
    state(): string;
    then(continuation: any): PromiseWrapper;
    done(continuation: any): PromiseWrapper;
    fail(continuation: any): PromiseWrapper;
    always(continuation: any): PromiseWrapper;
}
export declare class PromiseFactory {
    resolve(result?: any): void;
    reject(error: any): void;
    promise(): PromiseWrapper;
}
