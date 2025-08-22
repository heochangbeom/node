let reg = /World/gi;
reg = new RegExp("World");

let str = `Hello Hi..
World!
world`;

console.log(str.replace(/World/gi, "세상!"));

console.log(reg.exec(str));
