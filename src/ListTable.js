import React from 'react'

class ListTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    Table = (props) => {

        return (
            <table className="table">
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
                        <tr className={item.isDone === true ? 'table-success' : ''} key={index}>

                            <td>{index+1}</td>
                            <td>{item.content}</td>
                            <td>{item.address}</td>
                            <td>{item.date}</td>


                            <td>
                                <div className="btn-toolbar">

                                    <button className="btn btn-primary mr-2">edit</button>
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
        )


    }

    editHandler=(e)=>{
        e.preventDefault();

    }


    refreshHandler = (e) => {
        e.preventDefault();
        const item = this.state.data;
        if (this.props.add().content.length > 0) {
            item.push(this.props.add());
            this.setState({
                data: item
            })

        }
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


    render() {
        return (
            <div>
                {this.Table(this.props)}
                <button className="btn btn-primary" onClick={this.refreshHandler}>refresh</button>

            </div>
        )
    }
}

export default ListTable;