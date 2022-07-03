import { chownSync } from "fs";
import { createServer } from "http";
const PORT = 3000


const friends = [{id : 2, name : "Matus"}, {id : 1, name : "Alex"}]

var countFriends = friends.length


const server = createServer((req, res) => {
    
    const url = req.url.split('/')
    


    if(req.method == 'POST'){
        
        req.on('data', (friend) => {
            friends.push(JSON.parse(friend))
            console.log(friends)
        })
        .on('error', (err) => console.log(err))
        req.pipe(res)

    }

    else if(url.length == 2){
        if(url.at(1) === 'friends'){
            listFriends(res);
        }
    
        else if(url.at(1) === ''){
            createHomePage(res);
        }
    }

    else if(url.length == 3){
        
        const idFriends = friends.map((element) => {
            if(element.id == url.at(2)){
                res.write(JSON.stringify(element))
                res.end()
            }
        })

    }
    
})

server.listen(PORT, () => {
    console.log('Server is listening at port 3000 ....')
})


function listFriends(res) {
   // res.write('<html> <body> <h1> list of friends </h1> </body> </html>')
    res.write(JSON.stringify(friends))
    res.end()

}

function createHomePage(res){

    res.write('<html> <body> <h1> Hello User </h1> </body> </html>')
    res.end()

}