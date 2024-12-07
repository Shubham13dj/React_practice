import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return (
    <>
    <h1>Home</h1>
    <nav>
            <ul>
                <li> <Link to="/About">About</Link>
                </li>
                <li> <Link to="/Help">help</Link>
                </li>
            </ul>
    </nav>
    <Outlet />
    </>
    );
  };
  
  export default Home;