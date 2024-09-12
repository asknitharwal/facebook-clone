import { FiPlusCircle } from "react-icons/fi";
import { FaCircle, FaFacebookMessenger } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
// import Dropdown from 'react-bootstrap/Dropdown';


const NavProfile =()=>{
    return(
        <div className="nav-profile">
          <div className="ul-left">
             <div className="div_li"><img src="https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/394193721_2754504514705525_5478513650949897062_n.jpg?ccb=11-4&oh=01_Q5AaIBGZpdSK8nIkYE1fXSNJrq8eyxqFLHTlXJMr4N2cGCWI&oe=66EBABAE&_nc_sid=5e03e0&_nc_cat=102" className="li-img" alt="profile"></img>
             <FaCircle className="on-status"/> </div>
            <div className="div_li"><p>Ashok</p></div>
            <div className="div_li"><FiPlusCircle /></div>
            <div className="div_li"><FaFacebookMessenger  className="position-relative" /><span className="position-absolute top-25 end-25 translate-middle badge rounded-pill bg-danger  fs-6 p-1" >1+</span></div>
            <div className="div_li"><FaBell /><span className="position-absolute top-25 end-25 translate-middle badge rounded-pill bg-danger  fs-6 p-1" >3+</span></div>
         <div className="div_li"> 
             {/* src="https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/394193721_2754504514705525_5478513650949897062_n.jpg?ccb=11-4&oh=01_Q5AaIBGZpdSK8nIkYE1fXSNJrq8eyxqFLHTlXJMr4N2cGCWI&oe=66EBABAE&_nc_sid=5e03e0&_nc_cat=102"  */}
             <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             <IoIosArrowDropdownCircle className="drop"/>
             </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
        </div>
</div>
        </div>
    )
}
export default NavProfile;