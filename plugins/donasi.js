let handler = async m => m.reply(`
╭─「 Donasi • Paketan Atau Data 」
│ •  [6285746030186]
│ •  [Nomor Bot]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
