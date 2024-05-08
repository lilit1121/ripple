import React, { useState } from "react";
import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { Tab } from "@mui/base/Tab";

import Modal from "../components/base/Modal";
import ProfileInfo from "../components/profile/ProfileInfo";
import Card from "../components/profile/ProductCard";
import Filters from "../components/profile/Filters";

import profile from "../assets/styles/views/Profile.module.scss";
import "../assets/styles/components/modals/MessageModal.scss";
import "../assets/styles/components/modals/FollowingModal.scss";

import etc from "../assets/images/svg/etc.svg";
import message from "../assets/images/svg/message.svg";
import plus from "../assets/images/svg/plus.svg";
import users from "../assets/images/svg/users.svg";
import user from "../assets/images/example/Img.png";
import bg from "../assets/images/example/bg.png";
import img from "../assets/images/example/Img.png";

function Button({ onClick, className, src, alt, label }) {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      <img src={src} alt={alt} />
      {label}
    </button>
  );
}

function Profile() {
  const [numCards, setNumCards] = useState(4);
  const [open, setOpen] = useState(false);
  const [openFollowing, setOpenFollowing] = useState(false);

  const generateArray = (length) => Array.from({ length }, (_, i) => i + 1);

  const handleModal = (state, setState) => () => {
    setState(state);
  };

  const renderCards = (type) => (
    <div className={profile.products}>
      {generateArray(numCards).map((index) => (
        <Card key={`${type}-${index}`} type={type} />
      ))}
    </div>
  );

  return (
    <div className={profile.profile}>
      <ProfileInfo />
      <div className={`flex-wrap ${profile.button_container}`}>
        <Button
          className={`blue-btn ${profile.mw_140}`}
          src={plus}
          alt="icon"
          label="Subscribe"
        />
        <Button
          onClick={handleModal(true, setOpenFollowing)}
          className={`secondary-btn-black ${profile.mw_140}`}
          src={users}
          alt="icon"
          label="Following"
        />
        <Button
          onClick={handleModal(true, setOpen)}
          className={`secondary-btn-black ${profile.mw_140}`}
          src={message}
          alt="icon"
          label="Message"
        />
        <Button
          className={`secondary-btn-black ${profile.mw_46}`}
          src={etc}
          alt="icon"
        />
      </div>
      <Tabs defaultValue={1}>
        <TabsList className={profile.tabslist}>
          <Tab className={profile.tab} value={1}>
            All
          </Tab>
          <Tab className={profile.tab} value={2}>
            Collections
          </Tab>
        </TabsList>
        <TabPanel value={1}>
          <Filters />
          {renderCards()}
          {renderCards("collection")}
        </TabPanel>
        <TabPanel value={2}>
          <Filters />
          {renderCards("collection")}
        </TabPanel>
      </Tabs>
      <button
        className="btn lightBlue-btn"
        onClick={() => setNumCards(numCards + 4)}
      >
        Load More
      </button>
      <Modal
        title="Message"
        description="What do you want to write to this user?"
        handleOpen={open}
        handleClose={handleModal(false, setOpen)}
      >
        <div className="message-modal">
          <div>
            <div>
              <img src={user} alt="userimage" />
            </div>
            <p>Election Season</p>
          </div>
          <textarea placeholder="Start typing …"></textarea>
          <button className="btn blue-btn">Send Message</button>
        </div>
      </Modal>
      <Modal
        handleOpen={openFollowing}
        handleClose={handleModal(false, setOpenFollowing)}
      >
        <div className="following-modal">
          <h6>Following</h6>
          <div>
            {generateArray(numCards).map((index) => (
              <div key={`following-${index}`} className="following-block">
                <div>
                  <div>
                    <img src={img} alt="user" />
                  </div>
                  <div className="following-user-info">
                    <div>
                      <h6>Taylor Swift</h6>
                      <p>Anime, cartoons, animation</p>
                    </div>
                    <div>
                      <button className="btn blue-btn">Follow</button>
                      <div>
                        <p>
                          15K
                          <span>Followers</span>
                        </p>
                        <p>
                          15K
                          <span>Following</span>
                        </p>
                        <p>
                          108
                          <span>Items</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {generateArray(numCards).map((index) => (
                    <div key={`bg-${index}`}>
                      <img src={bg} alt="bg" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Profile;
