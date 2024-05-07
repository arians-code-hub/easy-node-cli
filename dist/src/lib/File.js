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
const path = __importStar(require("path"));
class Directory {
    static exists(path) {
        return fs.existsSync(path);
    }
    static copy(from, to, force = true) {
        fs.cpSync(from, to, { recursive: true, force });
    }
    static delete(path) {
        if (!Directory.exists(path))
            return;
        fs.rmSync(path, { recursive: true, force: true });
    }
    static create(path, props = {
        recursive: true,
    }) {
        if ((props === null || props === void 0 ? void 0 : props.check) && Directory.exists(path))
            throw new Error(`Directory ${path} exists`);
        fs.mkdirSync(path, { recursive: props.recursive });
    }
    static createIfNotExists(path, props = {
        recursive: true,
    }) {
        if (!Directory.exists(path))
            Directory.create(path, props);
    }
}
exports.Directory = Directory;
class File {
    static readJson(path) {
        return JSON.parse(fs.readFileSync(path).toString());
    }
    static writeJson(path, data) {
        return File.writeJson(path, JSON.stringify(data));
    }
    static copy(from, to) {
        fs.copyFileSync(from, to);
    }
    static dirName(_path) {
        return path.resolve(_path, '..');
    }
    static exists(path) {
        return fs.existsSync(path);
    }
    static create(path, props = {}) {
        var _a;
        if ((props === null || props === void 0 ? void 0 : props.check) && File.exists(path))
            throw new Error(`File ${path} exists`);
        (props === null || props === void 0 ? void 0 : props.createDir) && Directory.createIfNotExists(File.dirName(path));
        const text = typeof (props === null || props === void 0 ? void 0 : props.data) === 'object' ? JSON.stringify(props.data) : `${(_a = props === null || props === void 0 ? void 0 : props.data) !== null && _a !== void 0 ? _a : ''}`;
        fs.writeFileSync(path, text);
    }
}
exports.File = File;
