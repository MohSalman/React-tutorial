import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import PostCard from '../../Components/Cards/PostCard'
import { SpinnerLoader } from '../../Components/Loaders/SpinnerLoader';

const PostList = () => {
    const [datssss, setData] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(apiData => {
                    // console.log("post data", apiData);
                    setData(apiData);
                    setLoader(false);
                }  
            )
    }, [])

    console.log("check data into state", datssss);
    return (
        <>
            {loader? <SpinnerLoader/>:""}
            <div className="container">
                <div className="row">
                    <PostCard dataApi={datssss} />
                </div>
            </div>
        </>
    )
}

export default PostList
