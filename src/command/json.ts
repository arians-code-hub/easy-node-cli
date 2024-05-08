import {Command} from "../class/Command";
import {File} from "../lib/File";

export default class json extends Command {
    index(): any {
        console.log('Json index command.');
    }

    toJs(props : {
        src: string,
        dst: string,
        key?: string | string[]
    }) {
        let obj: any = File.readJson({path:props.src});
        if (props.key) {
            if (typeof props.key === 'string' && !!props.key)
                obj = obj[props.key];
            else if (Array.isArray(props.key) && props.key.length)
                for (let k of props.key)
                    obj = obj[k];
        }
        File.create({
            path:props.dst,
            data : `exports.default = ${JSON.stringify(obj)}`
        })
    }
    toTs(props : {
        src: string,
        dst: string,
        key?: string | string[]
    }) {
        let obj: any = File.readJson({path:props.src});
        if (props.key) {
            if (typeof props.key === 'string' && !!props.key)
                obj = obj[props.key];
            else if (Array.isArray(props.key) && props.key.length)
                for (let k of props.key)
                    obj = obj[k];
        }
        File.create({
            path:props.dst,
            data : `export default ${JSON.stringify(obj)}`
        })
    }
}