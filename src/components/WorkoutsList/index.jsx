import {useState} from 'react';

import workoutsList from './workoutsListMock';
import WorkoutItem from '../WorkoutItem';
import Header from '../Header';
import TrainingCard from '../TrainingCard';
import {defaultAddress, defaultSearchDistance, defaultLatitude, defaultLongitude} from '../../mocks/defaultPreferences';

import './index.css';

const WorkoutsList = () => {
  const [address, setAddress] = useState(defaultAddress);
  const [latitude, setLatitude] = useState(defaultLatitude);
  const [longitude, setLongitude] = useState(defaultLongitude);
  const [searchDistance, setSearchDistance] = useState(defaultSearchDistance);
  const [searchString, setSearchString] = useState('');
  const [currentCard, setCurrentCard] = useState(null);
  const [isTutorProfileOpened, setIsTutorProfileOpened] = useState(false);
  const openTutorProfile = () => {
    setIsTutorProfileOpened(!isTutorProfileOpened);
  };
  return (
    <>
      {currentCard ? (
        <TrainingCard
          {...currentCard}
          isTutorProfileOpened={isTutorProfileOpened}
          openTutorProfile={openTutorProfile}
          goBack={() => {
            if (isTutorProfileOpened) {
              openTutorProfile();
            } else {
              setCurrentCard(null);
            }
          }}
        />
      ) : (
        <div className='workouts-list'>
          <Header
            address={address}
            setAddress={setAddress}
            searchDistance={searchDistance}
            setSearchDistance={setSearchDistance}
            searchString={searchString}
            setSearchString={setSearchString}
          />
          <div className='workout-list-wrapper'>
            {workoutsList.map((item) => (
              <WorkoutItem
                key={item.id}
                {...item}
                setCurrentCard={setCurrentCard}
                userLatitude={latitude}
                userLongitude={longitude}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default WorkoutsList;
