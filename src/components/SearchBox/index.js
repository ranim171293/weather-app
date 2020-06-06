import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchBoxComponent from './style';
import { Grid } from '@material-ui/core';

class SearchBox extends React.PureComponent {
  render() {
    return(
      <SearchBoxComponent>
      <Grid style={{position: 'relative'}}>
      <LocationOnIcon className="locationIcon" />
      <input className="searchItem" placeholder="Mumbai, Maharashtra" type="text" />
      <SearchIcon className="searchIcon"></SearchIcon> 
      </Grid>
      </SearchBoxComponent>
    )
  }
}
export default SearchBox;
