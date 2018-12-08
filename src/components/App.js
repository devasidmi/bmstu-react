import React, {Component} from 'react';
import '../static/css/material.min.css'
import '../static/css/main.css'
import {getUserRepos} from '../github'
import swal from 'sweetalert';
import Repos from './ReposList'

class App extends Component {

    constructor(props) {
        super();
        this.state = {
            repos: []
        }
    }

    searchUserRepos = async(username) => {
        try {
            const response = await getUserRepos(username);
            this.repos = response.data
            this.setState({repos: response.data});
        } catch (err) {
            this.setState({repos: []});
            const statusCode = err.response.status;
            let message = '';
            switch (statusCode) {
                case 404:
                    message = 'User not found'
                    break;
                default:
                    message = 'Something gone wrong. Try again later'
                    break;
            }
            swal("Error", message, "error");
        }
    }

    render() {
        return (
            <div>
                <div id="search-bar" className="row">
                    <div className="col s12">
                        <div className="input-field col s7 offset-s2">
                            <input id="search_repo" type="text"></input>
                            <label className="active" htmlFor="search_repo">Github user</label>
                        </div>
                        <a
                            id="search-btn"
                            onClick={() => this.searchUserRepos($('#search_repo').val())}
                            className="waves-effect indigo darken-1 waves-light btn">Search</a>
                    </div>
                    <Repos reposData={this.state.repos}/>
                </div>
            </div>
        )
    }
}

export default App;