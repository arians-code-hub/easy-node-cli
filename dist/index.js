"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// npx tsx cli
const process = __importStar(require("process"));
const path_1 = require("./src/helper/path");
const isNumeric = (str) => typeof str !== "string" ? false : !isNaN(Number(str));
function convertArgs(args) {
    const data = {};
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
console.log('Running...');
if (!allArgs.length)
    process.exit(0);
const command = allArgs[0];
const args = allArgs.length ? convertArgs(allArgs.slice(1)) : {};
console.log('path', (0, path_1.basePath)());
console.log('command', command);
console.log('args', args);
// runCommand(command,args);
