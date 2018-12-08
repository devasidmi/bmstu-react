import React from 'react'
import RepoCard from '../components/RepoCard';
import '../static/css/main.css'

const Repos = props => {
    const {reposData} = props;
    const reposList = reposData.map(repo => {
        return (
            <div className="col s12 m12 l6 offset-l3" key={repo.id}>
                <div id="repos_list">
                    <RepoCard repoInfo={repo}/>
                </div>
            </div>
        )
    })

    return (
        <div className="row">
            {reposList}
        </div>
    )
}

export default Repos;