import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => (
    <form>
        <div className="trelForm">
            <Grid cols='12 9 10'>
                <input id='description' className="form-control" placeholder="Adicione uma Tarefa" onChange={props.handleChange} />
            </Grid>

            <Grid cols='12 3 2'>
                <IconButton styleB='primary' icon='plus' onClick={props.handleAdd}></IconButton>
                <IconButton styleB='info' icon='search' onClick={props.handleSearch}></IconButton>
                <IconButton styleB='default' icon='close' onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    </form>
)