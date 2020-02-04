import React from 'react'
import IconButton from '../template/iconButton';

export default props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(trel => (
            <tr key={trel._id}>
                <td className={trel.done ? 'markedAsDone' : ''}>{trel.description}</td>
                <td>
                    <IconButton styleB='success' icon='check' onClick={() => props.handleMarkAsDone(trel)} hide={trel.done}></IconButton>
                    <IconButton styleB='warning' icon='undo' onClick={() => props.handleMarkAsPending(trel)} hide={!trel.done}></IconButton>
                    <IconButton styleB='danger' icon='trash-o' onClick={() => props.handleRemove(trel)}  hide={!trel.done}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}