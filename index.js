const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PROT || 5000;

app.use(cors());
app.use(express());
app.get('/', (req, res) => {
    res.send("Hello from node server - Ytalk social server ")
});

app.listen(port, () => {
    console.log(`Listen to port ${port}`);
})