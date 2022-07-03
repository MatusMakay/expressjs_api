import express from 'express'
import { getHomePage } from './controllers/getHomePage.controller.mjs'
import { getFriend, getFriends } from './controllers/getFriends.controller.mjs'
import { addFriend } from './controllers/addFriend.controller.mjs'
const app = express()
const PORT = 3000

const friends = [{id : 2, name : "Matus"}, {id : 1, name : "Alex"}]

app.use((req, res, next) => {
    
    const date = Date.now();
    //call next app.use middleware 
    next()

    const time = Date.now() - date

    console.log(`${req.method} ${req.url} ${time}ms`)

})

app.use(express.json())

app.get('/', getHomePage(req, res))

app.get('/friends', getFriends(req, res))

// create param in req.params object
//url/:param
app.get('/friends/:friendId', getFriend(req, res))

app.post('/friends', addFriend(req, res))

app.listen(PORT, () => {
    console.log(`App is running on port = ${PORT}`)
})