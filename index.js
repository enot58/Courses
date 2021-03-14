const express = require('express');
/*const path = require('path');
const fs = require('fs');*/
const exsHbs = require('express-handlebars');

//Подключаем роутер
const homeRouters = require('./routes/home')
const addRouters = require('./routes/add')
const coursesRouters = require('./routes/courses')





const app = express()

// Далее создаём конфигуратор хандлбарс
const hbs = exsHbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views');

app.use(express.static('public'));

app.use(express.urlencoded({extended: true }))

app.use('/', homeRouters);
app.use('/add', addRouters);
app.use('/courses', coursesRouters);

// ******************** //

/*

app.get('/add', (req, res) => {
    res.render('add', {
        title: 'Добавить курс',
        isAdd: true
    })
});
*/


const port = 3000;





app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});