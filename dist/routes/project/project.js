"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../../index");
const jwt_1 = require("../authentication/jwt");
const utils_1 = require("./utils");
const utils_2 = require("../utils");
const router = express_1.Router();
router.get('/projects', jwt_1.auth, async (req, res) => {
    const user = req.user;
    try {
        const projects = await index_1.prisma.user.findOne({
            where: { id: user.id },
            select: {
                projects: true,
                collaborativeProjects: true
            }
        });
        res.json({ projects: projects });
    }
    catch (e) {
        res.status(400).json({ error: e });
    }
});
router.get('/projects/:id', jwt_1.auth, async (req, res) => {
    const user = req.user;
    try {
        const project = await index_1.prisma.project.findOne({
            where: {
                id: req.params.id
            },
            include: {
                owner: true,
                collaborators: true,
                stepOne: true,
                stepTwo: true,
                stepThree: true,
                stepFour: true,
                stepFive: true,
                stepSix: true,
                stepSeven: true,
                stepEight: true,
                stepNine: true
            }
        });
        if (utils_1.isOwner(user.id, project))
            res.json({ project: project });
        else
            res.status(401).json({ error: 'User not authorized to update this project' });
    }
    catch (e) {
        res.status(400).json({ error: e });
    }
});
router.post('/projects', jwt_1.auth, utils_2.upload.single('image'), async (req, res) => {
    const user = req.user;
    try {
        const imagePath = req.file.filename;
        const project = await index_1.prisma.project.create({
            data: {
                name: req.body.name,
                image: imagePath,
                owner: {
                    connect: { id: user.id }
                },
                collaborators: req.body.collaborators
            }
        });
        res.json({ project: project });
    }
    catch (e) {
        res.status(400).json({ error: e });
    }
});
router.delete('/projects/:id', jwt_1.auth, async (req, res) => {
    const user = req.user;
    try {
        const project = await index_1.prisma.project.delete({
            where: { id: req.params.id },
            select: {
                id: true,
                ownerId: true
            }
        });
        if (project && project.ownerId === user.id) {
            res.json({ project: project });
        }
        else {
            res.status(401).json({ error: 'User not authorized to update this project' });
        }
    }
    catch (e) {
        res.status(400).json({ error: e });
    }
});
exports.default = router;
//# sourceMappingURL=project.js.map