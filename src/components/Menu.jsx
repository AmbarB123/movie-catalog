import { NavLink } from "react-router-dom"

const MenuApp = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <NavLink to="/" className="btn btn-outline-primary">Home</NavLink>
                <NavLink to="/blog" className="btn btn-outline-primary">Blog</NavLink>
            </div>
        </nav>
    )
}

export default MenuApp