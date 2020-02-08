import React, { Component } from 'react'
import PageHeader from '../template/pageHeader';
import TrelForm from './trelForm';
import TrelList from './trelList';
import Axios from 'axios';


export default class Trel extends Component {

    handleMarkAsDone(trel) {
        Axios.put(`${URL}/${trel._id}`, { ...trel, done: true })
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(trel) {
        Axios.put(`${URL}/${trel._id}`, { ...trel, done: false })
            .then(resp => this.refresh(this.state.description))
    }

    handleRemove(trel) {
        Axios.delete(`${URL}/${trel._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

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