import React, {ChangeEvent} from "react";
import {ActionType, addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {PostType, ProfilePageType, StoreType} from "../../../redux/store";
import {connect} from "react-redux";
import {AppStateType, StateType, store} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MyPostsContainerType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => any
}
type MyPostsType={
    posts: Array<PostType>
    message: string
}
let mapStateToProps=(state:AppStateType):MyPostsType=>{

    return{
        message:state.profilePage.message,
        posts:state.profilePage.posts


    }
}
let mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        adding:()=>{
            dispatch(addPostAC(store.getState().profilePage.message))
        },
        newText:(e: ChangeEvent<HTMLTextAreaElement>)=>{
            dispatch(changeNewTextAC(e.currentTarget.value))
        }
    }
}
export const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)



