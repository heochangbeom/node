// excel.js
const xlsx = require("xlsx");
const sql = require("./sql");

// db 조회 후 => 액셀파일.
async function db_to_execel() {
  const workbook = xlsx.utils.book_new(); //workbook생성.
  let resultSet = await sql.execute("select * from customers");
  console.log(resultSet);
  // 배열 => sheet : josn_to_sheet. workbook > sheet > cell
  const firstSheet = xlsx.utils.json_to_sheet(resultSet, {
    header: ["id", "name", "email", "phone", "address"],
  });

  xlsx.utils.book_append_sheet(workbook, firstSheet, "Customers");
  xlsx.writeFile(workbook, "./logs/customers.xlsx"); //액셀파일 생성.
  // 시트 -> workbook -> customers.xlsx
}
db_to_execel();

console.log("파일 저장 완료");

function excel_to_db() {
  const workbook = xlsx.readFile("./logs/write.xlsx");
  console.log(workbook.SheetNames);
  const firstSheetName = workbook.SheetNames[0];
  const firstSheet = workbook.Sheets[firstSheetName];

  let jsonSheet = xlsx.utils.sheet_to_json(firstSheet);
  jsonSheet.forEach(async (customer) => {
    let result = await sql.execute("insert into customers set ? ", customer);
    console.log(result);
  });
}

// console.log(firstSheet["A2"].v);
// firstSheet["B2"].v = "Hongkildong";

// firstSheet["A3"] = { v: "99", t: "n" };
// firstSheet["B3"] = { v: "김민규", t: "s" };
// firstSheet["C3"] = { v: "min@email", t: "s" };
// firstSheet["B3"] = { v: "010-3216-9874", t: "s" };
// firstSheet["E3"] = { v: "국민은행 옆길", t: "s" };

// firstSheet["!ref"] = "A1:E3"; //워크시트 범위 갱신
// xlsx.writeFile(workbook, "./logs/write.xlsx");
