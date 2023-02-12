import React from 'react';
import {image} from "../data/data";

const About = () => (
    <div id="about">
        <h2>About Me</h2>
        <p>I am a software developer with a passion for creating beautiful and intuitive user experiences. I love
           learning new technologies and using them to solve problems in creative ways.</p>
        <img
            src={image}
            alt="I made this"/>
    </div>
);

export default About;
