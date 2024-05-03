import profile from "../assets/styles/views/Profile.module.css";
import ProfileInfo from "../components/profile/ProfileInfo";

function Profile() {
  return (
    <div className={profile.profile}>
      <ProfileInfo />
      <div>
        <button className="blue-btn">+ Subscribe</button>
        <button className="secondary-btn_black">Following</button>
        <button className="secondary-btn_black">Message</button>
        <button className="secondary-btn_black">...</button>
      </div>
    </div>
  );
}

export default Profile;
