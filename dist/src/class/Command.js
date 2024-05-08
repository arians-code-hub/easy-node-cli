"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ofStaticClass = exports.Command = void 0;
class Command {
}
exports.Command = Command;
function ofStaticClass(cls, index) {
    const obj = {};
    for (let pr of Object.getOwnPropertyNames(cls)) {
        if (typeof cls[pr] === "function") {
            obj[pr] = cls[pr];
        }
    }
    obj['index'] = index !== null && index !== void 0 ? index : ((...args) => console.log(`index from ${cls.constructor.name}`, args));
    return obj;
}
exports.ofStaticClass = ofStaticClass;
