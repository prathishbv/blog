import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`);
                setFeaturedBlog(res.data[0]);
                console.log(res.data)
            }
            catch (err) {

            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
                setBlogs(res.data);
            }
            catch (err) {

            }
        }

        fetchBlogs();
    }, []);

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    const getBlogs = () => {
        let list = [];
        let result = [];

        blogs.map(blogPost => {
            return list.push(
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">{capitalizeFirstLetter(blogPost.category)}</strong>
                        <h3 className="mb-0">{blogPost.title}</h3>
                        <div className="mb-1 text-muted">{blogPost.month} {blogPost.day}</div>
                        <p className="card-text mb-auto">{blogPost.excerpt}</p>
                        <Link to={`/blog/${blogPost.slug}`} className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img width='200' height='250' src={blogPost.thumbnail} alt='thumbnail' />
                    </div>
                </div>
            );
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className='row mb-2'>
                    <div className='col-md-6'>
                        {list[i]}
                    </div>
                    <div className='col-md-6'>
                        {list[i + 1] ? list[i + 1] : null}
                    </div>
                </div>
            )
        }

        return result;
    };

    return (
        <div className="container mt-3">
            <div className="nav-scroller py-1 mb-3 border-bottom bg-black rounded">
                <nav className="nav nav-underline justify-content-between">
                    <Link className="nav-item nav-link link-body-emphasis active" to="/category/">All</Link>
                    <Link className="nav-item nav-link link-body-emphasis" to="/category/general">General</Link>
                    <Link className="nav-item nav-link link-body-emphasis" to="/category/tech">Technologies</Link>

                </nav>
            </div>
            <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary bg-black">
                <div className="col-lg-6 px-0 text-white">
                    <h1 className="display-4 fst-italic">{featuredBlog.title}</h1>
                    <p claclassNamess="lead my-3">{featuredBlog.excerpt}</p>
                    <p className="lead mb-0">
                        <Link to={`/blog/${featuredBlog.slug}`} className="text-body-emphasis fw-bold">Continue reading...</Link>
                    </p>
                </div>
            </div>
            {getBlogs()}
        </div>
    )



}

export default Blog;