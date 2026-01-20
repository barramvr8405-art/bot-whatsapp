const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', qr => {
    console.log('ESCANEA ESTE QR:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('🤖 Bot conectado');
});

client.on('message', msg => {
    const text = msg.body.toLowerCase();

    if (text === 'menu') {
        msg.reply(
`📋 MENÚ DE CONSULTA
1️⃣ CANTIDAD CAPTURADA
2️⃣ MEGANO
3️⃣ MEDIO
4️⃣ BOTIQUÍN

Responde con el número`
        );
    }

    if (text === '1') {
        msg.reply('📦 CANTIDAD CAPTURADA: (dato aquí)');
    }

    if (text === '2') {
        msg.reply('🔴 MEGANO: (dato aquí)');
    }

    if (text === '3') {
        msg.reply('🟡 MEDIO: (dato aquí)');
    }

    if (text === '4') {
        msg.reply('🧰 BOTIQUÍN: (dato aquí)');
    }
});

client.initialize();
