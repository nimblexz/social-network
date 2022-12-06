import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../redux/users-reducer";
import UsersC from "./UsersC";

let mapStateToProps=(state:AppStateType)=>{
return{
    users:state.usersPage.users,
    pageSize:state.usersPage.pageSize,
    totalUsersCount:state.usersPage.totalUsersCount,
    currentPage:state.usersPage.currentPage

}
}

let mapDispatchToProps=(dispatch:Dispatch)=>{
return{
    follow:(userID:number)=>{
        dispatch(followAC(userID))
    },
    unfollow:(userID:number)=>{
        dispatch(unfollowAC(userID))
    },
    setUsers:(Users:UsersType[])=>{
        dispatch(setUsersAC(Users))
    },
    setCurrentPage:(currentPage:number)=>{
        dispatch(setCurrentPageAC(currentPage))
    },
    setTotalUsersCount:(totalcount:number)=>{
        dispatch(setTotalUsersAC(totalcount))
    }

}
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersC);