import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


export type ProfileContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ProfileContactsType
    photos: { small: string, large: string }
}
type PathParamsType = {
    userId: string
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnProfileContainerPropsType
type MapStateToProps = {
    profile: ProfileType,
    status:string
}
type MapDispatchToProps = {
    getUserProfile: (userId:string)=>void
    getUserStatus:(userId:string)=>void
    updateUserStatus:(status:string)=>void
}
type OwnProfileContainerPropsType = MapStateToProps & MapDispatchToProps


class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '26699'
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateUserStatus}/>
        )
    }
}


let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status


})



export default compose<React.ComponentType>(connect(mapStateToProps, {
    getUserProfile,getUserStatus,updateUserStatus
}),withRouter,withAuthRedirect)(ProfileContainer)