// app.js
const express = require("express");
const parser = require("body-parser");
const sql = require("./sql");
const prodSql = require("./sql/sql");
const cors = require("cors");
// {productList:{query:``}, productDetail:{}}

console.log(prodSql["productMainImages"].query);

const app = express();
app.use(parser.urlencoded()); // x-www-form-urlencoded
app.use(parser.json());
app.use(cors());

app.get("/", (req, resp) => {
  resp.send("/ 실행");
});

//상품쿼리.
app.post("/api/:alias", async (req, resp) => {
  let search = prodSql[req.params.alias].query;
  let param = req.body.param; // [{prouct_id:9, type:1, path:test.jpg}]
  try {
    let result = await sql.execute(search, param);
    resp.json(result);
  } catch (err) {
    console.log(err);
    resp.send({ reCode: "Error" });
  }
});

// 고객목록.
app.get("/customers", async (req, resp) => {
  try {
    let customerList = await sql.execute("select * from customers");
    console.log(customerList);
    resp.json(customerList);
  } catch (err) {
    console.log(err);
    resp.send({ reCode: "Error" });
  }
});

// 등록.
app.post("/customer", async (req, resp) => {
  console.log(req.body.param);
  try {
    let result = await sql.execute(
      "insert into customers set ?", //
      [req.body.param]
    );
    console.log(result);
    resp.json(result);
  } catch (err) {
    console.log(err);
    resp.send({ reCode: "Error" });
  }
});
//http://localhost

//삭제
app.delete("/customer/:id", async (req, resp) => {
  console.dir(req.params);
  try {
    const id = req.params.id;
    let results = await sql.execute(
      "delete from customers where id = ?", //
      [id]
    );
    console.log(results);
    resp.json(results);
  } catch (err) {
    console.log(err);
    resp.send({ reCode: "Error" });
  }
  //   connection = pool.getConnection();
});

//put
app.put("/customer/:id", async (req, resp) => {
  console.dir(req.params);
  try {
    let results1 = await sql.execute(
      "update customers set ? where id = ? ", //
      [req.body.param, req.params.id]
    );
    console.log(results1);
    resp.json(results1);
  } catch (err) {
    console.log(err);
    resp.send({ reCode: "Error" });
  }
  //   connection = pool.getConnection();
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
