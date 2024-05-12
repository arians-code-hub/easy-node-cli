"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../../class/Command");
const node_child_process_1 = require("node:child_process");
const Object_1 = require("../../lib/Object");
const args_1 = require("../../helper/args");
class run extends Command_1.Command {
    index(props) {
        console.log('props', props);
        const current = (0, node_child_process_1.execSync)(`pwd`).toString();
        console.log('current', current);
        process.exit(0);
        if (props['!build'])
            (0, node_child_process_1.execSync)(`cd ${props['!path']} && npm run build`);
        (0, node_child_process_1.execSync)(`node ${props["!path"]}/dist/index.js ${props["!command"]} ${(0, args_1.argsToStr)((0, Object_1.gatherExcept)(props, ['!build', '!path', '!command']))}`);
    }
}
exports.default = run;
