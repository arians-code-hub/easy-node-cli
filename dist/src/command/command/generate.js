"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../../class/Command");
const File_1 = require("../../lib/File");
const node_child_process_1 = require("node:child_process");
class generate extends Command_1.Command {
    index(props) {
        const packageJson = {
            "name": "easy-node-cli",
            "version": "1.0.0",
            "description": "",
            "main": "dist/index.js",
            "types": "dist/index.d.ts",
            "scripts": {
                "build": "tsc",
                "test": "echo \"Error: no test specified\" && exit 1",
                "push": "npm run build && git add -A && git commit -m \"msg\" && git push"
            },
            "bin": {
                "easy-node-cli": "bin.js"
            },
            "repository": {
                "type": "git",
                "url": "git+https://github.com/arians-code-hub/easy-node-cli.git"
            },
            "author": "",
            "license": "ISC",
            "bugs": {
                "url": "https://github.com/arians-code-hub/easy-node-cli/issues"
            },
            "homepage": "https://github.com/arians-code-hub/easy-node-cli#readme",
            "devDependencies": {
                "@types/node": "^20.12.10",
                "typescript": "^5.4.5"
            }
        };
        const tsConfig = {
            "compilerOptions": {
                "target": "es2016",
                "outDir": "./dist",
                "module": "commonjs",
                /* Specify what module code is generated. */
                "esModuleInterop": true,
                /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
                "forceConsistentCasingInFileNames": true,
                /* Ensure that casing is correct in imports. */
                "strict": true,
                /* Enable all strict type-checking options. */
                "skipLibCheck": true
            },
            "include": [
                "./**/*.ts",
                "./*.ts"
            ]
            /* Skip type checking all .d.ts files. */
        };
        File_1.Directory.create({
            path: props.path + '/command',
            check: true
        });
        File_1.File.writeJson({
            path: props.path + '/package.json',
            data: packageJson
        });
        File_1.File.writeJson({
            path: props.path + '/tsconfig.json',
            data: tsConfig
        });
        File_1.File.create({
            path: props.path + '/command/hello.ts',
            data: `import {Command} from "easy-node-cli/class/Command";
import {basePath} from "easy-node-cli/helper/path";

export default class hello extends Command{
   index(args : any): any {
       console.log('index of hello! ',args);
       console.log('base',basePath());
   }
}`
        });
        File_1.File.create({
            path: props.path + '/index.ts',
            data: `import {runCli} from "easy-node-cli/helper/runCommand";
console.log('< return >');
console.log(runCli());`
        });
        File_1.File.create({
            path: props.path + '/bin.js',
            data: `#!/usr/bin/env node
require('./dist/index');`
        });
        (0, node_child_process_1.execSync)(`cd ${props.path} && npm i`);
    }
}
exports.default = generate;
