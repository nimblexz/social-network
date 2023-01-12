import React, {ChangeEvent} from "react";

export class ProfileStatus extends React.Component<any> {

    state = {
        editMode: false,
        status:this.props.status
    }
     activateEditMode=()=>{
        this.setState({editMode:true})
    }
    deActivateEditMode=()=>{
        this.setState({editMode:false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange=(e:ChangeEvent<HTMLInputElement>)=>{
        this.setState({status:e.currentTarget.value})

    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.status!==this.props.status){
            this.setState({status:this.props.status})
        }
    }


    render() {

        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'hello'}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status} onBlur={this.deActivateEditMode}/>
                    </div>}
            </div>
        )
    }
}
