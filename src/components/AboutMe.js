import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Image from '../images/mypic.jpg'

class AboutMe extends Component {
    render() {
        return (
            <div className="about-body">
                <Grid container spacing={3} className="contact-grid">
                    <Grid item xs={6}>

                        <img
                            src={Image}
                            className="about-img"
                            alt="mypic.jpg not found"
                        />
                        <h1>Skills</h1>
                        <hr className="contact-hr-style"/>
                        <Grid item xs={3} style={{display:"inline-grid", marginRight:"10rem"}}>
                            <ul style={{fontWeight:"bold", paddingTop:"0.5rem", textAlign: "left"}}>
                                <li>JavaScript</li>
                                <li>Python</li>
                                <li>Java</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                                <li>Git</li>
                            </ul>
                        </Grid>
                        

                        <Grid item xs={3} style={{display:"inline-grid"}}>
                        <ul style={{ fontWeight:"bold",  paddingTop:"0.5rem", textAlign: "left"}}>
                                <li>Reactjs</li>
                                <li>Django</li>
                                <li>SQL</li>
                                <li>MySQL</li>
                                <li>SQLite</li>
                                <li>Ms Excel</li>
                                <li>Ms Word</li>
                            </ul>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <h2 style={{fontSize:"2.5rem"}}>Who is Munish ?</h2>
                        <hr className="contact-hr-style" />
                        <p style={{ fontWeight:"bold", width:"75%", margin:"auto", paddingTop:"1rem", textAlign: "center"}}>
                        Enthusiastic Software Developer with 8 months of Software Development Experience. 
                        1 year of web development experience through projects. 3+ Academic and Individual projects successfully completed using Java, JavaScript and Python. 
                        Always open to challenges as it helps in growth of a person. Excellent Interpersonal and Problem solving Skills.
                        Always open to challenges as it helps in growth of a person. Excellent Interpersonal and Problem solving Skills.
                        </p>
                        <h1>Experience</h1>
                        <hr className="contact-hr-style" />
                        <h2>Software Developer (University of Windsor)</h2>
                        <h3>January 2020 - Present</h3>
                         <ul style={{ fontWeight:"bold", width:"75%", margin:"auto", paddingTop:"0.5rem", textAlign: "left"}}>
                            <li>Currently working as a Software Developer with university of Windsor to create a website using JavaScript and Reactjs.
                                </li> 
                            <li>Concepts like React Hooks and HOC are used.</li>    
                            <li>API’s like react-router-dom, react-icons, react-context.</li>
                            <li>Created database and managed it using MySQL.</li>
                            <li>Used Django framework for Backend </li>
                                </ul>

                        <h2>Software Developer Intern (India Meteorological Department)</h2>
                        <h3>January 2018 - June 2018</h3>
                         <ul style={{ fontWeight:"bold", width:"75%", margin:"auto", paddingTop:"0.5rem", textAlign: "left"}}>
                            <li>Developed Android application to update the weather forecast data into the database.
                                </li> 
                            <li>Worked on project to create and integrate micro services and Restful APIs using Java.</li>    
                            <li>Completed the front-end development using JavaScript, HTML, CSS and Bootstrap.</li>
                            <li> Worked with SQL and MySQL database Management tools to create and manage database for the application.</li>
                            <li>Used system testing and unit testing technique to test the application</li>
                            <li>Designed UML diagrams for Object Oriented Analysis.</li>
                                </ul>           
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default AboutMe
