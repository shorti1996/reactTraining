import axios from 'axios';

export default () => {
    return axios.get('http://localhost:3100/ingredients/')
}