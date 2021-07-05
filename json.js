const { json } = require("express")

const data = '{"name":"john"}'

const rs = JSON.parse(data)
console.log(rs)
const res = JSON.stringify(rs)

console.log(res)