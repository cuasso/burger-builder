import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-builder-2cf97.firebaseio.com/'
})

export default instance