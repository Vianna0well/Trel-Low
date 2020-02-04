import React, { Component } from 'react'
import PageHeader from '../template/pageHeader';
import TrelForm from './trelForm';
import TrelList from './trelList';
import Axios from 'axios';

const URL = 'http://localhost:3003/api/trel'

export default class Trel extends Component {

    constructor(props){
        super(props);
        this.state = { description: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        
        this.refresh()
    }

    refresh() {
        Axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({ ...this.state, description: '', list: resp.data }))
    }

    handleMarkAsDone(trel) {
        Axios.put(`${URL}/${trel._id}`, { ...trel, done: true })
            .then(resp => this.refresh())
    }

    handleMarkAsPending(trel) {
        Axios.put(`${URL}/${trel._id}`, { ...trel, done: false })
            .then(resp => this.refresh())
    }

    handleRemove(trel) {
        Axios.delete(`${URL}/${trel._id}`)
            .then(resp => this.refresh())
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description;

        Axios.post(URL, { description })
            .then(resp => this.refresh());
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TrelForm handleAdd={this.handleAdd} handleChange={this.handleChange} />
                <TrelList handleRemove={this.handleRemove} list={this.state.list}
                handleMarkAsDone={this.handleMarkAsDone} handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
}