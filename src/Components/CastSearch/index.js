import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import {Link} from 'react-router-dom';
import {MovieDetails} from './Style'

const API_KEY="1b5adf76a72a13bad99b8fc0c68cb085";

class CastSearch extends Component {
    state = { 
        isLoaded: [],
        items: [] 
     } 
     componentDidMount() { 
         const cast_search = this.props.match.params.cast       
        fetch(`http://api.themoviedb.org/3/discover/movie?with_cast=${cast_search}&sort_by=release_date.asc&api_key=${API_KEY}`)
        .then(results =>  results.json())
        .then(json => { 
              this.setState ({
                isLoaded: true,
                items: json,
              }) 
        }); 
        console.log(this.state.items);  
    } 
    render() { 
        var {isLoaded, items } = this.state;
        console.log('arun', this.state.items);

        return ( 
            // const {match} = this.props
            // const matchdata = match.params.moviename            
            <MovieDetails>
                {!isLoaded ? <div>Loading...</div> : (  
                <Card className="Card">
                <h5>Movie Info</h5>
                <ul>
                    {this.state.items.results ? 
                        this.state.items.results.map((it) => <li key={it.id}><Link to={"/movie/"+it.id}>{it.title}</Link></li> ) : ""
                    
                    }
                </ul>
                </Card> ) 
                    
                }
            </MovieDetails>
            
        ); 
    }
}

export default CastSearch