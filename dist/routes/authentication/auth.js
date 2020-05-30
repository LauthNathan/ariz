"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../../lib/env");
const express_1 = require("express");
const index_1 = require("../../index");
const validation_1 = require("../../validation");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const utils_1 = require("../utils");
const jwt_1 = require("./jwt");
const router = express_1.Router();
router.post('/register', utils_1.upload.single('image'), async (req, res) => {
    const { error } = validation_1.userValidation.validate(req.body);
    if (error)
        return res.status(400).json(error);
    const salt = await bcryptjs_1.default.genSalt(10);
    const hashedPassword = await bcryptjs_1.default.hash(req.body.password, salt);
    try {
        console.log(req.body);
        console.log(req.file);
        const imagePath = req.file ? req.file.filename : 'user.png';
        const userQuery = index_1.prisma.user.create({
            data: {
                mail: req.body.mail,
                password: hashedPassword,
                username: req.body.username,
                image: imagePath,
                role: parseInt(req.body.role)
            }
        });
        res.json(await userQuery);
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ error: e });
    }
});
router.post('/login', async (req, res) => {
    console.log(req.body);
    const { error } = validation_1.userLoginValidation.validate(req.body);
    if (error)
        return res.status(400).json(error);
    const userQuery = index_1.prisma.user.findOne({
        where: {
            mail: req.body.mail
        }
    });
    try {
        const user = await userQuery;
        if (!user)
            return res.status(400).json({ error: 'Wrong email or password' });
        const validPassword = await bcryptjs_1.default.compare(req.body.password, user.password);
        if (!validPassword)
            return res.status(400).json({ error: 'Wrong email or password' });
        if (!process.env.SECRET_KEY)
            return res.status(400).json({ error: 'No JWT secret key' });
        const token = jsonwebtoken_1.default.sign({ id: user.id, username: user.username, mail: user.mail, role: user.role }, process.env.SECRET_KEY);
        res.header('auth-token', token).json({ token: token });
    }
    catch (e) {
        res.status(400).json(e);
    }
});
router.get('/users', async (req, res) => {
    try {
        const users = await index_1.prisma.user.findMany();
        res.json({ users });
    }
    catch (e) {
        res.status(400).json({ error: e });
    }
});
router.get('/users/:id', async (req, res) => {
    try {
        const user = await index_1.prisma.user.findOne({
            where: { id: req.params.id }
        });
        res.json({ user });
    }
    catch (e) {
        res.status(400).json({ error: e });
    }
});
router.put('/users/:id', jwt_1.auth, utils_1.upload.single('image'), async (req, res) => {
    const user = req.user;
    try {
        const imagePath = req.file.filename;
        const user = await index_1.prisma.user.update({
            where: { id: req.params.id },
            data: {
                image: imagePath
            }
        });
        res.json({ user });
    }
    catch (e) {
        res.status(400).json({ error: e });
    }
});
exports.default = router;
//# sourceMappingURL=auth.js.map