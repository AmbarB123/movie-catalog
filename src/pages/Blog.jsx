import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import axios from 'axios'

const Blog = () => {

    const [posts, setPost] = useState([]);

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((data) => setPost(data.data))
        }, [])

    return (
        <ul>
            {posts.length > 0 ? (
                posts.map((blog) => (
                    <li key={blog.id}>
                        <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))
            ) : (
                <li>No blogs found</li>
            )}
        </ul>
    )
}

export default Blog

export const loaderBlog = async () => {

}