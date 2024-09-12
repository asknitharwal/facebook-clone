import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { RiMemoriesLine } from "react-icons/ri";

const sideUp =[
{
    logo:<FaRegCircleUser />,
    name:"Ashok"
},
{
    logo:<MdOutlineOndemandVideo />,
    name:"Watch"
},
{
    logo:<FaUserFriends />,
    name:"Friends"
},{
    logo:<MdEventAvailable />,
    name:"Event"
},
{
    logo:<RiMemoriesLine />,
    name:"Memories"
}
]


const SidebarUp=()=>{
    return(
        <div className="side-up">
{sideUp.map(el=>(
    <div key={el.name} className="side-up-item">
        <div className="span_icon">{el.logo}</div>
        <span>{el.name}</span>
        </div>
))}
<div className="seemore_btn">
<button>See more</button>
        </div>
        <hr/>
        </div>
    )
}
export default SidebarUp;