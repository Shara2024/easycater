import express from 'express';
import cors from 'cors';
import { corsConfig } from './config/cors.js';

const app = express();

app.use(corsConfig);
app.use(express.json());
app.get('/health', (req, res) => {
  res.send('Hello, World!');
});

export default app;
