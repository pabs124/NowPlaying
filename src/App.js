import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=26db71ce693d3c8852d3ce510e5464e6&language=en-US&page=1')
      .then(res => {
        const data = res.data
        this.setState({movies: data.results})
      })
  }
  
  render() {
    console.log(this.state)
    return (
      <div>
        <div className="App titleBar">
          <table >
            <tbody>
              <tr>
                <td>
                  <img alt="logo" width="50" src="video-camera.svg"/>
                </td>
                <td width="8"/>
                <td>
                  <h1>Trending Movies</h1>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{
            display: "block",
            fontSize: 24,
            textAlign: 'center',
            paddingTop: 10,
            paddingBottom: 10
            
          }}>
          <input
          style={{
            width: "99%",
            paddingLeft: 10
          }} 
          placeholder="Enter a movie title" />
        </div>
        <div>
        {this.state.movies ? this.state.movies.map(movie => <p>{movie.title}</p>) : <p>Loading...</p>}
        </div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </div>
    );
  }
}

export default App;
