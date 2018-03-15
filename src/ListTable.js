import React from 'react'



const Table = (data) => {
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

            {data.map((item) => {
                return (
                    <tr>

                        <td>{item.index}</td>
                        <td>{item.content}</td>
                        <td>{item.address}</td>
                        <td>{item.date}</td>
                        <td>
                            <button className="btn btn-primary" onClick={()=>doneHandler(item)}>edit</button>
                            <button className="btn btn-success">done</button>
                            <button className="btn btn-danger">delete</button>
                        </td>
                    </tr>

                )
            })}



            </tbody>

        </table>
    )
}

const doneHandler=(item)=>{
    console.log(item)
}

// editHandler=(e)=>{
//
// }
//
// deleteHandler=(e)=>{
//
// }

class ListTable extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    index: 1,
                    content: 'test',
                    address: '5 glenara',
                    date: new Date().toDateString(),
                    isDone:false
                }, {
                    index: 2,
                    content: 'test',
                    address: '5 glenara',
                    date: new Date().toDateString(),
                    isDone:false

                }
            ]
        }
    }

    render() {
        return (
            <div>
                {Table(this.state.data)}
            </div>
        )
    }
}

export default ListTable;