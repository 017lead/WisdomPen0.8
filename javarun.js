import express from 'express';
import OpenAI from "openai";
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '.env') });

const app = express();
const port = process.env.PORT || 8080; // Elastic Beanstalk will set process.env.PORT

app.use(express.json());
app.use(cors());

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error('OPENAI_API_KEY is not set in the environment');
  process.exit(1);
}

const openai = new OpenAI({ apiKey });

let assistant;
let thread;

app.get('/chat', async (req, res) => {
  // ... (rest of the code remains the same)
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app; // Export the app for potential use in tests