import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";

import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";






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
export const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs)