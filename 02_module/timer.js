// timer.js
const timeout = setTimeout(() => {
  console.log("1초 후에 실행됩니다.");
}, 1000);

const interval = setInterval(() => {
  console.log("매 1초 단위로 실행됩니다.");
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 5000);

// clearInterval(interval);

const immediate = setImmediate(() => {
  console.log(
    "setImmediate() 함수 호출 뒤에 오는 모든 코드를 먼저 실행하고 바도 다음에 실행합니다."
  );
});

setImmediate(() => {
  console.log("코드 실행후 실행."); // 이벤트루프 stack에 작업을 완료.
  //
});

let sum = 0;
for (let i = 0; i < 101; i++) {
  sum += i;
}
console.log("sum->" + sum);
