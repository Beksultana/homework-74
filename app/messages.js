const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get id mess')
});

router.get('/:id', (req, res) => {
    res.send('Get id mess')
});

router.post('/', (req, res) => {
    res.send('mess post')
});