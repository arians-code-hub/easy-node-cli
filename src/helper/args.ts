import process from "process";

const isNumeric = (str: any) => typeof str !== "string" ? false : !isNaN(Number(str));

export function convertArgs(args: string[]) {
    const data: { [key: string]: string | boolean | number | ((boolean | number | string)[]) } = {};
    for (let arg of args) {
        if (!(!!arg))
            continue;
        const index = arg.indexOf(':');

        let _val: any;
        let _key: any = arg;

        if (index == -1)
            _val = true;
        else if (index === arg.length - 1) {
            _val = false;
            _key = arg.substring(0, index);
        } else {
            _key = arg.substring(0, index);
            const tmp = arg.substring(index + 1);
            _val = isNumeric(tmp) ? Number(tmp) : tmp;
        }
        if (_key in data) {
            if (Array.isArray(data[_key])) { // @ts-ignore
                data[_key].push(_val);
            } else
                data[_key] = [data[_key], _val];
        } else data[_key] = _val;
    }
    return data;
}

export function argsToStr(args : {[key : string] : string | boolean | number | ((boolean | number | string)[])}) : string{
    let s = '';
    for(let key in args){
        const val = args[key];
        if(val === true)
            s+=` ${key} `;
        else if(val === false)
            s+=` ${key}: `;
        else if(typeof val === 'string' || typeof val === 'number')
            s+=` "${key}:${val}"; `
        else{
            for(let item of val)
                if(item === true)
                    s+=` ${key} `;
                else if(item === false)
                    s+=` ${key}: `;
                else if(typeof item === 'string' || typeof item === 'number')
                    s+=` "${key}:${item}"; `
        }
    }
    return s;
}

const allArgs = process.argv.slice(2);

let _command = allArgs.length ? convertArgs([allArgs[0]]) : undefined;

export const command = _command ? Object.keys(_command)[0] : undefined;
export const commandMethod = _command ? Object.values(_command)[0] : undefined;

export const args = allArgs.length > 1 ? convertArgs(allArgs.slice(1)) : {};


