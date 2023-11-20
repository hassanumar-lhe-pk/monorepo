// index.ts
import dotenv = require('dotenv');
dotenv.config();
import express from 'express';
import cors from 'cors';
import helloRoute from './routes/sample';

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// CORS middleware
app.use(cors());

// Use the helloRoute for '/api' path
app.use('/api', helloRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
