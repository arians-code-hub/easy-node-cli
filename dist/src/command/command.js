"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../class/Command");
const node_child_process_1 = require("node:child_process");
class command extends Command_1.Command {
    index(props) {
        (0, node_child_process_1.execSync)('');
    }
}
exports.default = command;
