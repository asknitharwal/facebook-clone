
import SidebarDown from "../../pages/sidebar-section/SidebarDown";
import SidebarUp from "../../pages/sidebar-section/SidebarUp";
import "./sidebar.scss"
const Sidebar=()=>{
    return (
        <aside className="sidebar">
<SidebarUp/>            
<SidebarDown/>
        </aside>
    )
    }
    export default Sidebar;