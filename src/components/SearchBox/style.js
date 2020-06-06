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
    width:83%;
  }
  @media (max-width: 960px) and (min-width: 600px){
    width: 90%
  }
}
.locationIcon{
  position: absolute;
  top: 21px;
  left: 5px;
  @media (max-width: 960px) and (min-width: 600px){
    top:23px;
    left: 5px;
  }
}
.searchIcon {
  position: absolute;
  top: 22px;
  right: 10px;
  color: black;
  @media (max-width: 600px){
    top: 23px;
    right: 5px;
  }
  @media (max-width: 960px) and (min-width: 600px){
    top: 23px;
    right: 5px;
  }
}
`;

export default SearchBoxComponent;