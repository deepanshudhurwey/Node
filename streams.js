//method list - on
//events - data, end, error, finish


const fs = require('fs')
data = '';

const readstream = fs.createReadStream('tee.txt', 'utf8')
const writestream = fs.createWriteStream('tee2.txt')

//methods list - write, end
//events - data
writestream.write('hello world')
writestream.end('data', data)

readstream.on('data',(chunks)=>{
    data += chunks
}).on('end',()=>{
    console.log(data)
})