import React from "react"
import { create } from 'react-test-renderer'
import Pagination from "./Pagination";

describe('Paginator Component tests', () => {

	test('pages count is 11 but should be only 10', () => {
		const component = create(<Pagination totalUsersCount={11} pageSize={1} portionSize={10} />)
		const root = component.root
		let spans = root.findAllByType('span')
		expect(spans.length).toBe(10)
	})

	test('if pages count more then 10 button Next should be present', () => {
		const component = create(<Pagination totalUsersCount={11} pageSize={1} portionSize={10} />)
		const root = component.root
		let button = root.findAllByType('button')
		expect(button.length).toBe(1)
	})


})