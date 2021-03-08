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
			{id: 0, message: 'Hi'},
			{id: 1, message: 'How are you?'},
			{id: 2, message: 'Are you here??'}
		]
	},
	profilePage: {
		postData: [
			{id: 0, message: 'Ho, how are you?', likeCount: 15},
			{id: 1, message: "It's my first post", likeCount: 34},
		]
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

export default state;