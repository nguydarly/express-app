const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import routes
const routes = require('./routes');  // looks for routes/index.js automatically
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

