import express from 'express'
import routes from './routes/index.js';
import { configDotenv } from 'dotenv';


configDotenv()

const app = express();
const port = process.env.PORT || 3000;


// Import routes  // looks for routes/index.js automatically
app.use('/users', routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

