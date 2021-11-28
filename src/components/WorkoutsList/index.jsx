import { useEffect, useState } from "react";

import WorkoutItem from "../WorkoutItem";
import DistanceSlider from "../DistanceSlider";
import TrainingCard from "../TrainingCard";

import "./index.css";
import { useWorkouts } from "../../hooks/useWorkouts";

const WorkoutsList = () => {
  const [currentCard, setCurrentCard] = useState(null);
  const [isTutorProfileOpened, setIsTutorProfileOpened] = useState(false);
  const openTutorProfile = () => {
    setIsTutorProfileOpened(!isTutorProfileOpened);
  };
  const [workouts, setWorkouts] = useState([]);
  const db = useWorkouts();

  useEffect(() => {
    const resolveWorkouts = async () => {
      const { workouts } = await db.getAllWorkouts();
      if (workouts) setWorkouts(workouts);
    };
    resolveWorkouts();
  }, [db]);

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
        <div className="workouts-list">
          <div className="workout-list-wrapper">
            {workouts.map((item) => (
              <WorkoutItem key={item.id} {...item} setCurrentCard={setCurrentCard} />
            ))}
          </div>
          <DistanceSlider />
        </div>
      )}
    </>
  );
};

export default WorkoutsList;
