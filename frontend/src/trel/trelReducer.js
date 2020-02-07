const INITIAL_STATE = {
    description: '', list: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload };
        case 'TREL_SEARCHED':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}