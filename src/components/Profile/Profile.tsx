import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/store";
import {ActionType} from "../../redux/profile-reducer";


export type ProfileStateType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

export function Profile(props: ProfileStateType) {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage} message={props.profilePage.message}
                     dispatch={props.dispatch}/>
        </div>
    )
}