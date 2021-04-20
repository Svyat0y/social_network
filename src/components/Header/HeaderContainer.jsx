import React from 'react';
import style from "../MainPage/Profile/ProfileHeader/ProfileHeader.module.css";
import Header from "./Header";
import {connect} from "react-redux";
import {getProfileData} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getProfileData()
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

export default connect(mapStateToProps, {getProfileData})(HeaderContainer)