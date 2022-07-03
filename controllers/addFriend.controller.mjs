function addFriend(req, res){
    
    if(!req.body.name){
        return res.status(400).json({
            error:'Missing friend name',
        })
    }

    const newFriend = {
        name : req.body.name,
        id : friends.length
    }

    friends.push(newFriend)

    res.json(newFriend)

    console.log('everything is ok ')
}

export{
    addFriend
}