"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../../../index");
const jwt_1 = require("../../authentication/jwt");
const utils_1 = require("../utils");
const router = express_1.Router();
router.post('/projects/:id/1', jwt_1.auth, async (req, res) => {
    const user = req.user;
    const data = {
        stepOne: req.body.stepOne,
        stepTwo: req.body.stepTwo,
        stepThree: req.body.stepThree,
        stepFour: req.body.stepFour,
        stepFive: req.body.stepFive,
        stepSix: req.body.stepSix,
        stepSeven: req.body.stepSeven
    };
    try {
        const project = await index_1.prisma.project.findOne({
            where: { id: req.params.id },
            select: {
                ownerId: true,
                collaborators: {
                    select: { id: true }
                }
            }
        });
        if (utils_1.isOwnerOrCollaborator(user.id, project)) {
            const step = await index_1.prisma.stepOne.update({
                where: { projectId: req.params.id },
                data: data
            });
            res.json({ step: step });
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
//# sourceMappingURL=stepOne.js.map