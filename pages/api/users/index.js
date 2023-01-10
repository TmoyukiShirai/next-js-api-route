import sqlite3 from "sqlite3";

const selectAll = (db, query) => {
  return new Promise((resolve, reject) => {
    db.all(query, (err, rows) => {
      if (err) return reject(err);
      return resolve(rows);
    });
  });
};

export default async function handler(req, res) {
  const db = new sqlite3.Database("./database.sqlite");
  const users = await selectAll(db, "select * from users");
  db.close();

  res.status(200).json({ users });
}

// export default async function handler(req, res) {
//   // console.log(req.method); //GETかPOSTかを確認(ターミナルに表示される)
//   // const response = await fetch("https://jsonplaceholder.typicode.com/users/");
//   // const users = await response.json();
//   // res.status(200).json({ users });

//   //Postの通信
//   console.log(req.method); //GETかPOSTかを確認(ターミナルに表示される)
//   console.log(req.body); //POSTリクエストから送信されているデータ、/pages/index.jsxから渡ってきている
//   res.status(200).json({ name: "John Doe" }); //レスポンス
// }
