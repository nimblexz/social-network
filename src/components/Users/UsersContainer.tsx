import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    follow, followed, getUsers,
    unfollow, unfollowed,
    UsersType
} from "../../redux/users-reducer";
import React from "react";
import Preloader from "../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



type UsersContainerPropsType = {
    users: UsersType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing:number[]
    getUsers:(currentPage:number, pageSize:number)=>void
    unfollowed:(id:number)=>void
    followed:(id:number)=>void

}

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
       this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber,this.props.pageSize)
    }


    render() {

        return <>
            {this.props.isFetching ?
                <Preloader/> : null}
            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage} pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   followed={this.props.followed}
                   unfollowed={this.props.unfollowed}
                   isFollowing={this.props.isFollowing}

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
        isFollowing:state.usersPage.followingInProgress,


    }
}




export default compose<React.ComponentType>(connect (mapStateToProps, {
    follow,
    unfollow,
    getUsers,
    followed,
    unfollowed
}))(UsersContainer)