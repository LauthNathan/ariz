"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
exports.userValidation = joi_1.default.object({
    username: joi_1.default.string().min(3).required(),
    mail: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(3).required(),
    image: joi_1.default.any(),
    role: joi_1.default.any().required()
});
exports.userLoginValidation = joi_1.default.object({
    mail: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(3).required()
});
//# sourceMappingURL=validation.js.map