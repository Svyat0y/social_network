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
	}
}

export const followedAPI = {
	getSub(userId) {
		return instance.post(`follow/${userId}`).then(response => response.data)
	},
	deleteSub(userId) {
		return instance.delete(`follow/${userId}`).then(response => response.data)
	}
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`).then(response => response.data)
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`).then(response => response.data)
	},
	updateStatus(status) {
		return instance.put(`profile/status`, {status}).then(response => response.data)
	}
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`).then(response => response.data)
	},
	login(email, password, rememberMe = false) {
		return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data)
	},
	logout() {
		return instance.delete(`auth/login`).then(response => response.data)
	}
}