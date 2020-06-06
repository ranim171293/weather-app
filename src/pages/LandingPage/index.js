import React from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SearchBox from '../../components/SearchBox';
import Graph from '../../components/Graph';
import Sun from '../../images/sun.svg';
import Rain from '../../images/rain.svg';
import Clouds from '../../images/cloudy.svg';
import DayCard from '../../components/DayCard';
import moment from 'moment';
// import {weatherForecast} from '../../api/index';
import LandingPageComponent from './style';

class LandingPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      daily:[],
      current: {},
      hourly: []
    }
  }
  plotGraph = (hourly) => {
    let plotArr = [];
    if(hourly.length !== 0){
    for(let i=0; i < 6; i++){
      plotArr.push({
        x: parseInt(moment(hourly[i].dt*1000).format('LT')),
        y: hourly[i].temp
      })
    }
    console.log(plotArr);
    return plotArr;
  }
    
  }

  showImage = (imgSrc) => {
    switch (imgSrc) {
      case 'Clear':
        return <img className="currentImage" src={Sun} alt=""></img>;
      case 'Rain':
        return <img className="currentImage" src={Rain} alt=""></img>;
      case 'Clouds':
        return <img className="currentImage" src={Clouds} alt=""></img>;
      default:
        break;
    }
  }
  
  
  componentWillMount() {
    axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDt4KD7VCQ32SqCOjRq2M5_p0C_cZ9WqZ8`)
    .then (res => {
      console.log(res);
    });
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&dt=1586468027& &units=metric&appid=251c2117779c86bee5f38ece3c7781b9`)
      .then(res => {
        const forecast = res && res.data;
        this.setState({
          current: forecast && forecast.current,
          daily: (forecast && forecast.daily) || [],
          hourly: (forecast && forecast.hourly) || []
        }) 
        console.log(res);
      })
  }
  render () {
    const {current, daily, hourly} = this.state;
    return (
      <LandingPageComponent>
        <Grid className="conatiner" container>
          <Grid item xs={12} lg={8} md={10}>
            <SearchBox />
            <Grid className="dailyTemp">{daily.map((ele,idx) => (<DayCard key={idx} imgSrc={ele.weather[0].main} weatherType={ele.weather[0].main} day={moment(ele.dt*1000).format('ddd')} maxTemp={Math.floor(ele.temp.max)} minTemp={Math.floor(ele.temp.min)} />))}</Grid>
            <Grid>
              <Paper elevation={3}>
                <Grid className="todayTemp">
                  <span className="temp">{current && current.temp} <sup>o</sup> C</span>
                  <span>{current && current.weather && current.weather[0].main !== null ? this.showImage(current && current.weather && current.weather[0].main) : null}</span>
                </Grid>
                <Graph hourlyData={hourly === [] ? null : this.plotGraph(hourly)} />
                <Grid className="todayTemp">
                  <div className="humidInfo"><div className="preText">Pressure</div>
                  <div className="valText">{current && current.pressure} hpa</div></div>
                  <div className="humidInfo"><div className="preText">Humidity</div
                  ><div className="valText">{current && current.humidity} %</div></div>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </LandingPageComponent>
    )
  }
}

export default LandingPage;