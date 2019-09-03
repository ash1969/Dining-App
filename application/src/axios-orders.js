import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a726a.firebaseio.com/'
});

export default instance;