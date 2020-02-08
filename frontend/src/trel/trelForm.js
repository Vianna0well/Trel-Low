import React, { Component } from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add, changeDescription, search, clear } from './trelActions'

class TrelForm extends Component {
  
    constructor(props){
        super(props);

        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, clear, description, search } = this.props;
        if (e.key === 'Enter') {
            e.ctrlKey ? search() : add(description);
        }else if(e.key === 'Escape'){
            clear();
        }
    }

    render() {
        const { add, description, search } = this.props;
        return(
            <form>
                <div className="trelForm">
                    <Grid cols='12 9 10'>
                        <input id='description' className="form-control" placeholder="Adicione uma Tarefa" onKeyUp={this.keyHandler} onChange={this.props.changeDescription} value={description} />
                    </Grid>
        
                    <Grid cols='12 3 2'>
                        <IconButton styleB='primary' icon='plus' onClick={() => add(description)}></IconButton>
                        <IconButton styleB='info' icon='search' onClick={() => search()}></IconButton>
                        <IconButton styleB='default' icon='close' onClick={this.props.clear}></IconButton>
                    </Grid>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => ({ description: state.trel.description });
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TrelForm);