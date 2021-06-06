import React from 'react';
import style from './Users.module.css';
import Preloader from '../../common/Preloader/Preloader';
import Pagination from "../../common/Pagination/Pagination";
import User from "./User";

const Users = (props) => {

	return (
		<div>
			<Pagination totalUsersCount={props.totalUsersCount}
						pageSize={props.pageSize}
						currentPage={props.currentPage}
						onPageChanged={props.onPageChanged} />
			<div>
				{
					props.isFetching === false
						?
						<User users={props.users}
							  followAccept={props.followAccept}
							  unFollowAccept={props.unFollowAccept}
							  isFollowingProgress={props.isFollowingProgress} followed={props.followed}
							  isAuth={props.isAuth}/>
						:
						<div className={style.preloader_wr}>
							<Preloader/>
						</div>
				}
			</div>
		</div>
	);
}

export default Users;