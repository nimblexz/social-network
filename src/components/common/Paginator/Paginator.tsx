import React from "react";
import s from './Paginator.module.css'




type PaginatorPropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (p: number) => void
}
export const Paginator = ({totalUsersCount,pageSize,onPageChanged,currentPage}:PaginatorPropsType) => {


    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {pages.map(p => <span onClick={() => {
            onPageChanged(p)
        }} className={currentPage === p ? s.selectedPages : ''}>{p}</span>)}
    </div>
}