import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {AddPostActionType, ChangePostTextActionType, ProfilePageType} from "../../../redux/state";

type ProfileStateType = {
    profilePage: ProfilePageType
    message: string
    dispatch: (action:AddPostActionType | ChangePostTextActionType) => any
}

export function MyPosts(props: ProfileStateType) {


    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} likes={p.likes} id={p.id}/>)

    let AddPost = () => {
        props.dispatch({type:'ADD-POST',postMessage:props.message})

    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type:'UPDATE-NEW-POST-TEXT',newText:e.currentTarget.value})
    }
    return (
        <>

            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>

                    <div>
                        <textarea value={props.message} onChange={newTextChangeHandler}/>
                    </div>

                    <div>
                        <button onClick={AddPost}>Add post</button>
                    </div>
                </div>
                <div>New post</div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </>
    )
}