import { Outlet } from "react-router-dom";
import MenuApp from "../components/Menu";
import Footer from "../components/Footer";
import BarMain from "../components/BarMain";

const LayoutPublic = () => {
    return (
        <div>
            <MenuApp />
            <BarMain />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default LayoutPublic