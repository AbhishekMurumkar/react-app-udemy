import axios from 'axios';

const instance = axios.create({
    baseURL:'https://reactburgerbuilder-8b06e.firebaseio.com'
});

export default instance;