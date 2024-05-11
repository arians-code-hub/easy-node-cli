"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../class/Command");
const node_child_process_1 = require("node:child_process");
const path_1 = require("../helper/path");
const Str_1 = require("../lib/Str");
const File_1 = require("../lib/File");
class command extends Command_1.Command {
    index(props) {
        var _a;
        const name = (_a = props.name.split('/').pop()) !== null && _a !== void 0 ? _a : '';
        const tmpFileData = `require('./${name}').${name}(${JSON.stringify(props)});`;
        console.log('name', name);
        console.log('tmpFileData', tmpFileData);
        console.log('path', File_1.File.dirName({ path: props.name }) + '/' + Str_1.Str.randomFilename() + '.ts');
        (0, node_child_process_1.execSync)(`pwd`);
        File_1.File.create({
            path: File_1.File.dirName({ path: props.name }) + '/' + Str_1.Str.randomFilename() + '.ts',
            data: tmpFileData,
            check: true,
        });
        console.log('exec', `cd ${(0, path_1.basePath)()} && npx tsx ${File_1.File.dirName({ path: props.name })}`);
        (0, node_child_process_1.execSync)(`cd ${(0, path_1.basePath)()} && npx tsx ${File_1.File.dirName({ path: props.name })}`);
    }
}
exports.default = command;
