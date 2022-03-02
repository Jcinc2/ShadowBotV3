let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Doble.mp3'
conn.sendFile(m.chat, vn, 'Doble.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Doublekill|Double kill|double kill/i
handler.command = new RegExp



handler.fail = null
handler.exp = 100
module.exports = handler
