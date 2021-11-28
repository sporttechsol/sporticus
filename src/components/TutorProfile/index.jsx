const TutorProfile = ({ imgUrl, tutor, instUrl, traineeAmount }) => {
  return (
    <div className="tutor-profile_container">
      <p>{tutor}</p>
      <div className="userlogo_contaner">
        <img src={imgUrl} />
      </div>
      <div className="info_container">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" />
            <p>
              <a href={instUrl} target="_blank">
                Tutor's instagram
              </a>
            </p>
          </div>
      <div className="userlogo_contaner">
        <p>
          Something about me: Isn't me, have a seed Let me clip dirty wings Let
          me take a ride, cut yourself Want some help, please myself Got some
          rope, haven't told Promise you, haven't true Let me take a ride, cut
          yourself Want some help, please myself
        </p>
      </div>
      <div className="info_container">
            <img src="https://svgsilh.com/svg/1085672.svg" />
            <p>
              <a href={instUrl} target="_blank">
                Tutor's trainings
              </a>
            </p>
          </div>
      <div className="info_container">
            <img src="https://www.svgrepo.com/show/64293/users.svg" />
              <p>
                Tutor's trainee amount: {traineeAmount}
              </p>
          </div>
    </div>
  );
};

export default TutorProfile;
