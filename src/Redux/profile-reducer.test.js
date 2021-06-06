import profileReducer, {addPost} from "./profile-reducer";

let state = {
	postData: [
		{id: 0, message: 'hi, how are you?', likeCount: 12},
		{id: 1, message: 'hi man', likeCount: 5}
	]
}

test('length of posts should be incremented', () => {

	// 1. test data
	let action = addPost('test text')

	// 2. action
	let newState = profileReducer(state, action)

	// 3. expectation
	expect(newState.postData.length).toBe(3)
});

test('post message should be incorrect', () => {

	// 1. test data
	let action = addPost('test text')

	// 2. action
	let newState = profileReducer(state, action)

	// 3. expectation
	expect(newState.postData[2].message).toBe('test text')
});

test('post likes count should be zero', () => {

	// 1. test data
	let action = addPost('test text')

	// 2. action
	let newState = profileReducer(state, action)

	// 3. expectation
	expect(newState.postData[2].likeCount).toBe(0)
});