import style from "../components/MainPage/MainPage.module.css";
import Preloader from "../components/common/Preloader/Preloader";
import React from "react";

export const withLazyLoad = (Component) => {
	return (props) => <React.Suspense fallback={<div className={style.preloader_wr}><Preloader /></div>}>
		<Component {...props} />
	</React.Suspense>
}