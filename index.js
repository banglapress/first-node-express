const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())


//npm run start-dev

const port = process.env.PORT || 5000;

const handler = (req, res) => {
    res.send('This is TEST 222 444 TEst node app')
}

app.get('/', handler);

// handler-er bodole function-ta likheo deoa jay

const users = [
    { id: 0, name: 'Shabana', email: 'shabana@gmail.com' },
    { id: 1, name: 'Shabana', email: 'shabana@gmail.com' },
    { id: 2, name: 'Shabana', email: 'shabana@gmail.com' },
    { id: 3, name: 'Shabana', email: 'shabana@gmail.com' },
    { id: 4, name: 'Shabana', email: 'shabana@gmail.com' },
    { id: 5, name: 'Shabana', email: 'shabana@gmail.com' }
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

// if you want to save something from client side
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('got something', req.body)
    // res.send(JSON.stringify(newUser)) //---- etake nicher moto songkhepeo lekha jay----
    res.json(newUser)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
