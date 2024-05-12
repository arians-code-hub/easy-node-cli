import {Command} from "../../class/Command";
import {Directory, File} from "../../lib/File";
import {execSync} from "node:child_process";
import {gatherExcept} from "../../lib/Object";
import {argsToStr} from "../../helper/args";

export default class run extends Command {
    index(props: {
        "!path": string,
        "!build"?: boolean,
        "!command"?: string,
    }): any {
        const current = execSync(`pwd`).toString();

        if (props['!build']){
            // execSync(`cd ${props['!path']} `);
            execSync(`npm --prefix=${props['!path']} run build `);
        }

        execSync(`node ${props["!path"]}/dist/index.js ${props["!command"]} ${argsToStr(gatherExcept(props, ['!build', '!path','!command']))}`);

    }
}