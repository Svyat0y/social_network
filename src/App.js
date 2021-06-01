import React from 'react';
import './App.css'
import Aside from './components/MainPage/Aside/Aside';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initialize} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";

class App extends React.Component {

    componentDidMount() {
        this.props.initialize()
    }

    render() {

        if (!this.props.initialized) {
            return (
                <div className='preloader_background'>
                    <div className="preloader_wr">
                        <Preloader/>
                    </div>
                </div>
            )
        }

        return (
            <div className="App-wrapper">
                <HeaderContainer/>
                <main className="main">
                    <Aside/>
                    <MainPage/>
                </main>
                <Footer/>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose(connect(mapStateToProps, {initialize})(App));
