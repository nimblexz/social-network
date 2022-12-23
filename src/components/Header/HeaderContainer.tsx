import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type HeaderContainerPropsType = {
    isAuth: boolean
    login: string
    setUserData:(email:string, id:string, login:string)=>void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {

            if (response.data.resultCode === 0) {
                let {email, id, login} = response.data.data
                this.props.setUserData(email, id, login)
            }
        })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }

}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.data.login
})
export default connect(mapStateToProps, {setUserData})(HeaderContainer)