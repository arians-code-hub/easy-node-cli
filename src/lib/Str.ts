import * as path from "path";
export class Str{

    static firstLower(name : string) {
        return name[0].toLowerCase() + name.substring(1);
    }
    static filename(dir : string){
        const basename = path.basename(dir);
        return basename.substring(0, basename.lastIndexOf('.'))
    }
}