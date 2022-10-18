import React from 'react';
import './index.css';
import {state, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import {addPost,StateType} from "./redux/state";




export let rerenderEntireTree=(state:StateType)=>{
    ReactDOM.render(
        <App state={state} addPost={addPost} message={state.profilePage.message} />,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)
subscribe(rerenderEntireTree)