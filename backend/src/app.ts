import express from 'express';
import { corsConfig } from '@/config/cors';

const app = express();

app.use(corsConfig);
app.use(express.json());

app.get('/health', (req, res) => {
  res.send('Hello, World!');
});

export default app;
