import { Router } from 'express';
import { prisma } from '../../../index'
import { auth } from '../../authentication/jwt';
import { isOwnerOrCollaborator } from '../utils';

const router = Router();

/**
 * Update the stepOne of a project owned by authenticated user
 */
router.post('/projects/:id/1', auth, async (req, res) => {
  const user = (req as any).user;
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
    const project = await prisma.project.findOne({
      where: { id: req.params.id },
      select: {
        ownerId: true,
        collaborators: {
          select: { id: true }
        }
      }
    });
    if (isOwnerOrCollaborator(user.id, project)) {
      const step = await prisma.stepOne.update({
        where: { projectId: req.params.id },
        data: data
      });
      res.json({step: step});
    } else {
      res.status(401).json({error: 'User not authorized to update this project'});
    }
  } catch (e) {
    res.status(400).json({error: e});
  }
})

export default router;
