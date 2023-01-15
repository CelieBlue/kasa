import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../Styles/Layout.css'

const AppLayout = () => {
    return (
        <div className="container">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )       
};

export default AppLayout;