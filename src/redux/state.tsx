let rerenderEntireTree = (state: StateType) => {
    console.log('State changed')
}

export type PostType = {
    id: number
    message: string
    likes: number
}
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}


export type ProfileStateType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    message: string
    changeNewTextCallback: (newText: string) => void
}

export type ProfilePageType = {
    posts: Array<PostType>
    message: string


}
export type DialogsStateType = {
    dialogsPage: DialogsPageType
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>

}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType


}
export type AppPropsType = {
    state: StateType
    addPost: (postMessage: string) => void
    message: string
}

export let state: StateType = {

    profilePage: {
        message: '',
        posts: [
            {id: 1, message: 'poka', likes: 2},
            {id: 2, message: 'privet', likes: 6}
        ]

    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Ignat'},
            {id: 4, name: 'Sveta'},
            {id: 5, name: 'Dasha'},
            {id: 6, name: 'Victor '}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Privet'},
            {id: 3, message: 'Shalom'}
        ]
    }
}

export let addPost = (postMessage: string) => {
    debugger
    let newPost: PostType = {
        id: 3,
        message: postMessage,
        likes: 72
    }
    state.profilePage.posts.push(newPost)
    changeNewText('')
    rerenderEntireTree(state)
}
export const changeNewText = (newText: string) => {
    state.profilePage.message = newText
    rerenderEntireTree(state)
}
export const subscribe = (observer: (state: StateType) => void) => {
    rerenderEntireTree = observer
}

