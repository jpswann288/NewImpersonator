import axios from "axios"
import { createAction } from "redux-actions"
export const GET_USERS_REPOS = createAction("GET_USERS_REPOS")
export const GET_REPO_LANGUAGE = createAction("GET_REPO_LANGUAGE")
export const GET_REPO_STARS = createAction("GET_REPO_STARS")
export const RETURN_STATUS = createAction("RETURN_STATUS")


export function searchRepos(owner) {
	return function (dispatch) {
        dispatch(RETURN_STATUS({status: true}))
		let url = `/api/getRepo/${owner}`
		axios
			.get(url)
			.then(function (response) {
                let data = response.data
                dispatch(RETURN_STATUS({status: false}))
				dispatch(GET_USERS_REPOS(data))
			})
			.catch(function (error) {
                dispatch(RETURN_STATUS({
                    status: false,
                    message: error.response.data.message
                }))
				console.log(error)
			})
	}
}

export function getRepoLanguage(url) {
	return async function (dispatch) {
		let params = {url: url}
		return await axios
			.post(`/api/getRepoLanguage`, params)
			.then(function (response) {
				return response.data
			})
			.catch(function (error) {
				console.log(error)
			})
	}
}

export function getRepoStars(url) {
	return async function (dispatch) {
		return await axios
			.get(url)
			.then(function (response) {
				return response.data
			})
			.catch(function (error) {
				console.log(error)
			})
	}
}

// only available as a user-to-server request
export function createRepository(params) {
	return function (dispatch) {
        dispatch(RETURN_STATUS({status: true}))
        let url = `https://api.github.com/repos/${params.template_owner}/${params.template_repo}/generate`
		axios
			.post(url, params)
			.then(function (response) {
                dispatch(RETURN_STATUS({status: false}))
			})
			.catch(function (error) {
                dispatch(RETURN_STATUS({
                    status: false,
                    message: error.response.data.message
                }))
				console.log(error)
			})
	}
}