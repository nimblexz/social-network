import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";

let mapStateToProps=(state:AppStateType)=>{
return{
    users:state.usersPage.users
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
    }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);