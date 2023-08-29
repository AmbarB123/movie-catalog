import { createBrowserRouter } from "react-router-dom";

import LayoutPublic from "../Layout/Layout";

import MoviesMarvel from "../pages/Movies"
import DetailMovie from "../pages/DetailMovie"
import NotFound from "../pages/NotFound";
import Blog from "../pages/Blog";
import Post, {loaderPost} from "../pages/Post";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children : [
            {
                path: '/',
                element: <MoviesMarvel />
            },
            {
                path: '/detail/:id',
                element: <DetailMovie />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/blog/:id',
                element: <Post />,
                loader: loaderPost,
            }
        ]
    }
])