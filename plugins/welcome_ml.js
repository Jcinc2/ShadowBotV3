let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Welcome ml.mp3'
conn.sendFile(m.chat, vn, 'Welcome ml.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /welcomeml|welcome ml/
handler.command = new RegExp
module.exports = handler