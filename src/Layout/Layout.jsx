import { Outlet } from "react-router-dom";
import MenuApp from "../components/Menu";
import Footer from "../components/Footer";

const LayoutPublic = () => {
    return (
        <div>
            <MenuApp />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default LayoutPublic