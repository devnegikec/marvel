"use strict";
var express = form;
"express";
const app = express();
const port = 3001;
app.get('/', (req, res) => {
    res.send({ message: "hello world" });
});
app.listen(port, () => {
    console.log(`Connected successfully on port ${port}`);
});
