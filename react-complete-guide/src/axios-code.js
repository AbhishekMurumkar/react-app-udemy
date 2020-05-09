import axios from 'axios';

const instance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
});
instance.defaults.headers.common['Authorization']='auth token from instance';
instance.defaults.headers.post['Accept']='application/json';
instance.defaults.headers.post['Content-type']='application/json';
export default instance;