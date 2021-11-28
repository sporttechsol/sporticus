import {useState, useEffect} from 'react';

import WORKOUTS_LIST from './workoutsListMock';
import WorkoutItem from '../WorkoutItem';
import Header from '../Header';
import TrainingCard from '../TrainingCard';
import {defaultAddress, defaultSearchDistance, defaultLatitude, defaultLongitude} from '../../mocks/defaultPreferences';
import {getDistanceFromCoords} from '../../helpers/getDistanceFromCoords';

import './index.css';

const WorkoutsList = () => {
  const [address, setAddress] = useState(defaultAddress);
  const [latitude, setLatitude] = useState(defaultLatitude);
  const [longitude, setLongitude] = useState(defaultLongitude);
  const [searchDistance, setSearchDistance] = useState(defaultSearchDistance);
  const [searchString, setSearchString] = useState('');
  const [currentCard, setCurrentCard] = useState(null);
  const [isTutorProfileOpened, setIsTutorProfileOpened] = useState(false);
  
  const openTutorProfile = () => { setIsTutorProfileOpened(!isTutorProfileOpened); };
  const distance = (lat1, lon1, lat2, lon2) => Math.round(getDistanceFromCoords(lat1, lon1, lat2, lon2) * 10) / 10;
  const enrichWorkouts = (originalList) => [...originalList].map((w) => ({
    ...w,
    distance: distance(w.latitude, w.longitude, latitude, longitude),
  })).sort((a, b) => a.distance > b.distance);

  const [workoutList, setWorkoutList] = useState(enrichWorkouts(WORKOUTS_LIST));

  useEffect(() => {
    setWorkoutList(workoutList.filter((w) => w.distance < searchDistance));
  }, [workoutList, searchDistance])

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
            {workoutList.map((item) => (
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
