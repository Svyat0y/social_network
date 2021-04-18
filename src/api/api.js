import * as axios from "axios";

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': 'bb8e013c-9223-4dee-8a5a-b96156c04ec6'
	}
})

export const usersAPI = {
	getUsers(currentPage, pageSize){
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
	},
	getPage(currentPage = 1, pageSize = 100) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
	}
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`).then(response => response.data)
	}
}

export const authAPI = {
	getAuth() {
		return instance.get(`auth/me`).then(response => response.data)
	}
}

