import React, {useState} from 'react';
import style from './Pagination.module.css';

const Pagination = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

	let pages = []
	let pagesCount = Math.ceil(totalUsersCount / pageSize)
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let portionCount = Math.ceil(pagesCount / portionSize)
	let [portionNumber, setPortionNumber] = useState(1)
	let leftPortionPageNumber = (portionNumber -1) * portionSize + 1
	let rightPortionPageNumber = portionNumber * portionSize


	return (

		<div className={style.paginationWrapper}>
			{portionNumber > 5 && <button className={style.prevNextBtn} onClick={() => {setPortionNumber(portionNumber - 5)}}>More Prev</button>}
			{portionNumber > 1 && <button className={style.prevNextBtn} onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>}
			<div className={style.numbersBox}>
				{pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
					.map((p, index) => <span
						key={index}
						className={`${style.pg_number} ${currentPage === p && style.pg_number_active}`}
						onClick={() => {
							onPageChanged(p)
						}}>{p}</span>)}
			</div>
			{portionNumber < portionCount - 1 && <button className={style.prevNextBtn} onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}
			{portionNumber < portionCount - 5 && <button className={style.prevNextBtn} onClick={() => {setPortionNumber(portionNumber + 5)}}>More Next</button>}
		</div>



		// <div>
		// 	{pages.map((p, index) => <span
		// 		key={index}
		// 		className={`${style.pg_number} ${currentPage === p && style.pg_number_active}`}
		// 		onClick={() => {
		// 			onPageChanged(p)
		// 		}}>{p}</span>)}
		// </div>
	);
}

export default Pagination;