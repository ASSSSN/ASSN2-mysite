const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('intro', { title: 'Welcome!!'});
});

router.get('/main', (req, res) => {
    res.render('main', { title: 'ASSN2-mysite'});
});

module.exports = router;