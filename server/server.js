const express = require('express')
const PORT = process.env.PORT || 5000;
const app = express()
const cors = require('cors');
var compression = require('compression') //import to express app

const GitHubServiceAPI = require('./Services/GitHubService')
const GitHubService = new GitHubServiceAPI()

app.use(compression()) //add this as the 1st middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// serve the build folder

app.get("/", (req, res, next) => {
    res.redirect("/TheChallange");
});

let router = express.Router()
app.use('/api', router)
router.get('/getRepo/:owner', GitHubService.getGitHubReposByOwner.bind(GitHubService))
router.post('/getRepoLanguage', GitHubService.getRepoLanguage.bind(GitHubService))
router.get('/getRepoStars', GitHubService.getRepoStars.bind(GitHubService))

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./../client/src/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});