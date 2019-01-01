import React, { Component } from "react";  
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar'; 
import {Link} from 'react-router-dom'
import { SearchResults} from './Style'

const API_KEY="1b5adf76a72a13bad99b8fc0c68cb085";

class Popular extends Component {
  state = {
    isLoaded: [],
    data: []
  }; 
 componentDidMount() {       
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`)
    .then(results =>  results.json())
    .then(json => { 
          this.setState ({
            isLoaded: true,
            data: json,
          }) 
    }); 
    console.log(this.state.data);  
} 
 
  render() { 
      
    return (
      <div> 
               <SearchResults>
              <GridList cellHeight={150} cols={7}> 
                {this.state.data.results ? 
                    this.state.data.results.map((item) => 
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

export default Popular;
