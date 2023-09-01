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
        <div className="post">
            <div className="img-banner-blog">
                <img src="bg-blog.jpg" alt="" />
            </div>
            <h1 className="text-white container text-center"> Articles</h1>
            <Accordion defaultActiveKey="0" className="accordion-post" >
                {posts.length > 0 ? (
                    posts.map((blog) => (
                        <Accordion.Item eventKey={blog.id} key={blog.id}>
                            <Accordion.Header>{blog.title}</Accordion.Header>
                            <Accordion.Body>
                                Here you can find more information <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
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