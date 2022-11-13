import s from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/store";



export const DialogItem = (props:DialogType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink className={s.active} to={path}>{props.name}</NavLink>
        </div>
    )
}
