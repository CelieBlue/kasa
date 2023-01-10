import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const AppLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>
                Footer
            </footer>
        </>
    )       
};

export default AppLayout;