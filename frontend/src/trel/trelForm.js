import React, { Component } from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeDescription, search } from './trelActions'

class TrelForm extends Component {
  
    constructor(props){
        super(props);

        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        if (e.key === 'Enter') {
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd();
        }else if(e.key === 'Escape'){
            this.props.handleClear();
        }
    }

    render() {
        return(
            <form>
                <div className="trelForm">
                    <Grid cols='12 9 10'>
                        <input id='description' className="form-control" placeholder="Adicione uma Tarefa" onKeyUp={this.keyHandler} onChange={this.props.changeDescription} value={this.props.description} />
                    </Grid>
        
                    <Grid cols='12 3 2'>
                        <IconButton styleB='primary' icon='plus' onClick={this.props.handleAdd}></IconButton>
                        <IconButton styleB='info' icon='search' onClick={this.props.handleSearch}></IconButton>
                        <IconButton styleB='default' icon='close' onClick={this.props.handleClear}></IconButton>
                    </Grid>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => ({ description: state.trel.description });
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TrelForm);