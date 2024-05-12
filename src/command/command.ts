import {Command} from "../class/Command";
import {execSync} from "node:child_process";
import {basePath} from "../helper/path";
import {Str} from "../lib/Str";
import {File, Directory} from "../lib/File";
import * as ts from "typescript" ;
export default class command extends Command {
    index(props: {
        name: string
    }): any {
        // const name: string = props.name.split('/').pop() ?? '';
        //
        // const tmpFileData = `require('./${name}').${name}(${JSON.stringify(props)});`;
        //
        // console.log('name', name);
        // console.log('tmpFileData', tmpFileData);
        // console.log('path', File.dirName({path: props.name}) + '/' + Str.randomFilename() + '.ts');
        //
        // execSync(`pwd`);
        //
        // File.create({
        //     path: File.dirName({path: props.name}) + '/' + Str.randomFilename() + '.ts',
        //     data: tmpFileData,
        //     check: true,
        // });
        //
        // console.log('exec', `cd ${basePath()} && npx tsx ${File.dirName({path: props.name})}`);
        //
        // execSync(`cd ${basePath()} && npx tsx ${File.dirName({path: props.name})}`);

        const tsCode = File.read({path:props.name});
        const jsCode = ts.transpile(tsCode);
        const runnable = eval(jsCode);
        console.log(runnable);
    }
}