/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import moment from "moment";

import TutorProfile from "../TutorProfile";

import "./index.css";

const Card = ({
  id,
  title,
  tutor,
  imgUrl,
  distance,
  tutorImg,
  tutorDescription,
  description,
  instUrl,
  date,
  address,
  isTutorProfileOpened,
  goBack,
  openTutorProfile,
}) => {
  const [assignedNumber, setAssignedNumber] = useState(13);
  const [isAssigned, setIsAssigned] = useState(false);
  const assignToTraining = () => {
    setIsAssigned(true);
    setAssignedNumber(assignedNumber + 1);
  };
  const leaveTraining = () => {
    setIsAssigned(false);
    setAssignedNumber(assignedNumber - 1);
  };
  return (
    <div className="card_container">
      <div className="arrow_back" onClick={goBack}>
        <img
          className="arrow_back__img"
          src="https://st2.depositphotos.com/4060975/8059/v/600/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"
          alt="img"
        />
        <div>Back to Workouts List</div>
      </div>
      {isTutorProfileOpened ? (
        <TutorProfile
          imgUrl={imgUrl}
          instUrl={instUrl}
          traineeAmount={assignedNumber + 10}
          tutor={tutor}
          tutorImg={tutorImg}
          tutorDescription={tutorDescription}
        />
      ) : (
        <div>
          <div className="userlogo_contaner">
            <img src={imgUrl} />
          </div>
          <div className="info_container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" />
            <p>
              <a onClick={openTutorProfile} target="_blank">
                Tutor's profile
              </a>
            </p>
          </div>
          <div className="info_container">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" />
            <p>
              <a href={instUrl} target="_blank">
                Tutor's instagram
              </a>
            </p>
          </div>
          <div className="info_container">
            <img src="https://www.pngrepo.com/png/69593/512/location-pin.png" />
            <p>{distance}km</p>
          </div>
          <div className="info_container">
            <p>{moment(date).format("MM/DD HH:MM")}</p>
          </div>
          <div className="info_container">
            <p>Already assigned: {assignedNumber}</p>
          </div>
          <div className="info_container">
            <p>{description}</p>
          </div>
          <div className="card_reaction">
            {isAssigned ? (
              <button
                className="leave_button card_reaction__button"
                onClick={leaveTraining}
              >
                I dont want
              </button>
            ) : (
              <button
                className="confirm_button card_reaction__button"
                onClick={assignToTraining}
              >
                I am in!
                <svg
                  className="confirm_button__icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8 15L3 10L4.4 8.6L8 12.2L15.6 4.6L17 6L8 15Z"
                    fill="white"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
