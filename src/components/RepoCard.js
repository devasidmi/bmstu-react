import React from 'react'

const RepoCard = props => {
    const {repoInfo} = props;
    return (
        <div className="card">
            <div className="card-content">
                <a href={repoInfo.html_url} className="card-title">{repoInfo.name}</a>
                <p>{repoInfo.description}</p>
                <p>{repoInfo.language}</p>
            </div>
        </div>
    )
}
export default RepoCard;