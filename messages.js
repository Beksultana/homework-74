const express = require('express');
const router = express.Router();
const fs = require('fs');
const fileDb = require('./fileDb');

router.get('/', (req, res) => {
    const lastMessages = fileDb.getMessages();
    console.log(lastMessages);
    res.send( lastMessages.slice(lastMessages.length - 5));
});

router.get('/:id', (req, res) => {
    res.send('Get id mess')
});

router.post('/', (req, res) => {
    console.log(req.body);
    const date = new Date().toISOString();
   const message = {
       message: req.body.message,
       date: date
   };
    fs.writeFileSync(`./messages/${date}.txt`, JSON.stringify(message));
    res.send(message)
});

module.exports = router;