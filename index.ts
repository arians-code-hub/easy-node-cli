// npx tsx cli
import * as process from "process";
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
console.log('Running...');

if (!allArgs.length)
    process.exit(0);

const command = allArgs[0];
const args = allArgs.length ? convertArgs(allArgs.slice(1)) : {};
console.log('command',command);
console.log('args',args);
// runCommand(command,args);
