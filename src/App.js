import React, { Component } from 'react';  
import {BrowserRouter as Router} from 'react-router-dom'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar"; 
import Typography from "@material-ui/core/Typography";
import MovieSearch from './Components/MovieSearch'
import CastSearch from './Components/CastSearch'
import Trending from './Components/Trending'
import MovieDetail from './Components/MovieDetail'
import Popular from './Components/Popular'
import MovieIcon from '@material-ui/icons/Movie';
import {Route, Link} from 'react-router-dom'
import './App.css'; 

 
class App extends Component {
  render() {
    return (
      <Router>
        <div id="App">
        <AppBar position="static" color="default">
            <Toolbar>
            <Link className="home" to="/">
              <Typography variant="h6" color="inherit">
              <MovieIcon className="homeicon"/> Movie DB
              </Typography>
            </Link>

            <Link to="/trending" className="right">Trending(Top20)</Link> 
            <Link to="/popular" className="rightpop">Popular(Top20)</Link> 
            </Toolbar>
          </AppBar>         
          <Route path="/" exact strict component={MovieSearch}></Route>
          <Route path="/movie/:moviename" exact strict component={MovieDetail} ></Route> 
          <Route path="/castsearch/:cast" exact strict component={CastSearch} ></Route> 
          <Route path="/trending" exact strict component={Trending} ></Route> 
          <Route path="/popular" exact strict component={Popular} ></Route>  
        </div>
      </Router>
    );
  }
}

export default App;
