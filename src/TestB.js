/**
 * Created by jiaow on 17/03/2018.
 */
import React from 'react'

class TestB extends React.Component{

    constructor(props){
        super(props);
        this.state={
            content:''
        }
    }

    handle=(e)=>{
        this.setState({
            content:e.target.value
        })
    }
    render(){
        return(

        <div>
            <input onChange={this.handle} ref={input=>this.input=input} defaultValue={123}/>
            <input value={this.state.content} />
        </div>
            )
    }
}

export default TestB