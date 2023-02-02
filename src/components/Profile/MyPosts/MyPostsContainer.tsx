import {addPostAC, PostType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
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
        addPost:(newPostText:string)=>{
            dispatch(addPostAC(newPostText))
        }
    }
}
export const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)



