const express = require('express')
const app = express()
const PORT = 3000

const friends = [{id : 2, name : "Matus"}, {id : 1, name : "Alex"}]

app.get('/', (req, res) => {

    res.send('<html> <body> <h1> Hello User </h1> </body> </html>')

})

app.get('/friends', (req, res) => {
    res.send(JSON.stringify(friends))
})

// create param in req.params
app.get('/friends/:friendId', (req, res) => {
    const friendId = req.params.friendId
    var found = false
    
    friends.map((elem) => {
        if(elem.id == friendId){
            found = true
            res.json(elem)
        }
    })

    if(!found){
        res.status(404).json({
            error: "Friend does't exist"
        })
    }
})


app.post('/friends', (req, res) => {
    req.on('data', (data) => {
        friends.push(JSON.parse(data))
    })    
    req.pipe(res)
})




app.listen(PORT, () => {
    console.log(`App is running on port = ${PORT}`)
})