let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/First blood.mp3'
conn.sendFile(m.chat, vn, 'First blood.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /First blood|first blood|FIRST BLOOD/i
handler.command = new RegExp



handler.fail = null
handler.exp = 100
module.exports = handler
