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
import {StoreType} from "./redux/store";
import {AddPostActionType, ChangeTextActionType} from "./redux/profile-reducer";
import {AddNewMessageBodyType, AddSendMessageType} from "./redux/dialogs-reducer";

type AppPropsType = {
    store: StoreType
    dispatch: (action: AddPostActionType | ChangeTextActionType | AddNewMessageBodyType | AddSendMessageType) => void
}

function App(props: AppPropsType) {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.store._state.dialogsPage}
                                                                  messageBody={props.store._state.dialogsPage.newMessageBody}
                                                                  dispatch={props.dispatch.bind(props.store)}/>}/>
                    <Route path="/profile"
                           render={() => <Profile profilePage={props.store._state.profilePage}
                                                  dispatch={props.dispatch.bind(props.store)}
                           />}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>


                </div>


            </div>
        </BrowserRouter>
    );
}


export default App;
