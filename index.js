let name = "박봉근";
let score = 80;

console.log("이름은 " + name + ", 점수는" + score);

[1, 2, 3].forEach((element) => {
  console.log(element);
});

function sum(num1, num2) {
  let result;
  result = num1 + num2;
  return result;
}

const NumberFormat = "2025.08.08";
// NumberFormat = "2025.08.09"; 상수변수는 재할당이 불가.
for (let i = 1; i <= 5; i++) {
  if (i % 2) {
    //falsy : 0, null, "", undefined
    let name = "Kim"; //중괄호 안에서만 유요한 값을유지. 나가면 Kimg을 잃음
    console.log(name);
  } else {
    console.log(name);
  }
}

if (score) {
  let name = "홍길동";
  console.log(name);
}
// () {} [] 괄호 안을 블록이라고 함.

console.log(`이름은 ${name}, 점수는 ${score}`);
console.log(
  `이름은 ${name}, 점수는 ${score} 합격여부는 ${score > 60 ? "합격" : "불합격"}`
);
