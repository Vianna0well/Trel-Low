const INITIAL_STATE = {
    description: 'Input trancado',
    list: [{
        description: 'Teste',
        done: true
    },{
        description: 'Tarefa 2',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload };
        default:
            return state
    }
}