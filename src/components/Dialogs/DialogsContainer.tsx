import {DialogsPageType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {ActionType} from "../../redux/profile-reducer";
import {Dialogs} from "./Dialogs";
import {AppStateType, store} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";



type DialogsContainerType = {
    dialogsPage: DialogsPageType
    messageBody: string
    dispatch: (action: ActionType) => void
}




let mapStateToProps=(state:AppStateType):DialogsPageType=>{

    return{
        dialogs:state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages,
        newMessageBody:state.dialogsPage.newMessageBody,


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