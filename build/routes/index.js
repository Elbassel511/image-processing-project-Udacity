"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var api_1 = __importDefault(require("./api/api"));
var listOfImages_1 = __importDefault(require("./imageList/listOfImages"));
var imageList_1 = __importDefault(require("./imageList/imageList"));
var routes = express_1.default.Router();
routes.use('/api', api_1.default);
routes.use('/imageList', imageList_1.default);
routes.use('/listOfImages', listOfImages_1.default);
exports.default = routes;
