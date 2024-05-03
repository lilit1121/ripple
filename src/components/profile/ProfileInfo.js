import profile from "../../assets/styles/views/Profile.module.css";
import bg from "../../assets/images/example/bg.png";
import image from "../../assets/images/example/Img.png";

function ProfileInfo() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className={profile.profile_background}
      >
        <div className={profile.profile_image}>
          <img src={image} alt="profile img" />
        </div>
      </div>
      <h1 className={profile.name_surname}>Ethereal Beauty</h1>
      <div className={profile.profile_info}>
        <p>96<span>followers</span></p>
        <p>28<span>following</span></p>
        <p>64<span>items</span></p>
      </div>
    </div>
  );
}

export default ProfileInfo;
