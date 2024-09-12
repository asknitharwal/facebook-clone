import NavMain from "../../pages/navbar-section/NavMain";
import NavSearch from "../../pages/navbar-section/NavSearch";
import "./navbar.scss"
import NavProfile from "../../pages/navbar-section/NavProfile";
const Navbar=()=>{
    return (
        <nav className="navbar">
            <NavSearch/>
            <NavMain/>
            <NavProfile/>
        </nav>
    )
    }
    export default Navbar;