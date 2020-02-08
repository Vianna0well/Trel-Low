import Axios from 'axios';
const URL = 'http://localhost:3003/api/trel'

export const changeDescription = e => ({
    type: 'DESCRIPTION_CHANGED',
    payload: e.target.value
});

export const search = () => {
    const request = Axios.get(`${URL}?sort=-createdAt${search}`);
    return {
        type: 'TREL_SEARCHED',
        payload: request
    }
}

export const add = description => {
    return Axios.post(URL, { description })
        .then(resp => dispatchEvent({ type: 'TREL_ADDED', payload: resp.data }))
        .then(resp => dispatchEvent(search()))
}