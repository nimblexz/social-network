import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AddPostActionType, ChangeTextActionType, ProfilePageType,} from "../../redux/state";


type ProfileStateType = {
    profilePage: ProfilePageType
    dispatch:(action:AddPostActionType | ChangeTextActionType)=>void
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