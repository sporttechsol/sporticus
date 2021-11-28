import { useState, useEffect } from "react";
import { supabase, TABLE_DECISIONS } from "../helpers/supabase";
import { NO_OP } from "../helpers/utils";
import { useUser } from "./useUser";
import { useWorkouts } from "./useWorkouts";

export const useWorkoutDetailsForUser = ({ workoutId, coachId, refreshData = NO_OP }) => {
  const [coach, setCoach] = useState();
  const [workout, setWorkout] = useState();
  const [decision, setDecision] = useState(false);

  const f = useWorkouts({ refreshData });
  const u = useUser();

  const setDecisionToDb = async (userId, workoutId, decision) => {
    const { data: decisions, error } = await supabase
      .from(TABLE_DECISIONS)
      .insert([{ user_id: userId, workout_id: workoutId, decision }]);
    console.log(JSON.stringify(error ?? decisions, null, 2));

    const decisionReturned = decisions?.length ? decisions[0].decision : null;
    if (decisionReturned) setDecision(decisionReturned);

    return { decision: decisionReturned, error };
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    console.log("COACH_ID " + coachId);
    const { user, error } = await f.getCoach(coachId);
    if (error) console.log(error);
    if (user) setCoach(user);
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const { decision, error } = await f.getDecision(workoutId, u.id);
    if (error) console.log(error);
    if (decision) setDecision(decision);
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const { workout, error } = await f.getWorkout(workoutId);
    if (error) console.log(error);
    if (workout) setWorkout(workout);
  }, []);

  return {
    coach,
    decision,
    workout,
    setDecision: setDecisionToDb,
  };
};
