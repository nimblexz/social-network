import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsStateType} from "../../redux/state";








export function Dialogs  (props:DialogsStateType)  {





    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}