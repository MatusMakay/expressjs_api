import {model} from '../models/friends.model.mjs'

// create param in req.params object
//url/:param
function getFriend(req, res) {


    const friendId = req.params.friendId
    var found = false
    
    model.map((elem) => {
        if(elem.id == friendId){
            found = true
            res.json(elem)
        }
    })

    if(!found){
        res.status(404).json({
            error: "Friends doesn't exist"
        })
    }
}

function getFriends(req, res){
    res.json(model)
}

export {
    getFriend,
    getFriends
}