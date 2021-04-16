import React from 'react';
import style from "../MainPage/Profile/ProfileHeader/ProfileHeader.module.css";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                let {id, email, login} = response.data.data
                this.props.setUserData(id, email, login)
                console.log(response)
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

const mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin
})

export default connect(mapStateToProps, {setUserData})(HeaderContainer)