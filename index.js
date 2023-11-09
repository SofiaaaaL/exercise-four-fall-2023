const express = require("express") //the way to import node; this is saying assigning the var express to the node express
const app = express();
const port = 4000; //local host 4000

const indexRoute = require("./routes/index")
const aboutRoute = require("./routes/about")

app.use(express.static('public'))

//Serving static files in Express
app.use(express.static('public'))

app.use("/", indexRoute);
app.use("/about", aboutRoute);
// req = data comes in; res = data comes out
// app.get('/', (req, res) => {
//     res.send("Hello World");
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



