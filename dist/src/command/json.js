"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../class/Command");
const File_1 = require("../lib/File");
class json extends Command_1.Command {
    index() {
        console.log('Json index command.');
    }
    toJavascript(src, dst, key) {
        return this.toJs(src, dst, key);
    }
    toJs(src, dst, key) {
        let obj = File_1.File.readJson(src);
        if (key) {
            if (typeof key === 'string' && !!key)
                obj = obj[key];
            else if (Array.isArray(key) && key.length)
                for (let k of key)
                    obj = obj[k];
        }
        File_1.File.writeJson(dst, obj);
    }
}
exports.default = json;
