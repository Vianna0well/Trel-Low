import Axios from 'axios';
const URL = 'http://localhost:3003/api/trel'

export const changeDescription = e => ({
    type: 'DESCRIPTION_CHANGED',
    payload: e.target.value
});

export const search = () => {
    const request = Axios.get(`${URL}?sort=-createdAt`);
    return {
        type: 'TREL_SEARCHED',
        payload: request
    }
}

export const add = description => {
    return dispatchEvent => {
         Axios.post(URL, { description })
            .then(resp => dispatchEvent(clear()))
            .then(resp => dispatchEvent(search()))
    }
}

export const markAsDone = trel => {
    return dispatchEvent => {
        Axios.put(`${URL}/${trel._id}`, { ...trel, done: true })
            .then(resp => dispatchEvent(search()))
    }    
}

export const markAsPending = trel => {
    return dispatchEvent => {
        Axios.put(`${URL}/${trel._id}`, { ...trel, done: false })
           .then(resp => dispatchEvent(search()))
    }
}

export const remove = trel => {
    return dispatchEvent => {
        Axios.delete(`${URL}/${trel._id}`, {})
           .then(resp => dispatchEvent(search()))
    }
}

export const clear = () => {
    return { type: 'TREL_CLEAR' }
}