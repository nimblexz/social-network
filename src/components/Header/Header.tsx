import React from "react";
import s from "./Header.module.css"
export function Header(){
    return(
        <header className={s.header}>
            <img
                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/1200px-Vanamo_Logo.svg.png"}/>
        </header>
    )
}
