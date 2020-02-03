import React, { Component } from 'react'
import PageHeader from '../template/pageHeader';
import TrelForm from './trelForm';
import TrelList from './trelList';

export default class Trel extends Component {

    constructor(props){
        super(props);
        this.state = { description: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        console.log(this.state.description);
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TrelForm handleAdd={this.handleAdd} handleChange={this.handleChange} />
                <TrelList />
            </div>
        )
    }
}