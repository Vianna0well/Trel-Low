import React from 'react'
import IconButton from '../template/iconButton';
import { connect } from 'react-redux';

const TrelList = props => {

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
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.trel.list});
export default connect(mapStateToProps)(TrelList)