import {UsersType} from "../../redux/users-reducer";
import s from "./Users.module.css";
import userphoto from "../../assets/images/197-1971414_avatars-clipart-generic-user-user-profile-icon.png";
import React from "react";
import axios from "axios";

type UsersPropsType = {
    users: UsersType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users:UsersType[])=>void
}

class UsersC extends React.Component<UsersPropsType>{
    constructor(props:UsersPropsType) {
        super(props);

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{

                this.props.setUsers(response.data.items)
            })

        }


    render() {
        return <div>
            {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
<img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userphoto}/>
                </div>
                    <div>{u.followed
                        ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
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
}
export default UsersC