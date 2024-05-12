"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../../../class/Command");
const File_1 = require("../../../lib/File");
class basic extends Command_1.Command {
    index() { console.log('index from basic!.'); }
    tsx(props) {
        const name = props.name.split('/').pop() ?? '';
        const data = `import type {Component} from 'solid-js';

export type C${name} = {
    children?: any
};
const ${name}: Component<C${name}> = (props) => {
    return (
        <>
            {props.children}
        </>
    );
};

export default ${name};
`;
        File_1.File.create({
            path: `${props.name}.tsx`,
            check: props?.force ?? true,
            data
        });
    }
}
exports.default = basic;
