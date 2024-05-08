import process from "process";

const isNumeric = (str: any) => typeof str !== "string" ? false : !isNaN(Number(str));

function convertArgs(args: string[]) {
    const data: { [key: string]: string | boolean | number } = {};
    for (let arg of args) {
        if (!(!!arg))
            continue;
        const index = arg.indexOf(':');
        if (index == -1)
            data[arg] = true;
        else if (index === arg.length - 1)
            data[arg.substring(0, index)] = false;
        else {
            const tmp = arg.substring(index + 1);
            data[arg.substring(0, index)] = isNumeric(tmp) ? Number(tmp) : tmp;
        }
    }
    return data;
}

const allArgs = process.argv.slice(2);

let _command = allArgs.length ? convertArgs([allArgs[0]]) : undefined;

export const command = _command ? Object.keys(_command)[0] : undefined;
export const commandMethod = _command ? Object.values(_command)[0] : undefined;

export const args = allArgs.length > 1 ? convertArgs(allArgs.slice(1)) : {};


