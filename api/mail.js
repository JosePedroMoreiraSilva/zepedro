const nodemailer = require("nodemailer");
module.exports = async (req, res) => {
  const transporter = nodemailer.createTransport({
      service: "gmail",
        auth: {
            user: "gofuther.company@gmail.com",
            pass: "ppprusyawjcgpbzd",
        },
    });

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
          if (error) {
              console.log(error);
              reject(error);
          } else {
              console.log("Server is ready to take our messages");
              resolve(success);
          }
      });
  });

  //mudar isto para variáveis de ambiente
    const mailData = {
      from: {
          address: "gofuther.company@gmail.com",
      },
      to: "gofuther.company@gmail.com",
      subject: `form message`,
      text: req.body.message + " | Sent from: " + req.body.email + " | Nome : " +req.body.name,
      //html: `${message}`,
  };

  await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailData, (err, info) => {
          if (err) {
              console.error(err);
              reject(err);
          } else {
              console.log(info);
              resolve(info);
          }
      });
  });

  res.status(200).json({ status: "OK" });
};
