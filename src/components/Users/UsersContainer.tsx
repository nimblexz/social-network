import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import preloader from "../../assets/images/Dual Ring-1s-200px.svg"
import {
    followAC,
    setCurrentPageAC, SetIsFetchingAC,
    setTotalUsersAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Preloader from "../common/preloader/Preloader";

type UsersAPIPropsType = {
    users: UsersType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (p: number) => void
    setTotalUsersCount: (totalcount: number) => void
    isFetching: boolean
    SetIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersAPIPropsType> {

    componentDidMount() {
        this.props.SetIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.SetIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.SetIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.SetIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }


    render() {

        return <>
            {this.props.isFetching ?
                <Preloader/> : null}
            <Users users={this.props.users}
                   setUsers={this.props.setUsers}
                   totalUsersCount={this.props.totalUsersCount} follow={this.props.follow}
                   unfollow={this.props.unfollow} setCurrentPage={this.props.setCurrentPage}
                   currentPage={this.props.currentPage} pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   isFetching={this.props.isFetching}/>
        </>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (Users: UsersType[]) => {
            dispatch(setUsersAC(Users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalcount: number) => {
            dispatch(setTotalUsersAC(totalcount))
        },
        SetIsFetching: (isFetching: boolean) => {
            dispatch(SetIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);