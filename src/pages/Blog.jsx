import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';

import axios from 'axios'

const Blog = () => {

    const [posts, setPost] = useState([]);

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((data) => setPost(data.data))
        }, [])

    return (
        <div>
            <Accordion defaultActiveKey="0" >
                {posts.length > 0 ? (
                    posts.map((blog) => (
                        <Accordion.Item eventKey={blog.id}>
                            <Accordion.Header>{blog.title}</Accordion.Header>
                            <Accordion.Body>
                                <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))
                ) : (
                    <p>No blogs found</p>
                )}
            </Accordion>
            
        
        </div>
        
    )
}

export default Blog

export const loaderBlog = async () => {

}