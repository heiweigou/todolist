import React from 'react'


let editItem = null;
let editItemIndex = null;
class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    Table = () => {

        return (
            <div>
                <h1 className="text-center">To-do list app</h1>
            <div className="text-right">
                {new Date().toDateString()}
            </div>
            <table className="table text-center">
                <thead>
                <tr>
                    <td>index</td>
                    <td>content</td>
                    <td>address</td>
                    <td>date</td>
                    <td>action</td>
                </tr>
                </thead>
                <tbody>
                {this.state.data.map((item, index) => {
                    return (
                        <tr className={item.isDone ? 'table-success' : ''} key={index}>

                            <td>{index + 1}</td>
                            <td>{item.content}</td>
                            <td>{item.address}</td>
                            <td>{item.date}</td>


                            <td>
                                <div className="btn-toolbar justify-content-center">

                                    <button className="btn btn-primary mr-2" onClick={() => this.editHandler(index)}>
                                        edit
                                    </button>
                                    <button className="btn btn-success mr-2" onClick={() => this.doneHandler(index)}>
                                        done
                                    </button>
                                    <button className="btn btn-danger mr-2" onClick={() => this.deleteHandler(index)}>
                                        delete
                                    </button>
                                </div>
                            </td>
                        </tr>

                    )
                })}

                </tbody>

            </table>
                <div className="text-right text-success">Total tasks: {this.state.data.length}</div>
            </div>
        )


    }

    editHandler = (index) => {
        const item = this.state.data;
        item[index].isEdit = true;
        this.setState({data: item});
        console.log('edit mode is on', this.state.data[index]);
        editItem = this.state.data[index]
        editItemIndex = index
    }

    editItemHandler = (index, data) => {
        const item = this.state.data;
        item.splice(index, 1, data);
        console.log(data)
        this.setState({data:item})
    }


    deleteHandler = (index) => {
        const item = this.state.data;
        item.splice(index, 1)
        this.setState({
            data: item
        })
    }
    doneHandler = (index) => {
        const item = this.state.data;
        item[index].isDone = !item[index].isDone;
        this.setState({data: item})

    }

    addHandler = (item) => {
        const list = this.state.data;
        list.push(item);
        this.setState({
            data: list
        })
    }


    render() {
        return (
            <div className='container'>
                {this.Table()}

                {this.state.data.length > 0 && editItem !== null && editItem.isEdit ?
                    <Type onAdd={this.addHandler} prevData={editItem} editItemHandler={this.editItemHandler}/> :
                    <Type onAdd={this.addHandler}/>}


            </div>
        )
    }
}

class Type extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            address: '',
            date: '',
            isDone: false,
            isEdit: false
        }
    }


    handlerCheck = (e) => {

        if (this.state.content.length > 0) {
            e.target.className = 'form-control';
            e.target.placeholder = ''
        }

        else {
            e.target.className = 'form-control is-invalid';
            e.target.placeholder = 'please type content'
        }


    }
    handlerInput = (e) => {
        const input = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: input
        })
    }


    handlerCancel = () => {
        this.setState({
            content: '',
            address: '',
            date: '',
            isDone: false,
            isEdit: false
        });


    }

    handlerAdd = (e) => {
        e.preventDefault();
        if (this.state.content.length > 0) {
            this.props.onAdd(this.state)
            this.handlerCancel()
        }

    }

    handlerEdit = (e) => {
        e.preventDefault();
        this.props.editItemHandler(editItemIndex, this.state)
        editItemIndex = null;
        editItem = null;
        this.handlerCancel()

    }

    button = () => {
        if (this.props.prevData && this.props.prevData.isEdit) {
            return 'Save change'
        }
        return 'add'
    }

    buttonHandler = () => {
        if (this.props.prevData && this.props.prevData.isEdit) {
            return this.handlerEdit
        }

        return this.handlerAdd
    }

    componentWillMount() {
        if (this.props.prevData && this.props.prevData.isEdit) {
            this.setState({
                ...this.prevData
            })
        }
        console.log('did')
    }

    render() {
        return (
            <div>

                <div>
                    <form>
                        <div className="form-group">
                            <label>Content</label>
                            <input type="text" className='form-control' name="content" onChange={this.handlerInput}
                                   value={this.state.content}
                                //  ref={input=>this.input=input}
                                // defaultValue={this.props.prevData && this.props.prevData.isEdit ? this.props.prevData.content : ''}
                                   onBlur={this.handlerCheck}/>
                        </div>
                        <div className="form-group">
                            <label>address</label>
                            <input type="text" className="form-control" name="address" onChange={this.handlerInput}
                                   value={this.state.address}/>
                        </div>
                        <div className="form-group">
                            <label>date</label>
                            <input type="date" className="form-control" name="date" onChange={this.handlerInput}
                                   value={this.state.date}/>
                        </div>
                        <div className="btn-toolbar float-right">

                            <button type="submit" className="btn btn-primary mr-2"
                                    onClick={this.buttonHandler()}>{this.button()}</button>
                            <button type="button" className="btn btn-danger" onClick={this.handlerCancel}>cancel
                            </button>
                        </div>
                    </form>

                </div>

            </div>

        )
    }
}

export default Test;