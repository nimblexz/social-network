import {sendMessageAC} from "../../redux/dialogs-reducer";

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

}
type OwnDialogsContainerPropsType=MapStateToProps&MapDispatchToProps

class DialogsContainer extends React.Component<DialogsContainerPropsType>{
    componentDidMount() {

    }

    render() {
        return (
            <Dialogs dialogs={this.props.dialogs} newMessageBody={this.props.newMessageBody}  messages={this.props.messages} sendMessage={this.props.sendMessage}/>
        )
    }
}


let mapStateToProps=(state:AppStateType)=>{

    return{
        dialogs:state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages




    }
}
let mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        sendMessage:(newMessageBody:string)=>{
            dispatch(sendMessageAC(newMessageBody))
        }

    }
}



export default compose<React.ComponentType>(connect(mapStateToProps,mapDispatchToProps),withRouter,withAuthRedirect)(DialogsContainer)
