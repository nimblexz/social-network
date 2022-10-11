import ReactDOM from "react-dom";
import App from "./App";
import {addPost,StateType} from "./redux/state";
import React from "react";

 export let rerenderEntireTree=(state:StateType)=>{
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}