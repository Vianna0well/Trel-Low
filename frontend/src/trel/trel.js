import React, { Component } from 'react'
import PageHeader from '../template/pageHeader';
import TrelForm from './trelForm';
import TrelList from './trelList';

export default class Trel extends Component {

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TrelForm/>
                <TrelList/>
            </div>
        )
    }
}