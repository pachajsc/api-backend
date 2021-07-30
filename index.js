//const bodyParser = require("body-parser");
const express = require("express");
const app = express();
let items = [
  {
    id: 1,
    qr:"primer-item",
    content: "primer item",
    date: "2019-05-",
    background: "http",
    active: true,
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

app.get("/items", (request, response) => {
  response.json(items);
});

app.post("/items", (request, response) => {
  const item = request.body;
  if (!item.content) {
    return response.status(400).json({
      error: "content requerido",
    });
  }
  const ids = items.map((item) => item.id);
  const maxId = Math.max(...ids);

  const newItem = {
    id: maxId + 1,
    qr: item.qr,
    name: item.name,
    email: item.email,
    content: item.content,
    background: item.background,
    // active: item.active || false,
    //date: new Date().toISOString(),
  };
  items = [...items, newItem];
  response.json(newItem);
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log("server runing in port " + PORT);
});

