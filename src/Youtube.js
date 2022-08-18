//import { cp } from 'fs';
import React, {Component} from 'react';

var APIKey = 'AIzaSyC2t2q0Ee7zGztEk8Y8KQK42CL3xaLClM8'
var channelId = 'UCzqnaQ9acUUCW--Z62vhP4g'
var results = 10;

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCzqnaQ9acUUCW--Z62vhP4g&maxResults=10&order=date&key=AIzaSyC2t2q0Ee7zGztEk8Y8KQK42CL3xaLClM8

var finalURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${results}&order=date&key=${APIKey}`

class Youtube extends Component {
    
    constructor(props){ //update the state whenever the data comes in
        super(props);

        this.state={
            resultyt: [] //this is where we keep our data
        };

        this.clicked =this.clicked.bind(this);
    }
clicked(){
    fetch(finalURL)
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson);
    })
    .catch((error) => {
        console.error(error);
    });
}

    render(){
        // console.log(finalURL) // THIS MAKES SURE THE FINAL URL CREATES THAT JSON FILE CORRECTLY
        return(
        <div>
            <button onClick={this.clicked}>Get Youtube Video</button>
            <div className='youtube'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6iBwAfkQK8o" title="YouTube video player" 
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
            </div>
        </div>
        );
    }
}

export default Youtube;
