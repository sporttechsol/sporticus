import {useState} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './index.css';

const Header = ({address, setAddress, searchDistance, setSearchDistance, searchString, setSearchString}) => {
  const [isOpen, setIsOpen] = useState(false);

  const headerToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`header${isOpen ? ` header-open` : ``}`}>
      {isOpen ? (
        <>
          <div className='header__input-container'>
            <input
              className='header__address-input'
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <div className='header__input-container'>
            <input
              className='header__search-data-input'
              value={searchString}
              onChange={(e) => {
                setSearchString(e.target.value);
              }}
            />
          </div>
          <div className='header__slider-container  header__input-container'>
            <Slider
              className='header__slider-input'
              value={searchDistance}
              onChange={(value) => {
                setSearchDistance(value);
              }}
              min={0}
              max={10}
            />
            <div className='header__slider-value'>{searchDistance}km</div>
          </div>
        </>
      ) : (
        <>
          <div className='header__address'>
            <b>Address:</b> {address}
          </div>
          <div className='header__search-data'>
            <b>Search By: </b>
            {searchString || 'not selected'}
          </div>
          <div className='header__distance'>
            <b>Search Distance: </b>
            {searchDistance}km
          </div>
        </>
      )}
      <div className='header__toggle-button' onClick={headerToggle}>
        <img
          className='header__toggle-button-icon'
          src='https://st2.depositphotos.com/4060975/8059/v/600/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg'
          alt='img'
        />
      </div>
    </div>
  );
};

export default Header;
