let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Ja.mp3'
conn.sendFile(m.chat, vn, 'Ja.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Ja c mamo|Jaja C mamo|JAJA C MAMO|/i
handler.command = new RegExp



handler.fail = null
handler.exp = 100
module.exports = handler
