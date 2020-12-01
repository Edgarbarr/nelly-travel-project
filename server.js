const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join("./vacay-nelly")));

app.listen(4000);
