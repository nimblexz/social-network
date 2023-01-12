import React, {ChangeEvent} from "react";
import {addPostAC, changeNewTextAC, PostType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType,store} from "../../../redux/redux-store";
import {Dispatch} from "redux";

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



