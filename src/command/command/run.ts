import {Command} from "../../class/Command";
import {Directory, File} from "../../lib/File";
import {execSync} from "node:child_process";
import {gatherExcept} from "../../lib/Object";
import {argsToStr} from "../../helper/args";
import {basePath} from "../../helper/path";

export default class run extends Command {
    index(props: {
        "!path": string,
        "!build"?: boolean,
        "!command"?: string,
    }): any {
        const current = execSync(`pwd`).toString();
        if (props['!build']){
            console.log('building..............')
            const built = execSync(`cd ${props['!path']} && npm run build`);
            console.log('built...',built.toString());
            console.log('-------------------');
        }
        console.log('running...',);
        const runned = execSync(`cd ${basePath()} && node ${props["!path"]}/dist/index.js ${props["!command"]} ${argsToStr(gatherExcept(props, ['!build', '!path','!command']))}`);
        console.log(runned.toString());
        console.log('-------------------');

    }
}