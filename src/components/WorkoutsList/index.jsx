import {useState} from 'react';

import workoutsList from './workoutsListMock';
import WorkoutItem from '../WorkoutItem';
import DistanceSlider from '../DistanceSlider';
import TrainingCard from '../TrainingCard';

import './index.css';

const WorkoutsList = () => {
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
          <div className='workout-list-wrapper'>
            {workoutsList.map((item) => (
              <WorkoutItem key={item.id} {...item} setCurrentCard={setCurrentCard}/>
            ))}
          </div>
          <DistanceSlider />
        </div>
      )}
    </>
  );
};

export default WorkoutsList;
