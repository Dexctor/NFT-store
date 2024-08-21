import { sign, verify } from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';
import * as bcryptjs from 'bcryptjs';

export const hashPassword = async (password: string): Promise<string> => {
  return bcryptjs.hash(password, 10);
};

export const comparePasswords = async (password: string, hashedPassword: string): Promise<boolean> => {
  return bcryptjs.compare(password, hashedPassword);
};

export const generateToken = (userId: string): string => {
  return sign({ userId }, process.env.JWT_SECRET!, { expiresIn: '1h' });
};

export const verifyToken = (token: string): JwtPayload & { userId: string } => {
  return verify(token, process.env.JWT_SECRET!) as JwtPayload & { userId: string };
};