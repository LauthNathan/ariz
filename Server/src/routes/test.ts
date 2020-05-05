import { Router } from 'express';
import { auth } from './jwt';

const router = Router();

router.get('/', auth, (req, res) => {
  res.json({test: 'ok'});
})

export default router;
