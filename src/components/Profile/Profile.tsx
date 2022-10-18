import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileStateType} from "../../redux/state";



export function Profile(props:ProfileStateType) {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage} addPost={props.addPost} message={props.message} changeNewTextCallback={props.changeNewTextCallback} />
        </div>
    )
}