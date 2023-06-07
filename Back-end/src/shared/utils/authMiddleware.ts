import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Settings from './getValidationSettings';
import { JWT_SECRET } from '../../config';
// import { JWT_SECRET } from '../config';

interface DecodedToken {
  userId: string;
}


export const authMiddleware = (req: Request | any, res: Response, next: NextFunction): void => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
