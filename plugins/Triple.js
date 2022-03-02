let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Triple.mp3'
conn.sendFile(m.chat, vn, 'Triple.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Triplekill|Triple kill|Triple Kill|triple kill/
handler.command = new RegExp
module.exports = handler
