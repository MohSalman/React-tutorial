import React from 'react'
import { Link } from 'react-router-dom'

const PostSingleCard = ({postItem}) => {
    return (
        <div className="card">
            <div className="card-header">
                Post Id : {postItem?.id}
            </div>
            <div className="card-body">
                <h5 className="card-title">{postItem?.title}</h5>
                <p className="card-text">{postItem?.body}</p>
                <Link to={`/post/${postItem?.id}`} className="btn btn-primary">Read More...</Link>
            </div>
            <div className="card-footer text-muted">
                User Id : {postItem?.userId}
            </div>
        </div>
    )
}

export default PostSingleCard
