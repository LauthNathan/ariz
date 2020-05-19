import '../../lib/env';
import { Router } from 'express';
import { prisma } from '../../index';
import { userValidation, userLoginValidation } from '../../validation';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { upload } from '../utils';
import { auth } from './jwt';

const router = Router();


// ===== REGISTER =====
router.post('/register', upload.single('image'), async (req, res) => {
  // Validate Query
  const { error } = userValidation.validate(req.body);
  if (error) return res.status(400).json(error);

  // Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  try {
    console.log(req.body)
    console.log(req.file)
    const imagePath = req.file ? req.file.filename : 'user.png';
    const userQuery = prisma.user.create({
      data: {
        mail: req.body.mail,
        password: hashedPassword,
        username: req.body.username,
        image: imagePath,
        role: parseInt(req.body.role)
      }
    });
    res.json(await userQuery);
  } catch (e) {
    console.log(e)
    res.status(400).json({error: e});
  }
});


// ===== LOGIN =====
router.post('/login', async (req, res) => {
  console.log(req.body)
  // Validate Query
  const { error } = userLoginValidation.validate(req.body);
  if (error) return res.status(400).json(error);
  // Query
  const userQuery = prisma.user.findOne({
    where: {
      mail: req.body.mail
    }
  });

  try {
    // Find User
    const user = await userQuery;
    if (!user) return res.status(400).json({error: 'Wrong email or password'});
    // Check Password
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(400).json({error: 'Wrong email or password'});

    // Token
    if (!process.env.SECRET_KEY) return res.status(400).json({error: 'No JWT secret key'});
    const token = jwt.sign({id: user.id, username: user.username, mail: user.mail, role: user.role}, process.env.SECRET_KEY);
    res.header('auth-token', token).json({token: token});
  } catch (e) {
    res.status(400).json(e);
  }
});


// ===== USERS =====
router.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json({users});
  } catch (e) {
    res.status(400).json({error: e});
  }
});

router.get('/users/:id', async (req, res) => {
  try {
    const user = await prisma.user.findOne({
      where: {id: req.params.id}
    });
    res.json({user});
  } catch (e) {
    res.status(400).json({error: e});
  }
});

router.put('/users/:id', auth, upload.single('image'), async (req, res) => {
  const user = (req as any).user
  try {
    const imagePath = req.file.filename;
    const user = await prisma.user.update({
      where: {id: req.params.id},
      data: {
        image: imagePath
      }
    });
    res.json({user});
  } catch (e) {
    res.status(400).json({error: e})
  }
})

export default router;
