import React, { useState } from "react";
import ProfileOption from "./ProfileOption";
import PasswordField from "./PasswordField";


function MyInfo() {
  const [isEdit, setIsEdit] = useState(false);
  
  console.log(isEdit)

  return (
    <div className="profile">
      <ProfileOption />
      <div className="profile-content user-profile">
        <h2>User info</h2>
        <div className="profile-content-item">
          <span className="title">Name</span>
          <span className="subtitle">Koh Koh</span>
        </div>
        <div className="profile-content-item">
          <span className="title">Email</span>
          <span className="subtitle">kohcuto@gmail.com</span>
        </div>
        <div className="profile-content-item">
          <span className="title">Password</span>
          {isEdit ? (
            <form action="">
              <PasswordField
                inputName="oldPwd"
                placeholder="Type old password..."
              />
              <PasswordField
                inputName="newPwd"
                placeholder="Type new password..."
              />
              <div className="form-action">
                <button
                  className="update-pwd-btn"
                  onClick={() => setIsEdit(false)}
                >
                  Change password
                </button>
                <button
                  className="cancel-change-pwd"
                  onClick={() => setIsEdit(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="pwd-contain">
              <span className="subtitle">***********</span>
              <button
                className="update-pwd-btn"
                onClick={() => setIsEdit(true)}
              >
                Edit Password
              </button>
            </div>
          )}
        </div>
        <div className="profile-content-item">
          <span className="title">Phone number</span>
          <span className="subtitle">123456789</span>
        </div>
      </div>
    </div>
  );
}

export default MyInfo;
