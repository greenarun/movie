import React, { Component } from "react"; 
import InputBase from '@material-ui/core/InputBase'; 
import SearchIcon from '@material-ui/icons/Search';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar'; 
import {Link} from 'react-router-dom'
import {Search, SearchResults} from './Style'

const API_KEY="1b5adf76a72a13bad99b8fc0c68cb085";

class MovieSearch extends Component {
  state = {
    data: []
  };
  getMovieInfo = async (event) => {
    const movie_search = event.target.value
    const api_call = await fetch(`http://api.themoviedb.org/3/search/movie?query=${movie_search}&api_key=${API_KEY}`);
    const data = await api_call.json();
    this.setState({
      data: data.results
    })
}
  render() { 
      
    return (
      <div> 
              <Search>
                <div className="search-icon">
                  <SearchIcon color="disabled"/>
                </div> 
                <InputBase placeholder="Search Movie Here..." className="search-input" onChange={this.getMovieInfo} /> 
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
                  <div>Type Movie name to Search!</div>                   
                  }
              </GridList>
              {this.state.data < 1 ?  <div className="notfound">Sorry ! Results not found</div> : ""}
              </SearchResults>

      </div>
    );
  }
}

export default MovieSearch;
