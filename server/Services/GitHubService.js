let axios = require('axios')

module.exports = class GitHubService {
    getGitHubReposByOwner(req, res) {
        let url = `https://api.github.com/repositories`
        if(req.params.owner.length) {
            url = `https://api.github.com/users/${req.params.owner}/repos`
        }
        axios
			.get(url)
			.then(function (response) {
                let json = response.data
                console.log('GitHubService::getGitHubReposByOwner(): ', json)
                res.json(json)
			})
			.catch(function (error) {
				console.log('ERROR::GitHubService::getGitHubReposByOwner(): ', error)
                res.json(error)
			})
    }
    getRepoLanguage(req,res) {
        let url = req.body.url
        axios
			.get(url)
			.then(function (response) {
                let data = response.data
                let languages = []
                if(data && Object.keys(data).length) {
                    for(let key of Object.keys(data)) {
                        languages.push(key)
                    }
                } else {
                    languages.push('N/A')
                }
				res.json(languages)
			})
			.catch(function (error) {
				console.log('ERROR::GitHubService::getRepoLanguage(): ', error)
                res.json(error)
			})
    }
    getRepoStars(req,res) {
        let url = req.body.url
        axios
			.get(url)
			.then(function (response) {
                let data = response.data
				res.json(data)
			})
			.catch(function (error) {
				console.log('ERROR::GitHubService::getRepoLanguage(): ', error)
                res.json(error)
			})
    }
}