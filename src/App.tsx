import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./redux/state";

type AppPropsType = {
    addPost: (postMessage: string) => void
    message: string
    store: StoreType
}

function App(props: AppPropsType) {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.store._state.dialogsPage}/>}/>
                    <Route path="/profile"
                           render={() => <Profile profilePage={props.store._state.profilePage} addPost={props.store.addPost.bind(props.store)}
                                                  message={props.message} changeNewTextCallback={props.store.changeNewText.bind(props.store)}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>


                </div>


            </div>
        </BrowserRouter>
    );
}


export default App;
