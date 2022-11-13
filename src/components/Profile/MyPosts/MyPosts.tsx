import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/store";

type MyPostsType = {
    adding: () => void
    newText: (e: ChangeEvent<HTMLTextAreaElement>) => void
    profilePage: ProfilePageType

}

export function MyPosts(props: MyPostsType) {


    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} likes={p.likes} id={p.id}/>)

    let AddPost = () => {
        props.adding()

    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.newText(e)
    }
    return (
        <>

            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>

                    <div>
                        <textarea value={props.profilePage.message} onChange={newTextChangeHandler}/>
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