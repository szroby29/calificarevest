require('dotenv').config()

exports.handler = (event, _context, callback) => {
    console.log(event);

    const mailgun = require('mailgun-js');
    const mg = mailgun({
        apiKey: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN
    });

    const data = JSON.parse(event.body);

    const email = {
        from: `Calificari Vest <office@calificarivest.ro>`,
        to: `Robert Szalkai <szroby29@gmail.com>`,
        subject: `[${data.course}] [${data.location}] ${data.lastName} ${data.firstName}`,
        text: data.body
    }

    mg.messages().send(email, (error, response) => {
        callback(error, {
            statusCode: 200,
            body: JSON.stringify(response)
        })
    })

}