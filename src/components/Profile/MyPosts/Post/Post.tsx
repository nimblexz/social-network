import React from "react";
import s from "./Post.module.css"
import {PostType} from "../../../../redux/store";
export function Post(props:PostType) {
    return (


        <div className={s.item}>
            <img src="https://cdn-images-1.medium.com/max/1200/1*M6GAZJcW_nD3dsb_OSkp5w.jpeg"/>
            {props.message}
            <div>likes {props.likes} id:{props.id}</div>

        </div>


    )
}