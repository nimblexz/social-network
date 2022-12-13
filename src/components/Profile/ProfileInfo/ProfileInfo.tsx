import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/preloader/Preloader";
import {ProfileType} from "../ProfileContainer";

type ProfileInfoPropsType={
    profile:ProfileType
}
export function ProfileInfo(props:ProfileInfoPropsType) {
    if (!props.profile){
        return <Preloader/>
    }
    return (

        <div>
            <div>
                <img
                    src="https://million-wallpapers.ru/wallpapers/4/98/531441352518448/raznocvetnye-kamni-maakrosemka.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small}/>
                ava+description
            <div>{props.profile.contacts.vk}</div>
            </div>
        </div>


    )
}