import { GoDotFill } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import BirthdayCard from "./BirthdayCard";

const contact = [
  {
    id: "ashok",
    status:"online",
    name: "Ashok Kumar",
    image: "https://sharedp.com/wp-content/uploads/2024/05/whatsapp-dp-for-boys-love-1024x1024.jpg",
  },
  {
    id: "kamlesh",
    name: "Kamlesh Kumar",
    image: "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
    status: "online",
    
  },
  {
    id: "akhilesh",
    name: "Akhilesh Kumar",
    status: "offline",
    image: "https://e1.pxfuel.com/desktop-wallpaper/938/413/desktop-wallpaper-50-romantic-love-couple-with-quotes-for-whatsapp-dp-profile-pic-stylish-couple.jpg",
  },
  {
    id: "vikram",
    name: "Vikram Singh",
    status: "offline",
    image: "https://cdn4.sharechat.com/img_851848_365362ae_1682882849265_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=265_sc.jpg"
  },
  {
    id: "manoj",
    name: "Manoj Kumar",
    status: "online",
    image: "https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/414725898_450724871107729_7800877498851362272_n.jpg?ccb=11-4&oh=01_Q5AaIEMAKxFCaIBlujOMti9L6V3Yqg4qXuHxP7oelEGcHlVw&oe=66E423E9&_nc_sid=5e03e0&_nc_cat=105",
  },
  {
    id: "Mahesh",
    name: "Mahesh Kumar",
    status: "online",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7iFts_aPEkkYJE5JKYMqQAQTrfSVzT28rSg&s",
  },
  {
    id: "sitaram",
    name: "Sitaram",
    status: "offline",
    image: "https://cdn4.sharechat.com/img_851848_365362ae_1682882849265_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=265_sc.jpg",
  },
  {
    id: "rahul",
    name: "Rahul Kumar",
    status: "offline",
    image: "https://cdn4.sharechat.com/compressed_gm_40_img_808541_2a5de6d_1703412806820_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=820_sc.jpg",
  },
  {
    id: "suresh",
    name: "Suresh Kumar",
    status: "online",
    image: "https://sharedp.com/wp-content/uploads/2024/05/whatsapp-dp-for-boys-love-1024x1024.jpg",
  },
  {
    id: "manish",
    name: "Manish Kumar",
    status: "offline",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7iFts_aPEkkYJE5JKYMqQAQTrfSVzT28rSg&s",
  },
  {
    id: "ayush",
    status:"online",
    name: "Aayush Kumar",
    image: "https://sharedp.com/wp-content/uploads/2024/05/whatsapp-dp-for-boys-love-1024x1024.jpg",
  },
  {
    id: "nilam",
    status:"online",
    name: "Neelam",
    image: "https://mrwallpaper.com/images/thumbnail/cute-brunette-profile-picture-rawnnhmrk168c9zk.webp",
  },
  {
    id: "dipika",
    status:"offline",
    name: "Deepika",
    image: "https://cdn4.sharechat.com/compressed_gm_40_img_724387_d110bd8_1698681721588_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=588_sc.jpg",
  },
  {
    id: "prachi",
    status:"online",
    name: "Prachi",
    image: "https://cdn4.sharechat.com/img_1599842794_194217_9001cdd_1663260840440_sc.jpg?tenant=sc&referrer=feed-service&f=440_sc.jpg",
  },
  fried={
    
  }
];
const MainContact = () => {
  return (
    <div className="contact-section">
      <div className="fd-title">
        <h5>Friend Request</h5>
        <p>See all</p>
      </div>
      <div className="fd-request">
        <div className="pro-div">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFUx-9c2FS0Flj2pcoApdrBnNW17cXl51Fw&s"
            alt="fd"
            className="user-img"
          />
          <div className="fd-name">
            <div className="fd-head">
              <h5>Mahendra Singh Dhoni</h5>
              <p>
                <img
                  src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                  alt="ll"
                  className="mut-img"
                />
                <img src="https://sharedp.com/wp-content/uploads/2024/05/whatsapp-dp-for-boys-love-1024x1024.jpg" className="mut-img1" alt="kk"/> 5 mutual friends </p>
            </div>
            <p> 2w<GoDotFill className="p-icon" /></p>
          </div>
        </div>
        <div className="btn-div">
          <button type="submit" className="conf-btn">
            Confirm
          </button>
          <button type="submit" className="can-btn">
            Delete
          </button>
        </div>
      </div>
      <hr />
      <div className="birth-div">
        <h5>Birthdays</h5>
        <div className="birth-detail">
          <button class="btn btn-light d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/024/704/175/small_2x/3d-illustration-icon-of-gift-box-with-heart-for-ui-ux-web-mobile-app-social-media-ads-png.png"
            alt="jj"
          />
<p><b>Kamlesh Kumar</b> and <b>Harendra Singh</b> have birthdays today.
          </p></button>
        </div>
      </div>
      <div class="collapse" id="collapseExample">
  <div class="card card-body">
   <BirthdayCard/>
  </div>
</div>  
      <hr />
 
      <div className="contact-head">
        <h5>Contacts</h5>
        <div className="fd-icon">
          <IoIosSearch />
          <BsThreeDots />
        </div>
      </div>
      <div className="contact-div">
        {contact.map((el) => (
             el.status==="online" ?(
          <li key={el.name}>
            <img src={el.image} alt="jjj" />
              <FaCircle className="status" /> 
            <p>{el.name}</p>               
          </li>
             ):el.status==="offline"? (
                <li key={el.name}>
                <img src={el.image} alt="jjj" />
                <p>{el.name}</p> </li>
             ):null
            )
        )
    }
      </div>
  
      </div>
             
  );
};
export default MainContact;
