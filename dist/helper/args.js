"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.args = exports.commandMethod = exports.command = exports.argsToStr = exports.convertArgs = void 0;
const process_1 = __importDefault(require("process"));
const isNumeric = (str) => typeof str !== "string" ? false : !isNaN(Number(str));
function convertArgs(args) {
    const data = {};
    for (let arg of args) {
        if (!(!!arg))
            continue;
        const index = arg.indexOf(':');
        let _val;
        let _key = arg;
        if (index == -1)
            _val = true;
        else if (index === arg.length - 1) {
            _val = false;
            _key = arg.substring(0, index);
        }
        else {
            _key = arg.substring(0, index);
            const tmp = arg.substring(index + 1);
            _val = isNumeric(tmp) ? Number(tmp) : tmp;
        }
        if (_key in data) {
            if (Array.isArray(data[_key])) { // @ts-ignore
                data[_key].push(_val);
            }
            else
                data[_key] = [data[_key], _val];
        }
        else
            data[_key] = _val;
    }
    return data;
}
exports.convertArgs = convertArgs;
function argsToStr(args) {
    let s = '';
    for (let key in args) {
        const val = args[key];
        if (val === true)
            s += ` ${key} `;
        else if (val === false)
            s += ` ${key}: `;
        else if (typeof val === 'string' || typeof val === 'number')
            s += ` "${key}:${val}"; `;
        else {
            for (let item of val)
                if (item === true)
                    s += ` ${key} `;
                else if (item === false)
                    s += ` ${key}: `;
                else if (typeof item === 'string' || typeof item === 'number')
                    s += ` "${key}:${item}"; `;
        }
    }
    return s;
}
exports.argsToStr = argsToStr;
const allArgs = process_1.default.argv.slice(2);
let _command = allArgs.length ? convertArgs([allArgs[0]]) : undefined;
exports.command = _command ? Object.keys(_command)[0] : undefined;
exports.commandMethod = _command ? Object.values(_command)[0] : undefined;
exports.args = allArgs.length > 1 ? convertArgs(allArgs.slice(1)) : {};
