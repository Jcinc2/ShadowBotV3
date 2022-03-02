let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Eres manco.mp3'
conn.sendFile(m.chat, vn, 'Eres manco.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Eres manco|eres un manco|Eresunmanco/i
handler.command = new RegExp



handler.fail = null
handler.exp = 100
module.exports = handler
