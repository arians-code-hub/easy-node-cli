import * as args from "./args";

export function run(command: string, method:any, args: any): any {
    const cls = require('../command/' + command).default;
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
