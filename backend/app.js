import express from 'express';
import cors from 'cors';
import routes from './routes.js';

const app = express();
app.use(cors());
app.use('/api', routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend ready on http://localhost:${PORT}`));
