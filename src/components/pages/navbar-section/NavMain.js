import { AiFillHome } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { AiFillShop } from "react-icons/ai";
import { MdOutlineGroups } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";

const NavMain=()=>{
    return(
        <div className="nav-main">
            <ul className="main_ul">
                <li><AiFillHome className="main_icon" /></li>
                <li><MdOutlineOndemandVideo className="main_icon"/> </li>
                <li><AiFillShop className="main_icon"/> </li>
                <li><MdOutlineGroups className="main_icon"/> </li>
                <li><RiPagesLine className="main_icon"/> </li>
            </ul>
        </div>
    )
}
export default NavMain;