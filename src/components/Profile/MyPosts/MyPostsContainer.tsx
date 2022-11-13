import React, {ChangeEvent} from "react";
import {ProfilePageType} from "../../../redux/store";
import {ActionType, addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostsContainerType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => any
}

export function MyPostsContainer(props: MyPostsContainerType) {
    let AddPost = () => {
        props.dispatch(addPostAC(props.profilePage.message))
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewTextAC(e.currentTarget.value))
    }
    return <MyPosts adding={AddPost} newText={newTextChangeHandler} profilePage={props.profilePage}/>


}
