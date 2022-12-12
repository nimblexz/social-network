import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
type ProfileContainerPropsType={
    setUserProfile:any
    profile:any
}


class ProfileContainer extends React.Component<ProfileContainerPropsType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render(){
        return(
           <Profile profile={this.props.profile}/>
        )
    }
}



let mapStateToProps=(state:AppStateType)=>({
    profile:state.profilePage.profile
})
export default connect(mapStateToProps,{
    setUserProfile
})(ProfileContainer)