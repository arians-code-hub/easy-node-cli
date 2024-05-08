"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../class/Command");
const dir = (0, Command_1.ofStaticClass)(File, () => console.log('index from dir!!'));
exports.default = dir;
