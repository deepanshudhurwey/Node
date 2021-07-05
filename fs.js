const fs = require('fs')

fs.readFile('tee.txt', 'utf8',(err, data)=>{
    if(err){
        console.log(err)
    }
    console.log('data', data)
  })

fs.writeFile('tee.txt','hi, this is new data ',(err)=>{
    if(err)
    {
        throw err
    }
    console.log('write done')
})

