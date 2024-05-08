"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.args = exports.commandMethod = exports.command = void 0;
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
            _key = data[arg.substring(0, index)];
        }
        else {
            _key = arg.substring(0, index);
            const tmp = arg.substring(index + 1);
            _val = isNumeric(tmp) ? Number(tmp) : tmp;
        }
        console.log('key', _key);
        console.log('val', _val);
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
const allArgs = process_1.default.argv.slice(2);
let _command = allArgs.length ? convertArgs([allArgs[0]]) : undefined;
exports.command = _command ? Object.keys(_command)[0] : undefined;
exports.commandMethod = _command ? Object.values(_command)[0] : undefined;
exports.args = allArgs.length > 1 ? convertArgs(allArgs.slice(1)) : {};
