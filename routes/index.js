const express = require("express") //the way to import node; this is saying assigning the var express to the node express
const router = express.Router();


router.get('/', (req, res) => {
    res.send("Hello World!");
});

module.exports = router;