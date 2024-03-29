import {Field, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import s from './../common/FormControls/FormControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type LoginPropsType = {
    login: any
    isAuth: any
}
const LoginForm = ({handleSubmit, error}: any) => {
    return <div>
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} component={Input} name={'password'} validate={[required]}
                       type={'password'}/>
            </div>
            <div>
                <Field type={'checkbox'} component={'input'} name={'rememberMe'} validate={[required]}/>remember me
            </div>
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>login</button>
            </div>
        </form>
    </div>
}
const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login',
})(LoginForm)
const Login = ({login, isAuth}: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)