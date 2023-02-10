import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/preloader/Preloader";

type AppContainerPropsType = {
    initializeApp: () => void
    initialized: boolean
}

class App extends React.Component<AppContainerPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }

            return (
                <BrowserRouter>
                    <div className="app-wrapper">
                        <HeaderContainer/>
                        <Navbar/>
                        <div className="app-wrapper-content">

                            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                            <Route path="/profile/:userId?"
                                   render={() => <ProfileContainer/>}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/login" render={() => <Login/>}/>
                            <Route path="/news" render={() => <News/>}/>
                            <Route path="/music" render={() => <Music/>}/>
                            <Route path="/settings" render={() => <Settings/>}/>


                        </div>


                    </div>
                </BrowserRouter>
            );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})
export default connect(mapStateToProps, {initializeApp})(App)
