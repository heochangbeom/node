// nodecron.js
const cron = require("node-cron");

cron.schedule("5 * * * * *", () => {
  let current = new Date();
  console.log(current.toISOString() + " => cron실행됨.");
});
