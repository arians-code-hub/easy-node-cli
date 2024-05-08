import * as fs from "fs";
import * as path from "path";

export class Directory {
    static exists(path: string) {
        return fs.existsSync(path);
    }


    static copy(from: string,to : string,force: boolean= true){
        fs.cpSync(from, to, {recursive: true,force});
    }

    static delete(path: string){
        if(!Directory.exists(path))
            return;
        fs.rmSync(path, { recursive: true, force: true });
    }

    static create(path: string, props: {
        check?: boolean,
        recursive?:boolean,
    } = {
        recursive:true,
    }) {
        if (props?.check && Directory.exists(path))
            throw new Error(`Directory ${path} exists`);
        fs.mkdirSync(path,{ recursive: props.recursive });
    }
    static createIfNotExists(path: string, props: {
        recursive?:boolean,
    } = {
        recursive:true,
    }){
        if(!Directory.exists(path))
            Directory.create(path,props);
    }
}

export class File {
    static readJson(path : string) : object{
        return JSON.parse(fs.readFileSync(path).toString());
    }
    static writeJson(path : string,data : any) : any{
        return File.writeJson(path,JSON.stringify(data));
    }

    static copy(from: string,to : string){
        fs.copyFileSync(from,to);
    }

    static dirName(_path : string){
        return path.resolve(_path, '..');
    }
    static exists(path: string) {
        return fs.existsSync(path);
    }

    static create(path: string, props: {
        check?: boolean,
        data?: any,
        createDir?:boolean,
    } = {}) {
        if (props?.check && File.exists(path))
            throw new Error(`File ${path} exists`);

        props?.createDir && Directory.createIfNotExists(File.dirName(path));

        const text = typeof props?.data === 'object' ? JSON.stringify(props.data) : `${props?.data ?? ''}`;
        fs.writeFileSync(path, text);
    }
}