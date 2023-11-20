import express from 'express';
import { getHelloMessage } from '../controllers/sample';

const router = express.Router();

router.get('/hello', getHelloMessage);

export default router;
