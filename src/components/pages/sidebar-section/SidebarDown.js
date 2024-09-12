import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";

const sideDown=[
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4FcxanDhhisTCG1gkVST8KVWjejc4DeqYeQ&s",
        name:"Save the Pomeroy Theatre"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxAbRsR9QrUoto4WhEdBhOualdsYwxaFjfQ&s",
        name:"Weekend Trips"
    },{
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVSqP21--ZoyB3nOVHFEbC046uheKARl8NMA&s",
        name:"Jasper's Market"
    },{
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8SKBM1rK8XTPDr6EfMM8ffG4aFVcJJh4IA&s",
        name:"Red Table Talk Group"
    },{
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzREl0iz0xMhMQt45zfe7wKvKt3MiH4ef1MA&s",
        name:"Best Hidden Hiking Trails"
    }
]
const SidebarDown=()=>{
    return(
        <div className="side-down">
            <div className="down-head">
                <span>Shortcuts</span>
                <HiOutlineDotsHorizontal className="icon" />
            </div>
            {sideDown.map(el=>{
                return(
                    <div key={el.name} className="down-body">
                        <img src={el.image} alt="nature"/>
                        <span>{el.name}</span>
                        </div>
            )})}
            <div className="seemore_btn">
<button>See more<RiArrowDropDownLine className="drop-arrow"/></button> </div>
        </div>
    )
}
export default SidebarDown;