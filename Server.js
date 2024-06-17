let http = require("http");
let express = require("express");
const bodyParser = require("body-parser");
const { name, email } = require("ejs");
// const { email } = require("ejs")
let connectDB = require("./db/db.Conncet");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name, email });
});

app.post("/create-user", (req, res) => {
  try {
    console.log(req.body);
    let { name, email } = req.body;
    res.render("index", { name, email });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

connectDB();

http.createServer(app).listen(3004, () => {
  console.log("server started");
});