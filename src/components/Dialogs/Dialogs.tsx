import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogType} from "../../redux/store";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


export type MessageType = {
    id: number
    message: string
}
type DialogsStateType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody: string
    sendMessage: (newMessageBody:string) => void

}
const maxLength50=maxLengthCreator(50)
export function Dialogs(props: DialogsStateType) {


    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)
    let addNewMessage=(values:any)=>{
        props.sendMessage(values.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}
const AddMessageForm=(props:any)=>{
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
              <Field component={Textarea} name='newMessageBody' placeholder='Enter your message' validate={[required,maxLength50]}/>
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    </div>
}

const AddMessageReduxForm=reduxForm({
    form:'dialogsAddMessageForm',
})(AddMessageForm)
