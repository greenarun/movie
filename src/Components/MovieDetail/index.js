import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent'; 
import Avatar from '@material-ui/core/Avatar'; 
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography'; 
import CircularProgress from '@material-ui/core/CircularProgress';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import {Link} from 'react-router-dom';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import {MovieDetails, Description, ChipContent} from './Style'

const API_KEY="1b5adf76a72a13bad99b8fc0c68cb085";

class MovieDetail extends Component {
    state = { 
        isLoaded: [],
        items: [] 
     } 
     componentDidMount() { 
         const movie_searched = this.props.match.params.moviename       
        fetch(`https://api.themoviedb.org/3/movie/${movie_searched}?api_key=${API_KEY}&append_to_response=credits`)
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
                    <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className="progressValue">
                        <Icon>
                        <CircularProgress 
                            variant="determinate"
                            value={items.vote_average*10}
                            color="secondary"
                            title="Vote"
                        /> 
                        <p className="vote_count">{items.vote_average*10+"%"}</p>
                        </Icon>
                        </Avatar>
                    } 
                    title={items.title}
                    subheader={items.original_title}
                    />
                    
                    <Description>
                        <CardMedia className="cardMedia"
                        image={"https://image.tmdb.org/t/p/w185_and_h278_bestv2"+ items.poster_path}
                        title={items.title}
                        />
                        <CardContent className="cardContent">
                            <ChipContent> 
                                {this.state.items.genres ? 
                                    this.state.items.genres.map((it) => <Chip label={it.name} /> ) : ""
                                
                                }
                                {this.state.items.spoken_languages ? 
                                    this.state.items.spoken_languages.map((it) => <Chip label={it.name} /> ) : ""
                                
                                }
                            </ChipContent>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography ><strong>Cast Details</strong></Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                <Typography>
                                    <ul>                       
                                        {this.state.items.credits ? 
                                            this.state.items.credits.cast.map((it) => 
                                            <li key={it.id}><Link to={"/castsearch/"+it.id}>{it.name}</Link> <span>({it.character})</span> </li>                
                                        ):
                                        <div>Type Movie name to Search!</div>                   
                                        }
                                    </ul> 
                                </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography ><strong>Crew Details</strong></Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                <Typography>
                                    <ul>                       
                                        {this.state.items.credits ? 
                                            this.state.items.credits.crew.map((it) => 
                                            <li>{it.name} <span>({it.job})</span></li>                
                                        ):
                                        <div>Type Movie name to Search!</div>                   
                                        }
                                    </ul> 
                                </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel> 
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography ><strong>Overview</strong></Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                <Typography>
                                     {this.state.items &&  this.state.items.overview}
                                </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography ><strong>Other details</strong></Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                <Typography>
                                    <ul> 
                                        <li><strong>Release Date : </strong>{this.state.items.release_date}</li>
                                        <li><strong>Run time : </strong>{this.state.items.runtime} minutes</li>
                                        <li><strong>Vote Average : </strong>{this.state.items.vote_average} / 10</li>
                                        <li><strong>Vote Count : </strong>{this.state.items.vote_count}</li>
                                        <li><strong>Popularity : </strong>{this.state.items.popularity}</li>  
                                    </ul>
                                </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                        </CardContent>
                    </Description> 
                </Card> ) 
                    
                }
            </MovieDetails>
            
        ); 
    }
}

export default MovieDetail