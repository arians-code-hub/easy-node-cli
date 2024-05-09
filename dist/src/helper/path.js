"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basePath = exports.moduleBasePath = void 0;
function moduleBasePath() {
    var _a;
    return (_a = require.main) === null || _a === void 0 ? void 0 : _a.path;
}
exports.moduleBasePath = moduleBasePath;
function basePath() {
    const module = moduleBasePath();
    return !!module ? module + './../../' : './';
}
exports.basePath = basePath;
