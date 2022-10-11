import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, ProfileStateType} from "../../redux/state";



export function Profile(props:ProfileStateType) {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state} addPost={props.addPost}/>
        </div>
    )
}