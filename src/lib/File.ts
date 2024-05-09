import * as fs from "fs";
import * as _path from "path";

export class Directory {
    static exists(props: { path: string }) {
        return fs.existsSync(props.path);
    }


    static copy(props: {
        from: string,
        to: string,
        force?: boolean
    }) {
        fs.cpSync(props.from, props.to, {recursive: true, force: props?.force ?? true});
    }

    static delete(props: { path: string }) {
        if (!Directory.exists({path: props.path}))
            return;
        fs.rmSync(props.path, {recursive: true, force: true});
    }

    static create(props: {
        path: string,
        check?: boolean,
        recursive?: boolean,
    }) {
        if (props?.check && Directory.exists({path: props.path}))
            throw new Error(`Directory ${props.path} exists`);
        fs.mkdirSync(props.path, {recursive: props?.recursive ?? true});
    }

    static createIfNotExists(props: {
        path: string,
        recursive?: boolean,
    }) {
        if (!Directory.exists({path: props.path}))
            Directory.create({path: props.path, recursive: props.recursive ?? true});
    }
}

export class File {
    static readJson(props: { path: string }): object {
        return JSON.parse(fs.readFileSync(props.path).toString());
    }

    static writeJson(props: { path: string, data: any }): any {
        return File.create({path: props.path, data: JSON.stringify(props.data)});
    }

    static copy(props: { from: string, to: string }) {
        fs.copyFileSync(props.from, props.to);
    }

    static dirName(props: { path: string }) {
        return _path.resolve(props.path, '..');
    }

    static exists(props: { path: string }) {
        return fs.existsSync(props.path);
    }

    static create(props: {
        path: string,
        check?: boolean,
        data?: any,
        createDir?: boolean,
    }) {
        if (props?.check && File.exists({path: props.path}))
            throw new Error(`File ${props.path} exists`);

        (props?.createDir ?? true) && Directory.createIfNotExists(
            {path:File.dirName({path:props.path})}
        );

        const text = typeof props?.data === 'object' ? JSON.stringify(props.data) : `${props?.data ?? ''}`;
        fs.writeFileSync(props.path, text);
    }
}