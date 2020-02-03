import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => (
    <form>
        <div class="trelForm">
            <Grid cols='12 9 10'>
                <input id='description' className="form-control" placeholder="Adicione uma Tarefa" />
            </Grid>

            <Grid cols='12 3 2'>
                <IconButton styleB='primary' icon='plus'></IconButton>
            </Grid>
        </div>
    </form>
)