const express = require('express')
const PORT = process.env.PORT || 5000;
const app = express()
const cors = require('cors');
var compression = require('compression') //import to express app

app.use(compression()) //add this as the 1st middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// serve the build folder
app.use("/*", (req, res) => {
    res.sendFile(path.join(__dirname + "client/src/build/index.html"));
});

app.get("/", (req, res, next) => {
    res.redirect("/TheChallange");
});

app.get('/api/getRepo/:owner', LAMService.updateBusinessUnit.bind(LAMService))

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});