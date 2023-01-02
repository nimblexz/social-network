import axios from "axios";


const instance=axios.create(
    {withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`}
)

export const usersAPI={
    getUsers(currentPage:number,pageSize:number){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>response.data)
    },
    follow(userID:number){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`)
    },
    unfollow(userID:number){
       return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`)
    }
}