import s from "./Users.module.css";
import userphoto from "../../assets/images/197-1971414_avatars-clipart-generic-user-user-profile-icon.png";
import React from "react";

import {UsersType} from "../../redux/users-reducer";
import axios from "axios";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    users: UsersType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (p: number) => void
    onPageChanged: (p: number) => void
    isFetching: boolean

}
export const Users = (props: UsersPropsType) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => <span onClick={() => {
                props.onPageChanged(p)
            }} className={props.currentPage === p ? s.selectedPages : ''}>{p}</span>)}

        </div>
        {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>

                            <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userphoto}/>

                        </NavLink>


                    </div>
                    <div>{u.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {withCredentials: true}).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }

                            })


                        }}>Unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},  {withCredentials: true}).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(u.id)
                                }

                            })
                        }}>Follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
            </span>
        </div>)}
    </div>
}