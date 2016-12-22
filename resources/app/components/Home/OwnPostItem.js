import React, { Component } from 'react';
import OwnPostAction from './OwnPostAction';

class OwnPostItem extends Component {
    render(){
        var data = this.props.data;
        return <tr>
            <td className="hidden-xs">{data.id}</td>
            <td>{data.clientName}</td>
            <td>{data.publicMessage}</td>
            <td><OwnPostAction data={data} /></td>
        </tr>
    }
}

export default OwnPostItem;