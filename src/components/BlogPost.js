// src/components/BlogPost.js

import React from 'react';
import ReactMarkdown from 'react-markdown';

const BlogPost = ({ post }) => {
    const { content } = post;
    return (
        <div>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default BlogPost;
