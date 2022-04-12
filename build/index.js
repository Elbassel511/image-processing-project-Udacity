"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var port = 3000;
app.use(express_1.default.static(path_1.default.resolve(__dirname, '../public')));
app.listen(port, function () { return console.log("server is running on port : ".concat(port)); });
app.get('/', function (req, res) {
    res.status(200).sendFile(path_1.default.resolve(__dirname, '../public/index.html'));
});
app.get('/api-gui', function (req, res) {
    res.status(200).sendFile(path_1.default.resolve(__dirname, '../public/api.html'));
});
app.get('/api', index_1.default);
app.get('/imageList', index_1.default);
app.get('/listOfImages', index_1.default);
exports.default = app;
