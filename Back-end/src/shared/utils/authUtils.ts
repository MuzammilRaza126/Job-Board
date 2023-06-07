import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Settings from './settings';

const config = Settings

export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

export const comparePasswords = async (password: string, hashedPassword: string): Promise<boolean> => {
  const match = await bcrypt.compare(password, hashedPassword);
  return match;
};

export const generateToken = (payload: object): string => {
  const token = jwt.sign(payload, config.JWT_SECRET);
  return token;
};

export const verifyToken = (token: string): object | string => {
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    return decoded;
  } catch (error) {
    return 'Invalid token';
  }
};
