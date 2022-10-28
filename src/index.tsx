import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {store, StoreType} from "./redux/state";




export let rerenderEntireTree=(store:StoreType)=>{
    ReactDOM.render(
        <App store={store} addPost={store.addPost.bind(store)} message={store._state.profilePage.message} />,
        document.getElementById('root')
    );
}
rerenderEntireTree(store)
store.subscribe(() => rerenderEntireTree(store))