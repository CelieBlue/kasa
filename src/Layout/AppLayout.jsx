import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import '../Styles/Layout.css'

const AppLayout = () => {
    return (
        <div className="container">
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>
                Footer
            </footer>
        </div>
    )       
};

export default AppLayout;