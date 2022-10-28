import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {store, StoreType} from "./redux/state";




export let rerenderEntireTree=(store:StoreType)=>{
    ReactDOM.render(
        <App store={store} dispatch={store.dispatch.bind(store)} />,
        document.getElementById('root')
    );
}
rerenderEntireTree(store)
store.subscribe(() => rerenderEntireTree(store))