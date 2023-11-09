const express = require("express") //the way to import node; this is saying assigning the var express to the node express
const router = express.Router();

//add /about to load the about page

//define the about page route
router.get('/', (req, res) => {
    res.send("About");
});

//define the about me page route
router.get("/me", (req,res) => {
    res.send("<h1>About Me</h1>");
})

module.exports = router;