import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useState } from 'react/cjs/react.development'
import PostSingleCard from '../../Components/Cards/PostCard/PostSingleCard'
import { SpinnerLoader } from '../../Components/Loaders/SpinnerLoader'

const PostDetail = () => {
    let { postId } = useParams()
    console.log("id test", postId)
    const [datssss, setData] = useState({});
    const [loader, setLoader] = useState(false);
    const [postState, setPostState] = useState(postId);

    useEffect(() => {
        setLoader(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(apiData => {
                // console.log("post data", apiData);
                setData(apiData);
                setLoader(false);
            })
    }, [postState])

    const changeId = () => {
        setPostState(postState + 1);
    }

    console.log("datssss -----", datssss);
    return (
        <div className="container">
            <button onClick={changeId}>Change ID</button>
            {loader ? <SpinnerLoader /> : ""}
            <PostSingleCard postItem={datssss} />
        </div>
    )
}

export default PostDetail
