import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/profile-reducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";


export type ProfileStateType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}
type ProfilePropsType={
    profile:ProfileType
    status:string
    updateStatus:(status:string)=>void
}

export function Profile(props:ProfilePropsType) {


    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}