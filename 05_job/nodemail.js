// nodemail.js
const nodemail = require("nodemailer");

let transporter = nodemail.createTransport({
  host: "smtp.daum.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SEND_MAIL,
    pass: process.env.DAUM_PASS,
  },
});

const mailSend = (data = {}) => {
  transporter.sendMail(
    data,
    (err, result) => {
      if (err) {
        console.log(err);
        return err;
      }
      console.log(result.messageId + "를 확인하세요.");
      return result.messageId;
      // {
      //     from: "changbeom0525@daum.net",
      //     to: "changbum0525@naver.com",
      //     subject: "메일발송연습",
      //     text: "메일이 잘 발송되는지 연습중입니다.",
      // },
      // (err, result) => {
      //     if (err) {
      //         console.log(err);
      //         return;
    }

    // console.log(result);
  );
};

module.exports = {
  mailSend,
};
