import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage, SetIsFetching, SetIsFollowing,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UsersType
} from "../../redux/users-reducer";
import React from "react";
import Preloader from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";


type UsersContainerPropsType = {
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
    isFollowing:any
    SetIsFollowing:any
}

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.SetIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.SetIsFetching(false)
            this.props.setUsers(response.items)
            this.props.setTotalUsersCount(response.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.SetIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
            this.props.SetIsFetching(false)
            this.props.setUsers(response.items)
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
                   isFetching={this.props.isFetching}
            isFollowing={this.props.isFollowing}
                   SetIsFollowing={this.props.SetIsFollowing}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing:state.usersPage.followingInProgress

    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    SetIsFetching,
    SetIsFollowing,

})(UsersContainer);