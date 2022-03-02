let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Maniac.mp3'
conn.sendFile(m.chat, vn, 'Maniac.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Maniac|maniac/i
handler.command = new RegExp



handler.fail = null
handler.exp = 100
module.exports = handler
