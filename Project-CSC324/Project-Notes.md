## Mail Trap integration code

I need to figure out where to include this in my code so that my contact page will allow emails to be sent to me. After this, my project is mostly done!


var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "dd7483aef12840",
    pass: "94603c5a4dc3df"
  }
});