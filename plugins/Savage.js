let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/SAVAGE.mp3'
conn.sendFile(m.chat, vn, 'SAVAGE.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /SAVAGE|savage|Savage/
handler.command = new RegExp
module.exports = handler
