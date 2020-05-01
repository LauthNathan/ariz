import '../lib/env';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

/**
 * Middleware for user auth
 * @param req express Request
 * @param res express Response
 * @param next express Next
 */
export function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.header('auth-token');
  if (!token) return res.status(401).json({error: 'Access denied'});
  try {
    if (!process.env.SECRET_KEY) return res.status(400).json({error: 'No JWT secret key'});
    const verfied = jwt.verify(token, process.env.SECRET_KEY);
    (req as any).user = verfied;
    next();
  } catch (e) {
    res.status(400).json({error: 'Invalid Token'});
  }
}
