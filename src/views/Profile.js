import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { Tab } from "@mui/base/Tab";

import profile from "../assets/styles/views/Profile.module.css";
import ProfileInfo from "../components/profile/ProfileInfo";

import etc from "../assets/images/svg/etc.svg";
import message from "../assets/images/svg/message.svg";
import plus from "../assets/images/svg/plus.svg";
import users from "../assets/images/svg/users.svg";

function Profile() {
  return (
    <div className={profile.profile}>
      <ProfileInfo />
      <div className={profile.button_container}>
        <button className={`blue-btn btn ${profile.mw_140}`}>
          <img src={plus} alt="icon" />
          Subscribe
        </button>
        <button className={`secondary-btn-black btn ${profile.mw_140}`}>
          <img src={users} alt="icon" />
          Following
        </button>
        <button className={`secondary-btn-black btn ${profile.mw_140}`}>
          <img src={message} alt="icon" />
          Message
        </button>
        <button className={`secondary-btn-black btn ${profile.mw_46}`}>
          <img src={etc} alt="icon" />
        </button>
      </div>
      <Tabs defaultValue={1}>
        <TabsList className={profile.tabslist}>
          <Tab className={profile.tab} value={1}>All</Tab>
          <Tab className={profile.tab} value={2}>Collections</Tab>
        </TabsList>
        <TabPanel value={1}></TabPanel>
        <TabPanel value={2}></TabPanel>
      </Tabs>
    </div>
  );
}

export default Profile;
