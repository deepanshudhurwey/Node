
const clientside = io()
//elements 
const $messageform = document.querySelector('#message')
const $messageforminput = document.querySelector('input')
const $messageformbutton = document.querySelector('#submit')
const $messages = document.querySelector('#messages')


//Templates
const messageTemplate = document.querySelector('#message-template').innerHTML
const sidebarTemplate = document.querySelector('#sidebar-template').innerHTML

//options
const {username ,room }=Qs.parse(location.search, {ignoreQueryPrefix : true })

//scroll

const autoscroll = () => {
    // New message element
    const $newMessage = $messages.lastElementChild

    // Height of the new message
    const newMessageStyles = getComputedStyle($newMessage)
    const newMessageMargin = parseInt(newMessageStyles.marginBottom)
    const newMessageHeight = $newMessage.offsetHeight + newMessageMargin

    // Visible height
    const visibleHeight = $messages.offsetHeight

    // Height of messages container
    const containerHeight = $messages.scrollHeight

    // How far have I scrolled?
    const scrollOffset = $messages.scrollTop + visibleHeight

    if (containerHeight - newMessageHeight <= scrollOffset) {
        $messages.scrollTop = $messages.scrollHeight
    }
}


clientside.on('message', (message) => {
    // Render the template with the message data
    const html = Mustache.render(messageTemplate, {
    username: message.username,
    message : message.text,
    createdAt : moment(message.createdAt).format('h:mm A')
    })
    // Insert the template into the DOM
    $messages.insertAdjacentHTML('beforeend', html)
    autoscroll()
   })

   
    $messageform.addEventListener('submit',(e)=>{
    e.preventDefault()
    $messageformbutton.setAttribute('disabled','disabled')
    const message = e.target.elements.Clientmessage.value
    
    clientside.emit('messagefromC',message,(error)=>{
        $messageformbutton.removeAttribute('disabled','disabled')
        $messageforminput.value=' '
        $messageforminput.focus()
        if(error)
        {
            return console.log(error)
        }
        })
})

clientside.on('roomData', ({ room, users }) => {
    const html = Mustache.render(sidebarTemplate, {
        room,
        users
    })
    document.querySelector('#sidebar').innerHTML = html
})
//emit username and room to server
clientside.emit('join',{username,room}, (error)=>{
    if(error){
        alert(error)
        location.href = '/'
    }

})