import React from "react";
import {UsersType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

type UsersPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (p: number) => void
    isFollowing: number[]
    unfollowed: (id: number) => void
    followed: (id: number) => void
}
export const Users = ({
                          users,
                          isFollowing,
                          unfollowed,
                          followed,
                          totalUsersCount,
                          pageSize,
                          currentPage,
                          onPageChanged
                      }: UsersPropsType) => {
    return <div>
        <Paginator pageSize={pageSize} totalUsersCount={totalUsersCount} currentPage={currentPage}
                   onPageChanged={onPageChanged}/>
        {users.map(u => <User key={u.id} user={u} followed={followed} unfollowed={unfollowed} isFollowing={isFollowing}/>)}
    </div>
}