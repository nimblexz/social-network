import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {
    AddNewMessageBodyType,
    AddPostActionType, AddSendMessageType,
    ChangeTextActionType,
    DialogsPageType, sendMessageAC,
    StoreType,
    updateNewMessageBodyAC
} from "../../redux/state";
import {ChangeEvent} from "react";


type DialogsStateType = {
    dialogsPage: DialogsPageType
    messageBody: string
    dispatch: (action: AddNewMessageBodyType | AddSendMessageType) => void
}

export function Dialogs(props: DialogsStateType) {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = props.messageBody
    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.dispatch(updateNewMessageBodyAC(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div><textarea value={newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder='Enter your message'></textarea></div>
                <div>
                    <button onClick={onSendMessageClick}></button>
                </div>
            </div>
        </div>
    )
}
