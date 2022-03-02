let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Defeat.mp3'
conn.sendFile(m.chat, vn, 'Defeat.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Defeat|defeat|DEFEAT/i
handler.command = new RegExp



handler.fail = null
handler.exp = 100
module.exports = handler
