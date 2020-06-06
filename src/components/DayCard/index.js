import React from 'react'
import Grid from '@material-ui/core/Grid';
import Sun from '../../images/sun.svg';
import Rain from '../../images/rain.svg';
import Clouds from '../../images/cloudy.svg';
// import Paper from '@material-ui/core/Paper';
import DayCardComponent from './style';
class DayCard extends React.PureComponent {

  callImage = (imgSrc) => {
    switch (imgSrc) {
      case 'Clear':
        return <img className="weatherImg" src={Sun} alt=""></img>;
      case 'Rain':
        return <img className="weatherImg" src={Rain} alt=""></img>;
      case 'Clouds':
        return <img className="weatherImg" src={Clouds} alt=""></img>;
      default:
        break;
    }
  }
  

  render() {
    const {day, maxTemp, minTemp, weatherType, imgSrc} = this.props;
    return (
    <DayCardComponent>
      <Grid>
        <div className="day">{day}</div>
        <div className="dayTemp"><span>{maxTemp}</span><sup>o</sup> <span style={{color: '#6b6b76'}}>{minTemp}</span><sup style={{color: '#6b6b76'}}>o</sup></div>
        {imgSrc ? this.callImage(imgSrc): null}
        <div className="weatherType">{weatherType}</div>
      </Grid>
    </DayCardComponent>
    )
  }

}

export default DayCard;