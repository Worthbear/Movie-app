import React, { Component } from 'react';
import axios from 'axios';

// Includes
const apikey = "7cab3fa448c3344f96941896421ea986";



class RandomFilm extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      date:'',
      overview: '',
      poster: null,
      vote: ''
    }
    this.getFilm=this.getFilm.bind(this);
  }

 movieID(){
  var maxNumber = 284054;
  var randomNumber = Math.floor((Math.random()* maxNumber )+1);
  return randomNumber
}
getImgUrl (image) {
  if (image == null){
  return 'static/media/Moviepicker.3db34dbc.png';
}
  return 'https://image.tmdb.org/t/p/w500/' + image;

}

  getFilm = () => {
    const newMovieID = this.movieID()
    const url = `https://api.themoviedb.org/3/movie/${newMovieID}?api_key=${apikey}`
    axios.get(url)
    .then(data => {
      let res = data.data;
      console.log(res);
      this.setState({
        title: res.title,
        date: res.release_date,
        overview: res.overview,
        poster: res.poster_path,
        vote: res.vote_average

      })
    })
    .catch(err => {
      console.log('error')
    })
  }

  render() {
    console.log(this.state.poster);
    return (
      <div >
      <h1 className="tagline"> Lets see what you get!</h1>

      <div className="main">

        <div className="poster"name="poster_path">
        <img  className=" image" src={this.getImgUrl(this.state.poster)} alt="" />
        </div>
      <div className="content">
        <h1 name="title">{this.state.title}</h1>
        <hr/>
      <p name="date">Release date: {this.state.date}</p>
      <p name="overview">Description: {this.state.overview}</p>
        <p name="vote_average">Vote: {this.state.vote}</p>
      </div>

      </div>
      <div className="btn-area">
      <button className="btn" onClick={this.getFilm}>Get Movie</button>
      </div>
      </div>
    );
  }
}

export default RandomFilm;
