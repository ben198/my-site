import React, { Component } from 'react';
import projectSrc from '../../public/images/tweets.jpg';

export default class Project extends Component {
    render() {
        return (
            <div className="project">
                <img className="project-img" src={projectSrc}/>
                <div className="project-info">
                    <h3>React Google Map Tweets</h3>
                    <p>By leveraging the features of libraries such as <a href="https://github.com/istarkov/google-map-react">google-map-react</a> and <a href="https://github.com/ttezel/twit">twit</a> I was able to create an app which appends tweet data, as a React component, to a Google Map. A Node server receives tweets from the Twitter streaming API, which are then piped to the client using <a href="https://github.com/socketio/socket.io">socket.io</a>. Still a work in progress but the app's most basic feature, getting data and displaying it, is working.</p>
                    <button className="btn btn-primary" type="button" onclick="location.href='http://bentownsend.name/work/react-twitter/'">Have a look</button>
                </div>
            </div>
        );
    }
}