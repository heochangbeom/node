// crypto_exe.js
const crypto = require("crypto");
let pass = crypto.createHash("sha512").update("pw1234").digest("base64");
// test1234 =>
// test1234 =>
//

console.log(pass);

const createSalt = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) {
        // 실패.
      }
      // 성공.
      resolve(buf.toString("base64"));
    });
  });

  promise
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.error(err));
};
createSalt();

//createSalt();
//salt 값을 활용해서 평문 -> 암호화문 변경
const createCryptoPassword = async (trPw) => {
  let salt = await createSalt();

  console.log(salt);
  salt =
    "ZK7d0VJoRC8mj77AK2Kow6H7/j8mMrXZdMMBSaaq4QMULc6EwA4H0AJds8BKHTXuJwtYsufvgy352mUzmyyjMQ==";
  pw =
    "ynTinaUyHG6mb8+xPo3YjzB7JkZqLb2sGiIII9XkqqBlhnn2s+3s3VhX76dqjjRp6/bUkC0p04GFZcuGqH7M3g==";

  crypto.pbkdf2(trPw, salt, 100000, 64, "sha512", (err, buf) => {
    if (err) {
      console.log("err=>", err);
    }
    console.log(buf.toString("base64"));
    let crPw = buf.toString("base64");
    if (pw == crPw) {
      console.log("비밀번호가 동일함.");
    } else {
      console.log("비밀번호를 확인하세요");
    }
  });
};

createCryptoPassword("test1234");
