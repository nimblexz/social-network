import {Field, reduxForm} from "redux-form";
import React from "react";

type FormDataType={
    login:string
    password:string
    rememberMe:boolean
}
const LoginForm=(props:any)=>{
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'password'} component={'input'} name={'password'}/>
            </div>
            <div>
                <Field type={'checkbox'} component={'input'} name={'rememberMe'}/>remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    </div>
}
const LoginReduxForm=reduxForm<FormDataType>({
    form:'login',
})(LoginForm)
export const Login=()=>{
    const onSubmit=(formData:FormDataType)=>{
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}