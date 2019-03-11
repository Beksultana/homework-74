const express = require('express');
const messages = require('./messages');
const app = express();
const fileDb = require('./fileDb');
fileDb.init();
app.use(express.json());
const port = 7000;

app.use('/messages', messages);

app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
});