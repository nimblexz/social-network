import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";
import {Field, reduxForm} from "redux-form";

type MyPostsType = {
    posts: PostType[]
    message: string
    addPost: (newPostText: string) => void

}
let AddNewPostForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='newPostText' component='textarea'/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}
let AddNewPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export function MyPosts(props: MyPostsType) {


    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likes} id={p.id}/>)

    let onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div>New post</div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
