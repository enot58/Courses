/*
const {Router} = require('express');
const router = Router()


router.use('/', (req, res) => {
    res.render('index', {
        title: 'Главная страница',
        isHome: true
    })
});


module.exports = router;*/
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Главная страница',
        isHome: true
    })
});



module.exports = router;