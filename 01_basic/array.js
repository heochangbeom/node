// [].sort()

let fruits = ["apple", "cherry", "banana"];

fruits.sort();

fruits.forEach((fruit) => {
  console.log(fruit);
});

let numbers = [1, 10, 100, 2, 12, 12, 44];
numbers.sort(function (a, b) {
  if (a > b) {
    return 1; // 위치를 변경: 양의 값.
  } else {
    return -1; //위치를 유지: 음의 값.
  }
  //이게 이렇게 하는게 약속임.
});
numbers.forEach((asdf) => {
  console.log(asdf);
});

// filter()
[
  { name: "Hong", point: 10 },
  { name: "Kim", point: 23 },
  { name: "Park", point: 46 },
  { name: "Choi", point: 17 },
  { name: "Hwang", point: 56 },
].filter((elem, idx, ary) => {
  if (elem.point > 30) {
    //30보다 큰값을 새로운 생성.
    console.log(elem);
  }
});

//   .forEach((elem) => {
//     if (elem.point > 30) {
//       console.log(elem);
//     }
//   });
