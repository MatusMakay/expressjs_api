import express from 'express'
import { getHomePage } from './controllers/getHomePage.controller.mjs'
import { getFriend, getFriends } from './controllers/getFriends.controller.mjs'
import { addFriend } from './controllers/addFriend.controller.mjs'
const app = express()
const PORT = 3000



app.use((req, res, next) => {
    
    const date = Date.now();
    //call next app.use middleware 
    next()

    const time = Date.now() - date

    console.log(`${req.method} ${req.url} ${time}ms`)

})

app.use(express.json())

app.get('/', getHomePage)

app.get('/friends', getFriends)

// create param in req.params object
//url/:param
app.get('/friends/:friendId', getFriend)

app.post('/friends', addFriend)

app.listen(PORT, () => {
    console.log(`App is running on port = ${PORT}`)
})