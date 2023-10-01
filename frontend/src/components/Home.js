import { Link } from "react-router-dom";
import "./Home.css"
const Home = () => {
    return (
        <div className="container">
            <div className="jumbotron mt-5">
                <h1 className="display-4">Welcome to StorySparks</h1>
                <p className="lead">Blog page</p>
                <hr className="my-4" />
                <p> For contents that might interests you</p>
                <p className="lead">
                    <Link className="btn btn-primary btn-lg" to="/blog" role="button">Checkout to my blogs</Link>
                </p>
            </div>
        </div>
    )
}

export default Home;