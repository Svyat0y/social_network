import React from 'react';
import style from "../MainPage/Profile/ProfileHeader/ProfileHeader.module.css";
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../Redux/auth-reducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {

        authAPI.getAuth().then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setUserData(id, email, login)
                }
            })
        }

    render() {
        return (
            <div className={style.wrapper}>
                <Header {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setUserData})(HeaderContainer)