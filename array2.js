// filter
fetch("http://192.168.0.83/HelloJSP/replyList.do?bno=145")
  .then((response) => response.json())
  .then((result) => {
    let result1 = result
      .filter((elem) => {
        return elem.reply.indexOf("연습");
      })

      .forEacch((elem, idx) => {
        console.log("댓글 번호는" + elem.replyNo + idx);
      });
  });

// map (mapping)
// A -> A'
// {name, age, point} => {name, point}
