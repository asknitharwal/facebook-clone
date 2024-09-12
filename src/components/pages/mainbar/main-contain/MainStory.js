const storyData = [
  {
    username: "Add your story",
    userprofilepic:"https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/394193721_2754504514705525_5478513650949897062_n.jpg?ccb=11-4&oh=01_Q5AaIBGZpdSK8nIkYE1fXSNJrq8eyxqFLHTlXJMr4N2cGCWI&oe=66EBABAE&_nc_sid=5e03e0&_nc_cat=102",
    storytype: "image",
    storyurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7iFts_aPEkkYJE5JKYMqQAQTrfSVzT28rSg&s",
  },
  {
    username: "Manoj",
    userprofilepic:"https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/414725898_450724871107729_7800877498851362272_n.jpg?ccb=11-4&oh=01_Q5AaIEMAKxFCaIBlujOMti9L6V3Yqg4qXuHxP7oelEGcHlVw&oe=66E423E9&_nc_sid=5e03e0&_nc_cat=105",
    storytype: "video",
    storyurl: "https://cdn.pixabay.com/video/2024/03/31/206294_large.mp4",
  },
  {
    username: "Kamlesh",
    userprofilepic:"https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
    storytype: "image",
    storyurl: "https://e1.pxfuel.com/desktop-wallpaper/938/413/desktop-wallpaper-50-romantic-love-couple-with-quotes-for-whatsapp-dp-profile-pic-stylish-couple.jpg",
  },
  {
    username: "Akhilesh",
    userprofilepic:"https://cdn4.sharechat.com/compressed_gm_40_img_808541_2a5de6d_1703412806820_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=820_sc.jpg",
    storytype: "video",
    storyurl:"https://videos.pexels.com/video-files/5896379/5896379-uhd_1440_2560_24fps.mp4",
  },
  {
    username: "Vikram",
    userprofilepic:"https://sharedp.com/wp-content/uploads/2024/05/whatsapp-dp-for-boys-love-1024x1024.jpg",
    storytype: "image",
    storyurl:"https://cdn4.sharechat.com/img_851848_365362ae_1682882849265_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=265_sc.jpg",
  },
];
const MainStory = () => (
  <div className="story-section">
    {storyData.map((ele) => {
      return ele.storytype === "image" ? (
        <div className="story-card" key={ele.username}>
          <img src={ele.storyurl} alt="name" className="story-img" />
          <p className="span-name">{ele.username}</p>
          <img src={ele.userprofilepic} alt="profle" className="profile-pic" />
        </div>
      ) : ele.storytype === "video" ? (
        <div className="story-card" key={ele.username}>
          <video width="120" height="180" autoPlay muted loop className="story-video">
            <source src={ele.storyurl} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
          <p className="span-name">{ele.username}</p>
          <img src={ele.userprofilepic} alt="profle" className="profile-pic" />
        </div>
      ) : null;
    })}
  </div>
);

export default MainStory;
