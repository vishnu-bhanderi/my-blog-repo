// src/components/BlogPage.js

import React, { useState, useEffect } from 'react';
import fetchBlogPosts from '../utils/fetchBlogPosts';
import BlogPost from './BlogPost';

const BlogPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const blogPosts = await fetchBlogPosts();
            setPosts(blogPosts);
        };

        getPosts();
        console.log('getPosts called: ' , posts);
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            {posts.map(post => (
                <BlogPost key={post.sha} post={post} />
            ))}
        </div>
    );
};

export default BlogPage;
