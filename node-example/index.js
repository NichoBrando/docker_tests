const express = require('express');
const app = express();
app.use((_req, res) => res.send('Hello world'));
app.listen(3000, () => console.log('Listening on port 3001'));