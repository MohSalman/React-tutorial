import React from 'react'
import PostSingleCard from './PostSingleCard'

const PostCard = ({ dataApi }) => {
    return (
        <>
            {

                dataApi?.map((postItem) => (
                     <div className="col-xl-3 col-lg-4 col-md-6 mb-3" key={postItem.id}>
                        <PostSingleCard postItem={postItem}/>
                    </div>
                ))
            //     dataApi?.map((postItem) => {
            //         return <div className="col-xl-3 col-lg-4 col-md-6" key={postItem.id}>
            //     <div className="card">
            //         <div className="card-header">
            //             Post Id : {postItem.id}
            //         </div>
            //         <div className="card-body">
            //             <h5 className="card-title">{postItem.title}</h5>
            //             <p className="card-text">{postItem.body}</p>
            //             <Link to="/post/1" className="btn btn-primary">Read More...</Link>
            //         </div>
            //         <div className="card-footer text-muted">
            //             User Id : {postItem.userId}
            //         </div>
            //     </div>
            // </div>
            //     })
            }

        </>
    )
}

export default PostCard
