import s from "./../Dialogs.module.css"
import {AppPropsType, MessageType} from "../../../redux/state";





export const Message = (props:MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}



