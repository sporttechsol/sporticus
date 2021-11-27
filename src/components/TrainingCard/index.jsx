import './index.css';

const Card = ({id, title, tutor, imgUrl, distance, description, instUrl, address, goBack}) => {
  return (
    <div className='card_container'>
      <div className='arrow_back' onClick={goBack}>
        <img src='https://www.shareicon.net/data/512x512/2015/09/29/648454_arrows_512x512.png' />
        <p>Go to the menu</p>
      </div>
      <div className='userlogo_contaner'>
        <img src={imgUrl} />
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
        <p>{description}</p>
      </div>
      <div className='card_reaction'>
        <p>I am in!</p>
        <img src='https://www.clipartmax.com/png/middle/358-3583360_e-3-hearts-hearts-like-icon-instagram-heart-icon-svg.png'></img>
      </div>
    </div>
  );
};

export default Card;
