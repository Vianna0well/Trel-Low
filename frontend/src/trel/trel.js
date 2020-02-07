import React, { Component } from 'react'
import PageHeader from '../template/pageHeader';
import TrelForm from './trelForm';
import TrelList from './trelList';
import Axios from 'axios';


export default class Trel extends Component {

    constructor(props){
        super(props);
        this.state = { description: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
        
        this.refresh();
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        Axios.get(`${URL}?sort=-createdAt${search}`)
        .then(resp => this.setState({...this.state, description, list:resp.data}))
    }
    
    handleSearch() {
        this.refresh(this.state.description)
    }
      
    handleClear() {
        this.refresh();
    }

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

    handleAdd() {
        const description = this.state.description;

        Axios.post(URL, { description })
            .then(resp => this.refresh(''));
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TrelForm handleAdd={this.handleAdd} 
                handleChange={this.handleChange} 
                handleSearch={this.handleSearch} 
                handleClear={this.handleClear} />
                
                <TrelList handleRemove={this.handleRemove}
                handleMarkAsDone={this.handleMarkAsDone} 
                handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
}