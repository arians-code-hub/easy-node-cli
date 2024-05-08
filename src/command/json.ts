import {Command} from "../class/Command";
import {File} from "../lib/File";

export default class json extends Command {
    index(): any {
        console.log('Json index command.');
    }

    toJavascript(src: string, dst: string, key?: string | string[]) {
        return this.toJs(src, dst, key);
    }

    toJs(src: string, dst: string, key?: string | string[]) {
        let obj: any = File.readJson(src);
        if (key) {
            if (typeof key === 'string' && !!key)
                obj = obj[key];
            else if (Array.isArray(key) && key.length)
                for (let k of key)
                    obj = obj[k];
        }
        File.writeJson(dst, obj);
    }
}