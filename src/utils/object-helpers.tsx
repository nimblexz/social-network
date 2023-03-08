import {UsersType} from "../redux/users-reducer";


export let updateObjectInArray = (items: UsersType[], itemId: number, objPropsName: string, newObjProps: {followed:boolean}) => {
   return items.map((u:any) => {
        if (u[objPropsName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}