import { useState } from "react";
import EditProfileModal from "./EditProfileModal"; // ✅ import your modal
import avatar from "../public/avatar.png";
import logo from "../public/Logo.svg";
import group2 from "../public/Group 2.png";
import group26 from "../public/Group 26.png";
import union from "../public/Union.png";
import pexels1 from "../public/pexels-kassandre-pedro-8639743 1.png";
import pexels2 from "../public/pexels-kassandre-pedro-8639743 1-3.png";
import pexels3 from "../public/pexels-kassandre-pedro-8639743 1-4.png";
import pexels4 from "../public/pexels-kassandre-pedro-8639743 1-5.png";
import mask0 from "../public/Mask group.png";
import mask1 from "../public/Mask group (1).png";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    name: "Bessie Coleman",
    field: "Civil Aviator",
    avatar: avatar,
  });

  const [showModal, setShowModal] = useState(false); // Modal toggle

  return (
    <>
      {showModal && (
        <EditProfileModal
          userData={userData}
          setUserData={setUserData}
          closeModal={() => setShowModal(false)}
        />
      )}

      {/* Header */}
      <header className="site-logo">
        <img className="logo" src={logo} alt="Spots Logo" />
      </header>

      {/* Profile Section */}
      <section className="profile-header">
        <div className="avatar-section">
          <img
            className="avatar"
            id="userAvatar"
            src={userData.avatar}
            alt={userData.name}
          />
          <div className="avatar-description">
            <div className="avatar-children">
              <h3 className="avatar-name" id="userName">
                {userData.name}
              </h3>
              <span className="avatar-field" id="userField">
                {userData.field}
              </span>
            </div>
            <div className="edit-profile">
              <img className="small-pencil" src={group2} alt="Edit icon" />
              <button
                id="profileEditBtn"
                className="edit-btn"
                onClick={() => setShowModal(true)} // Open modal
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        <button className="button-large">
          <img className="btn-plus" src={group26} alt="" />
          <span className="btn-text">New Post</span>
        </button>
      </section>

      {/* Main Content */}
      <main className="site-content">
        <section className="gallery">
          {/* <!-- Row 1 --> */}
          <div className="Image-container">
            <figure>
              <img
                className="Images"
                data-name="Val Thorens"
                src={mask0}
                alt="Val Thorens"
              />
              <figcaption className="Name-heart">
                <p>Val Thorens</p>
                <img className="heart-icon" src={union} alt="Heart icon" />
              </figcaption>
            </figure>
          </div>
          <div className="Image-container">
            <figure>
              <img
                className="Images"
                data-name="Restaurant terrace"
                src={pexels1}
                alt="Restaurant terrace"
              />
              <figcaption className="Name-heart">
                <p>Restaurant terrace</p>
                <img className="heart-icon" src={union} alt="Heart icon" />
              </figcaption>
            </figure>
          </div>
          <div className="Image-container">
            <figure>
              <img
                className="Images"
                data-name="An outdoor cafe"
                src={mask1}
                alt="An outdoor cafe"
              />
              <figcaption className="Name-heart">
                <p>An outdoor cafe</p>
                <img className="heart-icon" src={union} alt="Heart icon" />
              </figcaption>
            </figure>
          </div>

          {/* <!-- Row 2 --> */}
          <div className="Image-container">
            <figure>
              <img
                className="Images"
                data-name="A long bridge over forest"
                src={pexels2}
                alt="A long bridge over forest"
              />
              <figcaption className="desc">
                <p>A very long bridge, over the forest…</p>
                <img className="heart-icon" src={union} alt="Heart icon" />
              </figcaption>
            </figure>
          </div>
          <div className="Image-container">
            <figure>
              <img
                className="Images"
                data-name="Tunnel with morning light"
                src={pexels3}
                alt="Tunnel with morning light"
              />
              <figcaption className="desc">
                <p>Tunnel with morning light</p>
                <img className="heart-icon" src={union} alt="Heart icon" />
              </figcaption>
            </figure>
          </div>
          <div className="Image-container">
            <figure>
              <img
                className="Images"
                data-name="Mountain house"
                src={pexels4}
                alt="Mountain house"
              />
              <figcaption className="desc">
                <p>Mountain house</p>
                <img className="heart-icon" src={union} alt="Heart icon" />
              </figcaption>
            </figure>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <p className="footertext"></p>
      </footer>
    </>
  );
}

export default App;
