// fs_read.js
const fs = require("fs");
// 비동기(non블로킹)/동기(블로킹)

fs.readFile("./stdout.log", "utf8", (err, buf) => {
  // callback함수.
  if (err) {
    console.error("예외발생");
    return;
  }
  console.log(buf);
});

let errBuf = fs.readFileSync("./stdout.log", "utf8");
console.log(errBuf);

console.log("다른코드");

fs.writeFile(
  "./file_log.txt",
  errBuf,
  { encoding: "utf8", flag: "a" },
  (err) => {
    if (err) {
      console.log("예외발생");
      return;
    }
    console.log("파일생성완료");
  }
);
