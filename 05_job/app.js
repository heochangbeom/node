const express = require("express");
require("dotenv").config({
  path: "./.env",
});
const nodemail = require("./nodemail");

const process = require("process");
console.log(process.env);

const app = express();
app.use(express.urlencoded());

// 라우팅.
app.get("/", (req, resp) => {
  resp.send("/");
});

app.get("/mail", (req, resp) => {
  resp.send(`
    <form action="mail" method="post">
    <table>
    <tr>
    <tr>  
    <th>보내는이:</th>
    <td><input type="email" name="sender" value="changbeom0525@daum.net"/></td>
    </tr>
    
    <tr>
    <th>받는이:</th>
    <td><input type="email" name="receiver" /></td>
    </tr>
    
    <tr>
            <th>제목:</th>
            <td><input type="text" name="subject" /></td>
          </tr>
          <tr>
          <th>내용:</th>
          <td><textarea name="content"></textarea></td>
          </tr>
          
          <tr>
          <td colspan="2" align="center">
          <input type="submit" value="메일보내기" />
          </td>
          </tr>
          </tr>
          </table>
          </form>
          `);
});

app.post("/mail", (req, resp) => {
  console.log(req.body);
  let data = {
    from: req.body.sender,
    to: req.body.receiver,
    subject: req.body.subject,
    text: req.body.content,
  }; // from, to, suject, text(html)
  nodemail.mailSend(data);
  resp.send("done");
});

// get 방식 "/excel_down" => customers 테이블의 데이터를 logs/customer2.xlsx로 저장.

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
