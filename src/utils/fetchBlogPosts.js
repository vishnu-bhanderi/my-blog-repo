// src/utils/fetchBlogPosts.js

const fetchBlogPosts = async () => {
    try {
        const response = await fetch('https://api.github.com/repos/vishnu-bhanderi/my-blog-repo');
        const data = await response.json();
        const files = data.filter(file => file.type === 'file');
        
        const posts = await Promise.all(files.map(async (file) => {
            const res = await fetch(file.download_url);
            const content = await res.text();
            return { ...file, content };
        }));
console.log("Fetching posts" , posts);
        return posts;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
};

export default fetchBlogPosts;
