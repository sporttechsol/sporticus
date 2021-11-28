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
  description,
  instUrl,
  date,
  address,
  isTutorProfileOpened,
  goBack,
  openTutorProfile
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
        <img src="https://www.shareicon.net/data/512x512/2015/09/29/648454_arrows_512x512.png" />
        <p>Go to the menu</p>
      </div>
      {isTutorProfileOpened ? (
        <TutorProfile 
        imgUrl={imgUrl}
        instUrl={instUrl}
        traineeAmount={assignedNumber + 10}
        tutor={tutor}
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
              <>
                <button className="leave_button" onClick={leaveTraining}>
                  I dont want
                </button>
              </>
            ) : (
              <>
                <button className="confirm_button" onClick={assignToTraining}>
                  I am in!
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
