import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    trel: () => ({
        description: 'Ler livro',
        list: [{
            description: 'Teste',
            done: true
        },{
            description: 'Tarefa 2',
            done: false
        }]
    })
})

export default rootReducers