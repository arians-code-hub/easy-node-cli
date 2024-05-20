import * as args from "./args";
import {Directory} from "../lib/File";

export function run(command: string, method:any, args: any): any {
    let path = '../command/' + command;

    if(Directory.isDir({path}))
        path+=`/${command}`;

    const cls = require(path).default;
    const obj = new cls;
    const m = typeof method === 'string' && !!method ? method : 'index';
    return obj[m](args);
}

export function runCli() {
    if (!(!!args.command)) {
        console.log('Empty');
        return undefined;
    }
    return run(args.command, args.commandMethod, args.args);
}
