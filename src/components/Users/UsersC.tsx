import {UsersType} from "../../redux/users-reducer";
import s from "./Users.module.css";
import userphoto from "../../assets/images/197-1971414_avatars-clipart-generic-user-user-profile-icon.png";
import React from "react";
import axios from "axios";

type UsersPropsType = {
    users: UsersType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (p: number) => void
    setTotalUsersCount:(totalcount:number)=>void
}

class UsersC extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <div>
                {pages.map(p => <span onClick={() => {
                    this.onPageChanged(p)
                }} className={this.props.currentPage === p ? s.selectedPages : ''}>{p}</span>)}

            </div>
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