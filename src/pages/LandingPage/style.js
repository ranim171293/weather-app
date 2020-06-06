import styled from 'styled-components';

const LandingPageComponent = styled.div`
dispaly: flex;
width:100%;
flex-direction: column;
justify-content: center;
align-items: center;
.image{
  width: 60px;
}
.conatiner{
  dispaly: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px){
    padding: 0px 16px;
  }
  @media (max-width: 960px) and (min-width: 600px){
    padding: 0px 16px;
  }
}
.todayTemp {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 16px;
}
.currentImage {
  width: 50px;
}
.dailyTemp {
  display: flex;
  flex-direction: row;
  overflow: scroll;
  margin: 30px 0px;
  @media (max-width: 960px) and (min-width: 600px){
    text-align: center;
    justify-content: center;
  }
}
.temp {
  font-size: 40px;
  font-weight: 900;
  margin-right: 30px;
}
.humidInfo {
  border: 1px solid #ffffff;
  width: 110px;
  background: #6abdde24;
  padding: 10px;
  text-align: initial;
  margin: 0px 10px;
}
.preText{
  font-size: 14px;
  font-weight:700;
}
.valText {
  font-size: 13px;
  font-weight: 500;
  margin: 5px 0px 0px;
}
`;

export default LandingPageComponent;