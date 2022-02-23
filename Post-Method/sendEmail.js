import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: "rkkarthi43@gmail.com",
        pass:"Karthi143"
    }
})

const option = {
    from: "rkkarthi43@gamil.com",
    to: "karthirk0388@gamil.com",
    subject: "Testing",
    html: `<h1>Welcome to NodeJs Class</h1>
    <p>Yes we are learning nodejs and expressjs</p>`
};

transporter.sendMail(option, err => {
    if (err) throw err;
    console.log("successFully mail send");
})