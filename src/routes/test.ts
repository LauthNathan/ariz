import { Router } from 'express';
import { auth } from './authentication/jwt';

const router = Router();

router.get('/', auth, (req, res) => {
  console.log('ok')
  res.json({test: 'ok'});
})

export default router;
