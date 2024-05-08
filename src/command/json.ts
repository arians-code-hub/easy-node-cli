import {Command} from "../class/Command";
import {File} from "../lib/File";

export default class json extends Command {
    index(): any {
        console.log('Json index command.');
    }

    read(props: {
        src: string,
        key?: string | string[]
    }): any {
        let obj: any = File.readJson({path: props.src});
        if (props.key) {
            if (typeof props.key === 'string' && !!props.key)
                obj = obj[props.key];
            else if (Array.isArray(props.key) && props.key.length)
                for (let k of props.key)
                    obj = obj[k];
        }
        return obj;
    }

    copy(props: {
        src: string,
        dst: string,
        key?: string | string[]
    }) {
        File.create({
            path: props.dst,
            data: JSON.stringify(this.read(props)),
        })
    }

    toJs(props: {
        src: string,
        dst: string,
        key?: string | string[]
    }) {
        File.create({
            path: props.dst,
            data: `exports.default = ${JSON.stringify(this.read(props))}`,
        })
    }

    toTs(props: {
        src: string,
        dst: string,
        key?: string | string[]
    }) {
        File.create({
            path: props.dst,
            data: `export default ${JSON.stringify(this.read(props))}`,
        })
    }
}