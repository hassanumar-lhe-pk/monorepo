import { Request, Response } from 'express';
import { HelloMessage } from '../models/sample';

export const getHelloMessage = (req: Request, res: Response<HelloMessage>) => {
  res.json({ message: 'Hello, World!' });
};

