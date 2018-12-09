import axios from 'axios';

const url = 'https://api.github.com';

export const getUserRepos = (username) => {
    return axios.get(`${url}/users/${username}/repos`);
}