/* eslint-disable jsx-a11y/alt-text */
import {useState} from 'react';
import moment from 'moment';

import TutorProfile from '../TutorProfile';

import './index.css';

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
    <div className='card_container'>
      <div className='arrow_back' onClick={goBack}>
        <img
          className='arrow_back__img'
          src='https://st2.depositphotos.com/4060975/8059/v/600/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg'
          alt='img'
        />
        <div>Back to {isTutorProfileOpened ? 'Workout Details' : 'Workouts List'}</div>
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
          <div className='userlogo_contaner'>
            <img src={imgUrl} />
          </div>
          <div className='info_container'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png' />
            <p>
              <a onClick={openTutorProfile} target='_blank'>
                Tutor's profile
              </a>
            </p>
          </div>
          <div className='info_container'>
            <img src='https://cdn-icons-png.flaticon.com/512/174/174855.png' />
            <p>
              <a href={instUrl} target='_blank'>
                Tutor's instagram
              </a>
            </p>
          </div>
          <div className='info_container'>
            <img src='https://www.pngrepo.com/png/69593/512/location-pin.png' />
            <p>{distance}km</p>
          </div>
          <div className='info_container'>
            <p>{moment(date).format('MM/DD HH:MM')}</p>
          </div>
          <div className='info_container'>
            <p>Already assigned: {assignedNumber}</p>
          </div>
          <div className='info_container'>
            <p>{description}</p>
          </div>
          <div className='card_reaction'>
            {isAssigned ? (
              <button className='leave_button card_reaction__button' onClick={leaveTraining}>
                I dont want
                <svg
                  className='confirm_button__icon'
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM15 11H5V9H15V11Z'
                    fill='white'
                  />
                </svg>
              </button>
            ) : (
              <button className='confirm_button card_reaction__button' onClick={assignToTraining}>
                I am in!
                <svg
                  className='confirm_button__icon'
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8 15L3 10L4.4 8.6L8 12.2L15.6 4.6L17 6L8 15Z'
                    fill='white'
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
