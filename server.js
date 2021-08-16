//const bodyParser = require("body-parser");
const express = require("express");
const app = express();
let items = [
  {
    id: 1,
    content: "aca content 2",
    date: "2019-05-",
    background: "http",
    active: true,
  },
  {
    id: 2,
    content: "aca content",
    date: "2019-05-",
    active: true,
  },
  {
    qr: "hola-fest-party",
    content: "buenas, como va!!!",
  },
];
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Accept, Authorization, Origin, X-Requested-Width"
  );
  next();
});

app.get("/items", (req, res) => {
  res.json(items);
});

app.post("/items", (req, res) => {
  const item = req.body;
  const newItem = {
    qr: item.qr,
    content: item.content,
  };
  items = [...items, newItem];
  res.json(newItem);
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log("server runing in port " + PORT);
});
