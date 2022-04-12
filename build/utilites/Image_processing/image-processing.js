"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
function resizeImage(_a) {
    var width = _a.width, height = _a.height, inputPath = _a.inputPath;
    return (0, sharp_1.default)(inputPath).resize(width, height).toBuffer();
}
exports.default = resizeImage;
