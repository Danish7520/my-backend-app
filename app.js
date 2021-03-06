const express = require("express");
const cors = require("cors");

const app = express();

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'It works!'
//     });
// });
var qu = require("./Quotes.js");
var d_quote;
//console.log(qu);
app.use(cors());
app.get("/Random", (req, res, next) => {
  const item = qu[Math.floor(Math.random() * qu.length)];
  res.status(200).send(item);
});
app.get("/Daily", (req, res, next) => {
  var today_date = new Date().getDate();

  if (today_date == 6) {
    today_date = 1;
    d_quote = qu[today_date];
    console.log("today's date", today_date);
  }

  res.status(200).send(d_quote);
});
// var friends = { name: "Usama" };
// app.get("/", (req, res, next) => {
//   res.status(200).send({ status: "wokr" });
// });

// app.get("/danish", (req, res, next) => {
//   res.status(200).send({ name: "Danish Nawaz" });
// });

// app.get("/friends", (req, res, next) => {
//   res.status(200).send(friends);
// });
app.get("*", (req, res, next) => {
  res.status(500).send({ message: "Sorry, this URL doesnot exist" });
});

module.exports = app;
