import styled from 'styled-components';

const SearchBoxComponent = styled.div`
.searchItem {
  width: 89%;
  margin-top: 10px;
  border-radius: 10px;
  padding: 16px 30px;
  box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);
  border: 2px solid #ffffff;
  @media (max-width: 600px){
    width:81%;
  }
}
.locationIcon{
  position: absolute;
  top: 21px;
  left: 65px;
  @media (max-width: 600px){
    top:23px;
    left: 20px;
  }
}
.searchIcon {
  position: absolute;
  top: 22px;
  right: 65px;
  color: black;
  @media (max-width: 600px){
    top: 23px;
    right: 25px;
  }
}
// @media(max-width: 600){
//   .searchItem {
//     width:100%;
//   }
// }
`;

export default SearchBoxComponent;