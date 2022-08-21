
import React, {Component} from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
import '../App.css';
require("dotenv").config();

 var results = 10;
 
const {REACT_APP_YOUTUBE_API_KEY, REACT_APP_WPGC_Channel_Id} = process.env;
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCzqnaQ9acUUCW--Z62vhP4g&maxResults=10&order=date&key=AIzaSyC2t2q0Ee7zGztEk8Y8KQK42CL3xaLClM8

var finalURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${REACT_APP_WPGC_Channel_Id}&maxResults=${results}&order=date&key=${REACT_APP_YOUTUBE_API_KEY}`

class Youtube extends Component {
    
    constructor(props){ //update the state whenever the data comes in
        super(props);

        this.state={
            resultYT: [] //this is where we keep our data
        };

        this.clicked =this.clicked.bind(this);
    }
clicked(){
    fetch(finalURL)
    .then((response) => response.json())
    .then((responseJson) => {
       // console.log(responseJson);
        const resultYT = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId); // storing the response.Json into resultYT
        this.setState({resultYT});
    })
    .catch((error) => {
        console.error(error);
    });
}

    render(){
        console.log(this.state.resultYT);
        // console.log(finalURL) // THIS MAKES SURE THE FINAL URL CREATES THAT JSON FILE CORRECTLY
        return(
        <div>
            <button onClick={this.clicked}>Get Youtube Video</button>
                {
                   this.state.resultYT.map((link,i) => { // calling all the videos in the map array
                    console.log(link);
                    var frame = <div key = {i} className='youtube'> <iframe width="560" height="315" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen class="video"></iframe></div>
                    return frame
                   }) 
                }
                {this.frame}
                    
                
            
        </div>
    
        );
    }
}

export default Youtube;
