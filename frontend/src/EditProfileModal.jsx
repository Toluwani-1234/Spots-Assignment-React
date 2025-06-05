// EditProfileModal.jsx
import React from "react";

export default function EditProfileModal({
  userData,
  setUserData,
  closeModal,
}) {
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div className="editModal">
      <div className="editModal-content">
        <span
          className="closeEditModal"
          id="closeEditProfile"
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "10px",
            right: "15px",
            cursor: "pointer",
            fontSize: "24px",
          }}
        >
          &times;
        </span>

        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={userData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Field:
            <input
              name="field"
              type="text"
              value={userData.field}
              onChange={handleChange}
            />
          </label>
          <label>
            Change Avatar:
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const imageUrl = URL.createObjectURL(file);
                  setUserData({ ...userData, avatar: imageUrl });
                }
              }}
            />
          </label>

          <button className="save-btn" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
