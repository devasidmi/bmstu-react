import axios from 'axios';

const url = 'https://api.github.com/';

export const getUserRepos = (username)=>{
    const prefix = `users/${username}/repos`
    return axios.get(url+prefix);
}