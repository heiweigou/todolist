/**
 * Created by jiaow on 15/03/2018.
 */
import React from 'react'
import ListTable from "./ListTable";

class Type extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            address: '',
            date: '',
        }
    }


    form = () => (

        <form>
            <div className="form-group">
                <label>Content</label>
                <input type="text" className="form-control" name="content" onChange={this.handlerInput}
                    value={this.state.content}   />
            </div>
            <div className="form-group">
                <label>address</label>
                <input type="text" className="form-control" name="address" onChange={this.handlerInput}
                       value={this.state.address}    />
            </div>
            <div className="form-group">
                <label>date</label>
                <input type="date" className="form-control" name="date" onChange={this.handlerInput}
                       value={this.state.date}     />
            </div>
            <div className="btn-toolbar float-right">

                <button type="submit" className="btn btn-primary mr-2" onClick={this.onSubmit}>add</button>
                <button type="button" className="btn btn-danger" onClick={this.handlerCancel}>cancel</button>
            </div>
        </form>
    )

    handlerInput = (e) => {
        const input = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: input
        })
    }


    handlerCancel = (e) => {
        this.setState({
            content: '',
            address: '',
            date: '',
            isDone: false
        })
    }

    onSubmit = (e) => {
        // e.preventDefault();
        const outData=this.state;
        this.handlerCancel()
        return outData;
    }



    render() {
        return (
            <div>
                <ListTable add={this.onSubmit}/>
                {/*<ListTable add={this.state.outdata}/>*/}
                <div className='container'>
                    {this.form()}
                </div>

            </div>

        )
    }
}

export default Type