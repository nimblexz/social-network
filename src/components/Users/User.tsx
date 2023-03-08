import s from "./Users.module.css";
import userphoto from "../../assets/images/197-1971414_avatars-clipart-generic-user-user-profile-icon.png";
import React from "react";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "../common/Paginator/Paginator";

type UserPropsType = {
    user: UsersType
    followed: (id: number) => void
    unfollowed: (id: number) => void
    isFollowing: number[]

}
export const User = ({
                         user,
                         isFollowing,
                         unfollowed,
                         followed
                     }: UserPropsType) => {
    return <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img className={s.userPhoto} src={user.photos.small != null ? user.photos.small : userphoto}
                                 alt={'userPhoto'}/>
                        </NavLink>
                    </div>
                    <div>{user.followed
                        ? <button disabled={isFollowing.some((id: number) => id === user.id)} onClick={() => {
                            unfollowed(user.id)
                        }}>Unfollow</button>
                        : <button disabled={isFollowing.some((id: number) => id === user.id)}
                                  onClick={() => followed(user.id)}>Follow</button>}
                    </div>
                </span>
        <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
            </span>
    </div>
}