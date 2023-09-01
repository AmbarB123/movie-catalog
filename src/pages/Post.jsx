import { useLoaderData } from "react-router-dom";

const Post = () => {

    const {post} = useLoaderData()
    console.log(post);

    return (
        <div className="post-detail">
            <h1 className="text-white container text-center"> {post.title}</h1>
            <p className="text-white container text-center text">
                {post.body}
            </p>
            <div className="img-banner-detail">
                <img src="/bg-blog-detail.jpg" alt="" />
            </div>
        </div>
    )
}

export default Post

export const loaderPost = async ({ params }) => {
    const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const post = await data.json();
    return { post };
};