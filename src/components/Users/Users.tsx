import {UsersType} from "../../redux/users-reducer";
import s from './Users.module.css'

type UsersPropsType = {
    users: UsersType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users:UsersType[])=>void
}

export function Users(props: UsersPropsType) {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: true,
                photourl: 'https://www.kinogallery.com/pimages/661/kinogallery.com-661-359692.jpg',
                fullName: 'Emil',
                status: 'i am volk',
                location: {city: 'Samara', country: 'Russia'}
            },
            {
                id: 2,
                followed: false,
                photourl: 'https://www.kinogallery.com/pimages/661/kinogallery.com-661-359692.jpg',
                fullName: 'Robert',
                status: 'i am karas',
                location: {city: 'Kazan', country: 'Russia'}
            },
            {
                id: 3,
                followed: true,
                photourl: 'https://www.kinogallery.com/pimages/661/kinogallery.com-661-359692.jpg',
                fullName: 'Mark',
                status: 'i am sputnik',
                location: {city: 'Moscow', country: 'Russia'}
            }])
    }
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
<img className={s.userPhoto} src={u.photourl}/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}