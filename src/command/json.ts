import {Command} from "../class/Command";
import {File} from "../lib/File";

export default class json extends Command {
    index(): any {
        console.log('Json index command.');
    }

    toJavascript(props : {
        src: string,
        dst: string,
        key?: string | string[]
    }) {
        return this.toJs(props);
    }

    toJs(props : {
        src: string,
        dst: string,
        key?: string | string[]
    }) {
        console.log('props',props);

        let obj: any = File.readJson(props.src);
        if (props.key) {
            if (typeof props.key === 'string' && !!props.key)
                obj = obj[props.key];
            else if (Array.isArray(props.key) && props.key.length)
                for (let k of props.key)
                    obj = obj[k];
        }
        File.writeJson(props.dst, obj);
    }
}