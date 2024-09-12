import MainContact from "../../pages/mainbar/main-contact/MainContact";
import MainContain from "../../pages/mainbar/main-contain/MainContain";
import MainMid from "../../pages/mainbar/main-contain/MainMid";
import MainStory from "../../pages/mainbar/main-contain/MainStory";
import "./mainbar.scss"
const Mainbar=()=>{
    return (
        <main className="mainbar">
            <div className="main_contain">
                <MainStory/>
                <MainMid/>
                <MainContain/>
            </div>
            <div className="main_contact">
                <MainContact/>
            </div>
        </main>
    )
    }
    export default Mainbar;