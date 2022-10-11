import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ProfileStateType} from "../../../redux/state";





export function MyPosts(props:ProfileStateType) {






    let postsElements=props.state.posts.map(p=><Post message={p.message} likes={p.likes} id={p.id}/>)
    let newPostElement= React.createRef<HTMLTextAreaElement>()
    let AddPost=()=>{
        if(newPostElement.current) {
            props.addPost(newPostElement.current.value);
        }

    }
    return (
        <>

            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>

                    <div>
                        <textarea ref={newPostElement}></textarea>
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