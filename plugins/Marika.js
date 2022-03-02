let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Marika.mp3'
conn.sendFile(m.chat, vn, 'Marika.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /i/Marika|marika|marica|marika/i
handler.command = new RegExp



handler.fail = null
handler.exp = 100
module.exports = handler
