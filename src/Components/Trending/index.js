import React, { Component } from "react"; 
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem'; 
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar'; 
import {Link} from 'react-router-dom'
import {Search, SearchResults} from './Style'

const API_KEY="1b5adf76a72a13bad99b8fc0c68cb085";

class Trending extends Component {
  state = {
    trending: undefined,
    data: []
  };
 
handleChange  = async (event) => {
  this.setState({ trending: event.target.value });
  const time_window = event.target.value
    const api_call = await fetch(`http://api.themoviedb.org/3/trending/movie/${time_window}?api_key=${API_KEY}`);
    const data = await api_call.json();
    this.setState({
      data: data.results
    })
};
  render() { 
      
    return (
      <div> 
              <Search>
                 
                 
        <FormControl variant="outlined" className="selectoption">
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-trending-simple"
          >
            Trending
          </InputLabel>
          <Select 
            value={this.state.trending}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="trending"
                id="outlined-trending-simple"
              />
            }
          >
            <MenuItem value="">
              <em>Select Filter</em>
            </MenuItem>
            <MenuItem value={"day"}>day</MenuItem>
            <MenuItem value={"week"}>Week</MenuItem>
          </Select>
        </FormControl>
              </Search> 
              <SearchResults>
              <GridList cellHeight={150} cols={7}> 
                {this.state.data ? 
                    this.state.data.map((item) => 
                      <GridListTile key={item.id}>
                        <Link to={"/movie/"+item.id}>
                          <img src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2/"+item.poster_path} alt={item.title} />
                          <GridListTileBar title={item.title} 
                          />
                        </Link>
                      </GridListTile>                      
                  ):
                  <div>Use Filter option to find trending movies</div>                   
                  }
              </GridList>
              {this.state.data < 1 ?  <div className="notfound">Use Filter option to find trending movies</div> : ""}
              </SearchResults>

      </div>
    );
  }
}

export default Trending;
