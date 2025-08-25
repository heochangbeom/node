// fs_write.js
const fs = require("fs");
// fs.readFile / fs_readFileSync 활용해서 stdout.log 정보를 읽어들이고

fs.writeFile(
  "./file_write.txt",
  "\n안녕하세요2\n",
  { encoding: "utf8", flag: "a" },
  (err) => {
    if (err) {
      console.log("예외발생");
      return;
    }
    console.log("파일생성완료");
  }
);

fs.writeFile(
  "./file_log.txt",
  "\n안녕하세요2\n",
  { encoding: "utf8", flag: "a" },
  (err) => {
    if (err) {
      console.log("예외발생");
      return;
    }
    console.log("파일생성완료");
  }
);
