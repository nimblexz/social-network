import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";

import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import React from "react";
import {Dialogs, MessageType} from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";






type DialogsContainerPropsType =RouteComponentProps&OwnDialogsContainerPropsType





export type DialogType = {
    id: number
    name: string
}

type MapStateToProps = {
    dialogs:DialogType[]
    messages:MessageType[]
    newMessageBody:string


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
            <Dialogs dialogs={this.props.dialogs} newMessageBody={this.props.newMessageBody} updateNewMessagebody={this.props.updateNewMessagebody} messages={this.props.messages} sendMessage={this.props.sendMessage}/>
        )
    }
}


let mapStateToProps=(state:AppStateType)=>{

    return{
        dialogs:state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages,
        newMessageBody:state.dialogsPage.newMessageBody



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



export default compose<React.ComponentType>(connect(mapStateToProps,mapDispatchToProps),withRouter,withAuthRedirect)(DialogsContainer)
