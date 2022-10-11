import React from "react";
import s from "./ProfileInfo.module.css"


export function ProfileInfo() {
    return (

        <div>
            <div>
                <img
                    src="https://million-wallpapers.ru/wallpapers/4/98/531441352518448/raznocvetnye-kamni-maakrosemka.jpg"/>
            </div>
            <div className={s.descriptionBlock}>ava+description</div>
        </div>


    )
}