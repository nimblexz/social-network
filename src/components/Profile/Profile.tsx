import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/store";
import {ActionType} from "../../redux/profile-reducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export type ProfileStateType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}
type ProfilePropsType={
    profile:any
}

export function Profile(props:ProfilePropsType) {


    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}