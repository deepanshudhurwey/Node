const users = []

const addUser = ({id, username, room})=>{
    //clear data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()
    //validate data
    if(!username || !room)
    {
        return {
            error :'Username And Room is required'
        }
    }
    //check for existing user
    const existingUser = users.find((user)=>{
        return user.room === room && user.username === username
    })
    //validate user
    if(existingUser){
        return{
            error: 'Username is in use'
        }
    }
    //store user
    const user = {id, username, room}
    users.push(user)
    return ( user)
}

const removeUser = (id)=>{
    const index = users.findIndex((user)=>user.id == id)
    return index
}

  console.log(removeUser(83))

console.log(users)
module.exports = {

}