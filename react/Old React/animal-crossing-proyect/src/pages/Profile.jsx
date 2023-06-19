import React, { useContext } from 'react';
import './Profile.css';
import { userContext } from '../context/userContext';

const Profile = () => {
  const { user } = useContext(userContext);

  return (
    <div className="ticket">
      <div className="frame">
        <div className="ticket-top">
          <div>
            <p className="subline">BOARDING PASS</p>
            <p className="headline-slim">ECONOMY CLASS</p>
          </div>
        </div>
        <div className="ticket-middle">
          <div className="column wide">
            <h1 id="dpartureName">REALITY</h1>
            <p className="subline">DEPARTURE</p>
          </div>

          <div className="column wide">
            <h1 id="islandName">OVON</h1>
            <div className="oneliner">
              <p className="subline">DESTINATION</p>
              <p id="counter" className="counter"></p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="column-small">
            <p className="category">Name of passenger</p>
            <p id="userName">{user}</p>
          </div>
          <div className="column-small">
            <p className="category">Date</p>
            <p id="date">20 MAR</p>
          </div>
          <div className="column-small">
            <p className="category">Time</p>
            <p id="time">8:00 AM</p>
          </div>
          <div className="bg-image"></div>

          <div className="column-small">
            <p className="category">Airline</p>
            <p>DODO AIRLINES</p>
          </div>
          <div className="column-small">
            <p className="category">Flight</p>
            <p>ACNH</p>
          </div>
          <div className="column-small">
            <p className="category">Terminal</p>
            <p>3</p>
          </div>
          <div className="column-small">
            <p className="category">Gate</p>
            <p>20</p>
          </div>
          <div className="column-small">
            <p className="category">Seat</p>
            <p>20N</p>
          </div>
        </div>
        <div className="ticket-bottom">
          <div className="logo">
            <img src="../../public/dodoairlines.png" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
