import {DialogsPageType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {ActionType} from "../../redux/profile-reducer";
import {Dialogs} from "./Dialogs";


type DialogsContainerType = {
    dialogsPage: DialogsPageType
    messageBody: string
    dispatch: (action: ActionType) => void
}

export function DialogsContainer(props: DialogsContainerType) {



    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (body: string) => {
        props.dispatch(updateNewMessageBodyAC(body))
    }
    return <Dialogs updateNewMessagebody={onNewMessageChange} sendMessage={onSendMessageClick}
                    dialogs={props.dialogsPage.dialogs} messages={props.dialogsPage.messages}
                    messageBody={props.messageBody}/>


}
