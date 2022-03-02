let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/F.mp3'
conn.sendFile(m.chat, vn, 'F.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /F en el chat|f en el chat/i
handler.command = new RegExp



handler.fail = null
handler.exp = 100
module.exports = handler
