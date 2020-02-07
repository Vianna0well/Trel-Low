import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeDescription } from './trelActions'

const TrelForm = props => {
  
    const keyHandler = e => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        }else if(e.key === 'Escape'){
            props.handleClear();
        }
    }

    return(
    <form>
        <div className="trelForm">
            <Grid cols='12 9 10'>
                <input id='description' className="form-control" placeholder="Adicione uma Tarefa" onKeyUp={keyHandler} onChange={props.changeDescription} value={props.description} />
            </Grid>

            <Grid cols='12 3 2'>
                <IconButton styleB='primary' icon='plus' onClick={props.handleAdd}></IconButton>
                <IconButton styleB='info' icon='search' onClick={props.handleSearch}></IconButton>
                <IconButton styleB='default' icon='close' onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    </form>
)}

const mapStateToProps = state => ({ description: state.trel.description });
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TrelForm);