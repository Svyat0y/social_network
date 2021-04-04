let initialState = {
	avatarsData: [
		{id: 0,
			userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6b7WENFquctsWy8WgMSHmFJbVyJXf0lQ4R2XRAQcd2WgOK2IIfFlLUFcAcsdnpA8S_Wg&usqp=CAU',
			userName: 'Andy'},
		{id: 1,
			userImg: 'https://meragor.com/files/styles//ava_800_800_wm/standoff_158.jpg',
			userName: 'Panda'},
		{id: 2,
			userImg: 'https://i2.wp.com/andrey-eltsov.ru/wp-content/uploads/2017/09/DopNaAvu1.jpg',
			userName: 'Dasha'},
	]
}

const sideBarReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export default sideBarReducer;