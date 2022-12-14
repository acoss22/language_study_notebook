export type Values<T> = T[keyof T];
export type Keys<T> = keyof T;
export type Action<T> = {
    type: T;
    [args: string]: any;
}
