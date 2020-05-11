import './lib/env';
import { PrismaClient } from '@prisma/client';
import express from 'express';
import authRoute from './routes/authentication/auth';
import projectRoute from './routes/project/project';
import stepOneRoute from './routes/project/steps/stepOne';
import testRoute from './routes/test';
import cors from 'cors';

// Constants
const PORT = parseInt(process.env.port||'3000');

// Prisma
export const prisma = new PrismaClient();

// App
const app = express();
app.use(cors());

// Middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Routes
app.use('/api', [authRoute, projectRoute, stepOneRoute]);
app.use('/test', testRoute);

// Start
app.listen(PORT, () => console.log(`🚀 Server started : http://localhost:${PORT}`));
