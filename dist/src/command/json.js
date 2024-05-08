"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../class/Command");
const File_1 = require("../lib/File");
class json extends Command_1.Command {
    index() {
        console.log('Json index command.');
    }
    toJavascript(props) {
        return this.toJs(props);
    }
    toJs(props) {
        let obj = File_1.File.readJson({ path: props.src });
        if (props.key) {
            if (typeof props.key === 'string' && !!props.key)
                obj = obj[props.key];
            else if (Array.isArray(props.key) && props.key.length)
                for (let k of props.key)
                    obj = obj[k];
        }
        File_1.File.writeJson({ path: props.dst, data: obj });
    }
}
exports.default = json;
