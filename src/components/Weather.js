import React from 'react';

const Weather = props => (
    <div className="weather__info">
        {props.city &&  <p className="weather__key"> City: <span className="weather__value"> {props.city}</span></p>}
        {props.country && <p className="weather__key"> Country:<span className="weather__value">  {props.country}</span> </p> }
        {props.temp && <p className="weather__key"> Temperature:<span className="weather__value">  {props.temp}</span></p> }
        {props.humidity && <p className="weather__key">Humidity:<span className="weather__value">  {props.humidity}</span></p> }
        {props.conditions && <p className="weather__key"> Conditions:<span className="weather__value">  {props.conditions}</span></p>}
        {props.error && <p className="weather__key"> <span className="weather__error"> {props.error}</span></p>}
    </div>
)
export default Weather