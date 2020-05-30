import { Router } from 'express';
import path from 'path';
import { prisma } from '../../index'
import { auth } from '../authentication/jwt';
import { isOwner } from './utils';
import { upload } from '../utils';

const router = Router();

/**
 * Get all projects of authenticated user.
 */
router.get('/projects', auth, async (req, res) => {
  const user = (req as any).user
  try {
    const projects = await prisma.user.findOne({
      where: { id: user.id },
      select: {
        projects: true,
        collaborativeProjects: true
      }
    });
    res.json({projects: projects});
  } catch (e) {
    res.status(400).json({error: e})
  }
});


/**
 * Get one project of authenticated user.
 */
router.get('/projects/:id', auth, async (req, res) => {
  const user = (req as any).user;
  try {
    const project = await prisma.project.findOne({
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
    if (isOwner(user.id, project)) res.json({project: project});
    else res.status(401).json({error: 'User not authorized to update this project'});
  } catch (e) {
    res.status(400).json({error: e});
  }
})


/**
 * Create a project owned by authenticated user
 */
router.post('/projects', auth, upload.single('image'), async (req, res) => {
  const user = (req as any).user;
  try {
    const imagePath = req.file.filename;
    const project = await prisma.project.create({
      data: {
        name: req.body.name,
        image: imagePath,
        owner: {
          connect: { id: user.id }
        },
        collaborators: req.body.collaborators
      }
    });
    res.json({project: project});
  } catch (e) {
    res.status(400).json({error: e})
  }
})


/**
 * Not working => Need delete cascade
 */
router.delete('/projects/:id', auth, async (req, res) => {
  const user = (req as any).user;
  try {
    const project = await prisma.project.delete({
      where: { id: req.params.id },
      select: {
        id: true,
        ownerId: true
      }
    });
    if (project && project.ownerId === user.id) {
      res.json({project: project});
    } else {
      res.status(401).json({error: 'User not authorized to update this project'});
    }
  } catch (e) {
    res.status(400).json({error: e});
  }
});


export default router;
