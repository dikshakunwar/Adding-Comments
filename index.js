const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

let comments = [{

        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {

        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {

        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {

        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

app.get('/', (req, res) => {
    res.render("home")
})


app.get('/comments', (req, res) => {
    res.render('index', {
        comments
    })
})



app.get('/new', (req, res) => {
    res.render('new')
})

app.post('/hello', (req, res) => {
    const {
        username,
        comment
    } = req.body;
    comments.push({
        username,
        comment
    });
    res.redirect('/comments')
    // res.render('backtoHome');
})

app.listen(4000, () => {
    console.log("listening on port");
})