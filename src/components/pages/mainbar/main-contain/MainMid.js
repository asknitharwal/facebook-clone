import { FaUserTag } from "react-icons/fa";
import { MdPhotoLibrary } from "react-icons/md";
import { FaRegFaceSmile } from "react-icons/fa6";

const MainMid=()=>{
    return(
        <div className="mid_contain">
            <div className="mid-search">
                <img src="https://www.shutterstock.com/image-vector/satyamev-jayate-ashok-stambha-symbol-600nw-2163164719.jpg" alt="mid" />
                <input type="search" placeholder="What's on your mind, Ashok?"/>
            </div>
            <hr/>
            <div className="mid-tag">
                <div className="tag-div"><MdPhotoLibrary className="mid-icon1"/> <span>Photo/Video</span></div>
                <div className="tag-div"><FaUserTag className="mid-icon2" />  <span>Tag Friends</span></div>
                <div className="tag-div"><FaRegFaceSmile className="mid-icon3" /> <span>Feeling/Activity</span></div>
            </div>
        </div>
    )
}
export default MainMid;