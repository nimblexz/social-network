import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./redux/store";
import {ActionType} from "./redux/profile-reducer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionType) => void
}

function App() {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile"
                           render={() => <Profile/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>


                </div>


            </div>
        </BrowserRouter>
    );
}


export default App;
