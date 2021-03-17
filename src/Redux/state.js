import {rerenderEntireTree} from "../render";

let state = {
	messagesPage: {
		dialogsData: [
			{id: 1, name: 'Andy'},
			{id: 2, name: 'Panda'},
			{id: 3, name: 'Sveta'},
			{id: 4, name: 'Vika'},
			{id: 5, name: 'Dasha'},
			{id: 7, name: 'Lusya'}
		],
		messagesData: [
			// {id: 0, message: 'Hi'},
			// {id: 1, message: 'How are you?'},
			// {id: 2, message: 'Are you here??'}
		],
		newMessageText: ""
	},
	profilePage: {
		postData: [
			{id: 0, message: 'Hi, how are you?', likeCount: 15},
			{id: 1, message: "It's my first post", likeCount: 34},
		],
		newPostText: ""
	},
	sideBar: {
		avatarsData: [
			{id: 0, userName: 'Andy'},
			{id: 1, userName: 'Panda'},
			{id: 2, userName: 'Dasha'},
			{id: 3, userName: 'Vika'},
			{id: 4, userName: 'Masha'},
			{id: 5, userName: 'Tanya'}
		]
	}
}

window.state = state

export const addPost = () => {
	if(state.profilePage.newPostText && state.profilePage.newPostText.replace(/\s/g,"")) {
		let newPost = {
			id: 2,
			message: state.profilePage.newPostText,
			likeCount: 0,
		}
		state.profilePage.postData.push(newPost)
		state.profilePage.newPostText = ""
		rerenderEntireTree(state)
	} else {
		return false
	}
}

export const updatePostMessageText = (newText) => {
	state.profilePage.newPostText = newText
	rerenderEntireTree(state)
}

export const addDialogMessage = (i) => {
	if(state.messagesPage.newMessageText && state.messagesPage.newMessageText.replace(/\s/g,"")) {
		let newDialogMessage = {
			id: i,
			message: state.messagesPage.newMessageText
		}
		state.messagesPage.messagesData.push(newDialogMessage)
		state.messagesPage.newMessageText = ""
		rerenderEntireTree(state)
	} else {
		return false
	}
}

export const updateDialogMessageText = (newText) => {
	state.messagesPage.newMessageText = newText
	rerenderEntireTree(state)
}

export default state;