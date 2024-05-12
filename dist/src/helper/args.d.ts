export declare function convertArgs(args: string[]): {
    [key: string]: string | number | boolean | (string | number | boolean)[];
};
export declare function argsToStr(args: {
    [key: string]: string | boolean | number | ((boolean | number | string)[]);
}): string;
export declare const command: string | undefined;
export declare const commandMethod: string | number | boolean | (string | number | boolean)[] | undefined;
export declare const args: {
    [key: string]: string | number | boolean | (string | number | boolean)[];
};
