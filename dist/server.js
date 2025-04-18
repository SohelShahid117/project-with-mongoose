"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./app/config"));
// getting-started.js
// const mongoose = require('mongoose');
const mongoose_1 = __importDefault(require("mongoose"));
main().catch(err => console.log(err));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(config_1.default.database_url);
            app_1.default.listen(config_1.default.port, () => {
                console.log(`Example app listening on port ${config_1.default.port}`);
            });
        }
        catch (err) {
            console.log(err);
        }
        // await mongoose.connect(process.env.DATABASE_URL);
        // await mongoose.connect(config.database_url as string);
        // await mongoose.connect('mongodb://127.0.0.1:27017/test');
        //mongodb+srv://sohelcuet09:<db_password>@cluster0.el2ir.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
        // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
        // app.listen(config.port, () => {
        //   console.log(`Example app listening on port ${config.port}`)
        // })
    });
}
// app.listen(port, () => {
// app.listen(config.port, () => {
//     console.log(`Example app listening on port ${config.port}`)
//   })
main();
