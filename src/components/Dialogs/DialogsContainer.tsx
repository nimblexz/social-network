import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";

import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import React from "react";
import {Dialogs} from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {DialogType, MessageType} from "../../redux/store";




type DialogsContainerPropsType =RouteComponentProps&OwnDialogsContainerPropsType







type MapStateToProps = {
    dialogs:DialogType[]
    messages:MessageType[]
    newMessageBody:string
    isAuth:boolean

}
type MapDispatchToProps = {
    sendMessage:() => void
    updateNewMessagebody:(body: string) => void
}
type OwnDialogsContainerPropsType=MapStateToProps&MapDispatchToProps

class DialogsContainer extends React.Component<DialogsContainerPropsType>{
    componentDidMount() {

    }

    render() {
        return (
            <Dialogs dialogs={this.props.dialogs} isAuth={this.props.isAuth} newMessageBody={this.props.newMessageBody} updateNewMessagebody={this.props.updateNewMessagebody} messages={this.props.messages} sendMessage={this.props.sendMessage}/>
        )
    }
}


let mapStateToProps=(state:AppStateType)=>{

    return{
        dialogs:state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages,
        newMessageBody:state.dialogsPage.newMessageBody,
        isAuth:state.auth.isAuth


    }
}
let mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        updateNewMessagebody:(body:string)=>{
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage:()=>{
            dispatch(sendMessageAC())
        }

    }
}
let WithUrlDataContainerComponent=withRouter(DialogsContainer)
export default withAuthRedirect(connect(mapStateToProps,mapDispatchToProps)(WithUrlDataContainerComponent))