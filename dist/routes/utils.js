"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
exports.upload = multer_1.default({
    storage: multer_1.default.diskStorage({
        destination: (req, file, cb) => { cb(null, 'uploads/'); },
        filename: (req, file, cb) => { cb(null, Date.now() + path_1.default.extname(file.originalname)); },
    }),
    fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/))
            return cb(null, false);
        cb(null, true);
    }
});
//# sourceMappingURL=utils.js.map