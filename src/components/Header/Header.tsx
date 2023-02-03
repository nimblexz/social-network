import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
type HeaderPropsType={
    isAuth:boolean
    login:string
    logout:any
}
export function Header(props:HeaderPropsType){

    return(
        <header className={s.header}>
            <img
                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/1200px-Vanamo_Logo.svg.png"}/>
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
