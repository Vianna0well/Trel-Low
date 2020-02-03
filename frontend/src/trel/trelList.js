import React from 'react'
import IconButton from '../template/iconButton';

export default props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(trel => (
            <tr key={trel._id}>
                <td>{trel.description}</td>
                <td>
                    <IconButton styleB='danger' icon='trash-o' onClick={() => props.handleRemove(trel)}></IconButton>
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