"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = exports.Directory = void 0;
const fs = __importStar(require("fs"));
const _path = __importStar(require("path"));
class Directory {
    static exists(props) {
        return fs.existsSync(props.path);
    }
    static copy(props) {
        fs.cpSync(props.from, props.to, { recursive: true, force: props?.force ?? true });
    }
    static delete(props) {
        if (!Directory.exists({ path: props.path }))
            return;
        fs.rmSync(props.path, { recursive: true, force: true });
    }
    static create(props) {
        if (props?.check && Directory.exists({ path: props.path }))
            throw new Error(`Directory ${props.path} exists`);
        fs.mkdirSync(props.path, { recursive: props?.recursive ?? true });
    }
    static createIfNotExists(props) {
        if (!Directory.exists({ path: props.path }))
            Directory.create({ path: props.path, recursive: props.recursive ?? true });
    }
}
exports.Directory = Directory;
class File {
    static readJson(props) {
        return JSON.parse(fs.readFileSync(props.path).toString());
    }
    static read(props) {
        return fs.readFileSync(props.path).toString();
    }
    static writeJson(props) {
        return File.create({ path: props.path, data: JSON.stringify(props.data) });
    }
    static copy(props) {
        fs.copyFileSync(props.from, props.to);
    }
    static dirName(props) {
        return _path.resolve(props.path, '..');
    }
    static exists(props) {
        return fs.existsSync(props.path);
    }
    static create(props) {
        if (props?.check && File.exists({ path: props.path }))
            throw new Error(`File ${props.path} exists`);
        (props?.createDir ?? true) && Directory.createIfNotExists({ path: File.dirName({ path: props.path }) });
        const text = typeof props?.data === 'object' ? JSON.stringify(props.data) : `${props?.data ?? ''}`;
        fs.writeFileSync(props.path, text);
    }
}
exports.File = File;
