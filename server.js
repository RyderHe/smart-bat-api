const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json()); // fix email

const database = {
    users: [
        {
            id: '123',
            name:'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries:0,
            joined:new Date()
        },
        {
            id: '124',
            name:'Sally',
            email: 'sally@gmail.com',
            password: 'bananas',
            entries:0,
            joined:new Date()
        }

    ]
} 

app.get('/', (req, res) => {
    // res.send('this is working');
    res.send(database.users);
})

app.post('/signin', (req, res) => {
    // res.send('signing');
    if (req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password) {
            res.json('sucess');
    } else {
        res.status(400).json('error logging in');
    }
    // res.json('signing');
})

app.post('/register', (req, res) => {
    const {email, name, password} = req.body;
    database.users.push({
        id:'125',
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    });
    res.json(database.users[database.users.length - 1]);
})

app.listen(3000, () => {
    console.log('app is running on port 3000');
})



/*
/ --> res = this is working
/signin --> POST = success/fail hidden from man-in-the-middle attacks, secure
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT user already exists, there is an update on user profile
       --> user
*/