import React from 'react'
import PageHeader from '../template/pageHeader';
import TrelForm from './trelForm';
import TrelList from './trelList';

export default props => {
    return (
        <div>
            <PageHeader name='Tarefas' small='Cadastro' />
            <TrelForm/>
            <TrelList/>
        </div>
    )
}