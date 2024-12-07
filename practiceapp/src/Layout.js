import { Outlet, Link } from "react-router-dom";

const Layout = () =>{
    return(
        <>
        <nav>
            <ul>
                <li> <Link to="/home">Home</Link>
                </li>
                <li> <Link to="/About">About</Link>
                </li>
                <li> <Link to="/Help">help</Link>
                </li>
            </ul>
        </nav>
      <Outlet />
        </>
    )
};

export default Layout;