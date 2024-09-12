import { FiMoreHorizontal } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";

const birth=[
    {
        id:"kamlesh",
        name:"Kamlesh Kumar",
        more:<FiMoreHorizontal />,
          time:"2 hrs",
        icon:<FaUserFriends />,
        photo:"https://cdn4.sharechat.com/compressed_gm_40_img_808541_2a5de6d_1703412806820_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=820_sc.jpg",
        label:"Sending some love to the most charming man in my life. You always bring the best out of me. I do not know how you do it, but I love you for that. Happy Birthday.🎂🥳🎉🎈🎁",
        type:"video",
        post:"https://videos.pexels.com/video-files/5805060/5805060-uhd_2560_1440_25fps.mp4"
    },

    {
        id:"ashok ",
        name:"Ashok Kumar",    
        more:<FiMoreHorizontal />,
          time:"2 hrs",
        icon:<FaUserFriends />,
    photo:"https://cdn4.sharechat.com/romanticboydp_30721207_1657454937636_sc_cmprsd_75.jpg?tenant=sc&referrer=pwa-sharechat-service&f=rsd_75.jpg",
        label:"तुम्हारी हर दुआ मंजूर हो, खुशियों से हर पल भरपूर हो, और कोई ख्वाहिश अधूरी न हो। जन्मदिन की हार्दिक शुभकामनाएं 🎂🥳🎉🎈🎁",
        type:"image",
        post:"https://www.icegif.com/wp-content/uploads/2022/07/icegif-396.gif"
    },
    {
        id:"anjali",
        name:"Anjali Jain",
        more:<FiMoreHorizontal />,
          time:"2 hrs",
        icon:<FaUserFriends />,
        photo:"https://cdn4.sharechat.com/33d5318_1c8/compressed_gm_40_img_511282_d65d709_1710493509663_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=663_sc.jpg",
        label:"Wishing you a day filled with happiness and a year filled with joy. Happy birthday!🎂🥳🎉🎈🎁",
        type:"video",
        post:"https://videos.pexels.com/video-files/7150226/7150226-uhd_2560_1440_30fps.mp4"
    },
    {
        id:"akhilesh",
        name:"Akhilesh Kumar",
                more:<FiMoreHorizontal />,
                  time:"2 hrs",
        icon:<FaUserFriends />,
        photo:"https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?cs=srgb&dl=pexels-amirali-beigi-231365-792326.jpg&fm=jpg",
        label:"आपको जन्मदिवस की शुभकामनाएं या अवतरण दिवस की हार्दिक शुभकामनायें , भगवान आपको सुख समृद्धि, धन दौलत और अच्छा स्वस्थ्य दे , यही कामना हम आपके जन्मदिन पर करते है।🎂🥳🎉🎈🎁",
        type:"image",
        post:"https://bestanimations.com/media/birthday/453807402black-calligraphy-happy-birthday-fireworks-wishes-animated-gif.gif.pagespeed.ce.MFzS25RD7k.gif"
    },
    {
        id:"vikram",
        name:"Vikram Kumar",
                more:<FiMoreHorizontal />,
                  time:"2 hrs",
        icon:<FaUserFriends />,
        photo:"https://cutedp.org/wp-content/uploads/2024/07/love-dp-pic-35.jpg",
        label:"आज ही के दिन, एक चाँद उतर के आया है, ऊपर वाले ने बड़ी फुर्सत से, मेरे प्यार को बनाया है। Happy Birthday Dear Love!🎂🥳🎉🎈🎁",
        type:"image",
        post:"https://www.wordsjustforyou.com/wp-content/uploads/2023/08/Cute-Cat-Happy-Birthday-Gif-77701130823.gif"
    },
   
   
    {
        id:"priya",
        name:"Priya Singh",
                more:<FiMoreHorizontal />,
                  time:"2 hrs",
        icon:<FaUserFriends />,
        photo:"https://cdn4.sharechat.com/beautifulgirlprofilepicture_2fd82a95_1601311911497_cmprsd_40.jpg?tenant=sc&referrer=pwa-sharechat-service&f=rsd_40.jpg",
        label:"Sending you smiles for every moment of your special day…Have a wonderful time and a very happy birthday!🎂🥳🎉🎈🎁",
        type:"image",
        post:"https://marketplace.canva.com/EAFHdWdPZPs/1/0/1600w/canva-modern-happy-birthday-message-card-with-photo-red-and-black-j6Tuk8wZDoE.jpg"
    },
]
const BirthdayCard =()=>{
    return (
        <div className="main-detail">
        {birth.map(el=>(
                el.type === "image" ?(
                <div key={el.username} className="post-detail">
                    <div className="main-detail-post" >
                        <div className="post-head">
                    <img src={el.photo} alt="post" className="userimg"/>
                    <div className="main-detail-post-info">
                    <div className="user-head"> <p>{el.name}</p> 
                        <span className="p_tag">{el.time} </span>
                        <span className="p_tag1">{el.icon}</span></div>
                 <div><h4 className="more-icon">{el.more}</h4></div>
                </div></div>
                <div className="post-img">
                    <span>{el.label}</span>
                    <img src={el.post} alt="post" />
                </div>
                </div></div>
            ):el.type==="video" ?(
                <div key={el.name} className="post-detail">
                <div className="main-detail-post" >
                    <div className="post-head">
                <img src={el.photo} alt="post" className="userimg"/>
                <div className="main-detail-post-info">
                <div className="user-head"> <p>{el.name}</p> 
                        <span className="p_tag">{el.time} </span>
                        <span className="p_tag1">{el.icon}</span></div>
             <div><h4 className="more-icon">{el.more}</h4></div>
            </div></div>
            <div className="post-img">
                <span>{el.label}</span> <br/>
                <video width="350" height="" controls autoPlay loops muted>
            <source src={el.post} type="video/mp4" />
          </video>
            </div>
            </div></div>
            ):null
        ))}

    </div>


    )
}
export default BirthdayCard;