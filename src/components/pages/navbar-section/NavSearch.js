import { IoSearchSharp } from "react-icons/io5";

const NavSearch=()=>{
    return(
        <div className="nav-search">
            <img src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png" alt="facebook-logo"></img>
            <div className="input-search"><IoSearchSharp className="search-icon" /><input type="text" placeholder="Search Facebook" />  </div>
        </div>
    )
}
export default NavSearch;