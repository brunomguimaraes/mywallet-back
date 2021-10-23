import express from 'express';
import cors from 'cors';
import { signUp } from './controllers/sign-up.js';
import { logIn } from './controllers/login.js';
import { postEntry } from './controllers/entries.js';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/sign-up', signUp);

app.post('/login', logIn);

app.post('/entries', postEntry);

export default app;

