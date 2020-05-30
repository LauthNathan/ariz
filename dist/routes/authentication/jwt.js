"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../../lib/env");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function auth(req, res, next) {
    const token = req.header('auth-token');
    if (!token)
        return res.status(401).json({ error: 'Access denied' });
    try {
        if (!process.env.SECRET_KEY)
            return res.status(400).json({ error: 'No JWT secret key' });
        const verfied = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        req.user = verfied;
        next();
    }
    catch (e) {
        res.status(400).json({ error: e });
    }
}
exports.auth = auth;
//# sourceMappingURL=jwt.js.map