// setInterval.js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// count: 100 -> 0 1씩 감소.
let count = 0;
let wordAry = "Lorem ipsum dolor sit amet, consectetur adipisicing elit." // Ex possimus, illo maxime architecto quibusdam tenetur in magnam numquam, sint providentmolestiae libero eius minus quis recusandae harum optio quam perspiciatis!" //
  .split(" ");

const set = setInterval(() => {
    count++;
    if(count > 100){
        process.exit(); //node프로세스를 강제로 종료
    }
    rl.question("단어를 입력하세요.", (answer) => {
      let search = answer;
      let idx = wordAry.indexOf(search);
      wordAry.splice(idx, 1); // 삭제.
      wordAry.forEach((word) => {
        console.log(word);
}, 1000);








// let wordAry = "Lorem ipsum dolor sit amet, consectetur adipisicing elit." // Ex possimus, illo maxime architecto quibusdam tenetur in magnam numquam, sint providentmolestiae libero eius minus quis recusandae harum optio quam perspiciatis!" //
//   .split(" ");

// function myfunction() {
//   // 100이 완료되기전에 배열에 있는 값을 clear하면 성공.
//   // 100이 완료된 후 배열에 값이 있으면 실패.
//   if (count < 0) {
//     rl.close(); //steam은 사용후 close();
//     console.log("실패");
//   }
//   while (wordAry.length > 0) {
//     rl.question("단어를 입력하세요.", (answer) => {
//       let search = answer;
//       let idx = wordAry.indexOf(search);
//       wordAry.splice(idx, 1); // 삭제.
//       wordAry.forEach((word) => {
//         console.log(word);
//       });
//     });
//     //   if (wordAry.length == 0) {
//     //     break;
//     //   }
//   }
// }
// myfunction();
// if (wordAry.length == 0) {
//   console.log("성공!");
// }
