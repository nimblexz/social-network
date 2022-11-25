import {UsersType} from "../../redux/users-reducer";
import s from './Users.module.css'
import axios from "axios";
import userphoto from '../../assets/images/197-1971414_avatars-clipart-generic-user-user-profile-icon.png'
type UsersPropsType = {
    users: UsersType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users:UsersType[])=>void
}

export function Users(props: UsersPropsType) {


    return (
        <div>
            <button onClick={()=>{}}>getUsers</button>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
<img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userphoto}/>
                </div>
                    <div>{u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
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
    )
}