import axios from 'axios';

export default (data) => {
    return axios.post('http://localhost:3100/order/', data)
}