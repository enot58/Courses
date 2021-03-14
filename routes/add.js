const {Router} = require('express');
const Course = require('../models/cours')
const router = Router()


router.get('/', (req, res) => {
    res.render('add', {
        title: 'Добавить курс',
        isAdd: true
    })
});

router.post('/', (req, res)=>{
    console.log(req.body)
    let course = new Course(req.body.title, req.body.price, req.body.img)

    res.redirect('/courses')
});


module.exports = router;
