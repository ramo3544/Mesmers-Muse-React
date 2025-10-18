import {NavBar} from "./nav-bar.jsx";
import { Outlet } from "react-router-dom";
import {Footer} from "./footer.jsx";

export function Layout() {
    return (
        <>
            <NavBar/>
            <main>
                <Outlet />
            </main>
            <Footer/>
        </>
    )

}