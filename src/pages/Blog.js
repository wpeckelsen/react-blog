import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/posts.json';

function Blog() {
    function logPostFunction() {
        console.log(posts);
    }

    return(
        <>
        <div id="pageContainer">
            <h1>Blogs</h1>
            <h4>Click a blog and read more about horses. </h4>
            <Link to="/blog/:blogId">Blog Items</Link>

            <Link to="/"> Back to home </Link>
            <br/><br/>
            <button type="button" onClick={logPostFunction}>Console Log Posts</button>
        </div>

        </>


    )

}

export default Blog;