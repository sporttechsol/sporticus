export const useUser = () => DEFAULT_USER;
export const useCoach = () => DEFAULT_COACH;

export const DEFAULT_WORKOUT = {
  max_people: 10,
  date: "2021-11-29T05:11:03+00:00",
  latitude: 27.4829,
  longitude: 53.9365,
  coach_id: "f7a3658c-6f8f-437b-a799-ce3f00498b74",
  title: "Stretching",
  description: "We'll do stretching",
};

export const DEFAULT_COACH = {
  id: "f7a3658c-6f8f-437b-a799-ce3f00498b74",
  name: "Arnold",
  instagram_url: "https://www.instagram.com/schwarzenegger/",
  profile_url:
    "https://manofmany.com/wp-content/uploads/2019/03/Arnold-Schwarzeneggers-Diet-and-Workout-Plan.jpg",
  is_coach: true,
};

export const DEFAULT_USER = {
  id: "b5a1c9f0-69fa-4af5-96b8-ab80d04312ef",
  name: "Emily",
  is_coach: false,
};
